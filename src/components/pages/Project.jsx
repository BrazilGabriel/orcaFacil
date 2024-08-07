import { parse, v4 as uuidv4 } from "uuid";
import { NumericFormat } from "react-number-format";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import Container from "../layout/Container";
import Message from "../layout/Message";
import ProjectForm from "../project/ProjectForm";
import ServiceForm from "../service/ServiceForm";
import ServiceCard from "../service/ServiceCard";

function Project() {
  const port = import.meta.env.VITE_PORT;
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [services, setServices] = useState([]);

  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);

  const [message, setMessage] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(`${port}/projects/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
          setServices(data.services);
        })
        .catch((err) => console.log(err));
    }, 1000);
  }, [id]);

  function editPost(project) {
    const port = import.meta.env.VITE_PORT;
    setMessage("");
    if (project.budget < project.cost) {
      setMessage("O orçamento não pode ser menor que o custo do projeto!");
      setType("error");
      return false;
    }

    fetch(`${port}/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        //mensagem
        setMessage("Projeto atualizado!");
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  function createService(project) {
    const port = import.meta.env.VITE_PORT;

    //last service
    const lastService = project.services[project.services.length - 1];
    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    //maximum value validation
    if (newCost > parseFloat(project.budget)) {
      setMessage("Orçamento ultrapassado, verifique o valor do serviço");
      setType("error");
      project.services.pop();
      return false;
    }

    //add service cost to project total cost
    project.cost = newCost;

    //update project

    fetch(`${port}/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        //exibir os serviços
        setShowServiceForm(false);
      })
      .catch((err) => console.log(err));
  }

  function removeService(id, cost) {
    const port = import.meta.env.VITE_PORT;
    setMessage("");
    const servicesUpdated = project.services.filter(
      (service) => service.id !== id
    );
    const projectUpdated = project;
    projectUpdated.services = servicesUpdated;
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

    fetch(`${port}/projects/${projectUpdated.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(projectUpdated),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(projectUpdated);
        setServices(servicesUpdated);
        setMessage("Serviço removido com sucesso!");
        setType("success");
      })
      .catch((err) => console.log(err));
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  return (
    <>
      {project.name ? (
        <div className="p-8 w-full">
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className="border-b border-b-slate-700 mb-5 pb-5 flex justify-between flex-wrap items-center">
              <h1 className="mb-2 text-indigo-500 p-2 text-3xl font-bold">
                Projeto: {project.name}
              </h1>
              <button
                className="bg-slate-950 text-white font-bold text-sm py-3 px-5 cursor-pointer rounded-md border border-white flex items-center justify-center transition duration-500 hover:bg-slate-900 hover:text-indigo-500"
                onClick={toggleProjectForm}
              >
                {!showProjectForm ? "Editar projeto" : "Cancelar"}
              </button>
              {!showProjectForm ? (
                <div className="w-full">
                  <p className="mb-2">
                    <span className="font-bold">Categoria:</span>{" "}
                    {project.category.name}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">Total de Orçamento: </span>
                    <NumericFormat
                      displayType="text"
                      value={project.budget}
                      decimalSeparator=","
                      prefix="R$ "
                      thousandSeparator="."
                    />
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">Total Utilizado: </span>
                    <NumericFormat
                      displayType="text"
                      value={project.cost}
                      decimalSeparator=","
                      prefix="R$ "
                      thousandSeparator="."
                    />
                  </p>
                </div>
              ) : (
                <div className="w-full">
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className="border-b border-b-slate-700 mb-5 pb-5 flex justify-between flex-wrap">
              <h2 className="mb-2 text-2xl font-bold">Adicione um serviço: </h2>
              <button
                className="bg-slate-950 text-white font-bold text-sm py-3 px-5 cursor-pointer rounded-md border border-white flex items-center justify-center transition duration-500 hover:bg-slate-900 hover:text-indigo-500"
                onClick={toggleServiceForm}
              >
                {!showServiceForm ? "Adicionar serviço" : "Fechar"}
              </button>
              <div className="w-full">
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    btnText="Adicionar Serviço"
                    projectData={project}
                  />
                )}
              </div>
            </div>
            <h2 className="mb-2 text-2xl font-bold">Serviços</h2>
            <Container customClass="start">
              {services.length > 0 &&
                services.map((service) => (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))}
              {services.length === 0 && (
                <p className="mb-2">Não há serviços cadastrados.</p>
              )}
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;
