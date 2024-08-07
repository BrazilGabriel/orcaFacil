import { useLocation } from "react-router-dom";
import folder from "../../img/folder.svg";
import { useState, useEffect } from "react";
import Message from "../layout/Message";
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";
import Container from "../layout/Container";
import ProjectCard from "../project/ProjectCard";
import EmptyPage from "../layout/EmptyPage";

function Projects() {
  const port = import.meta.env.VITE_PORT;
  console.log(port)
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const[projectMessage, setProjectMessage] = useState("")

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch(`${port}/projects`, {
        method: "GET",
        headers: {
          "Content-type": "apllication/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 10);
  }, []);

  function removeProject(id) {
    const port = import.meta.env.VITE_PORT;
    setProjectMessage("")
    fetch(`${port}/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "apllication/json",
      },
    })
      .then( () => {
        setProjects(projects.filter((project) => project.id !== id));
        //message
        setProjectMessage("Projeto removido com sucesso!")
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="w-full p-8">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold">Meus Projetos</h1>
        <LinkButton to="/newProject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      {projectMessage && <Message type="success" msg={projectMessage} />}

      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && <EmptyPage displayImg={folder} displayImgAlt={"pasta vazia"} text={"Não há projetos cadastrados"}/>}
      </Container>
    </div>
  );
}

export default Projects;
