import { useNavigate } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";


function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    const port = import.meta.env.VITE_PORT;
    //initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch(`${port}/projects`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        //redirect
        const state = { message: "Projeto criado com sucesso!" };
        navigate("/projects", {state});
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="min-w-96 my-0 mx-auto p-12">
      <h1 className="mb-2 text-3xl font-bold">Criar Projeto</h1>
      <p className="text-slate-600">Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;
