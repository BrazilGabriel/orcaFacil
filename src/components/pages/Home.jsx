import savings from "../../img/home.svg"
import LinkButton from "../layout/LinkButton"
function Home(){
    const port = import.meta.env.VITE_PORT;
    console.log(port)
    return (
    <section className="w-full flex items-center flex-col md:flex-row md:justify-between p-16">
        <div className="flex flex-col justify-center items-center md:items-start">

        <h1 className="text-4xl mb-2 font-bold">Bem-vindo ao <span className="text-indigo-500 p-1 ">OrçaFácil</span></h1>
        <p className="mb-6 text-slate-400 max-w-[40ch] text-center md:text-left">Comece a gerenciar os seus projetos de forma <b>simples e objetiva</b> agora mesmo!</p>
        <LinkButton to="/newProject" text="Criar Projeto"/>
        </div>

        <img className="w-80 my-8 mx-0" src={savings} alt="Costs" />
    </section>
    )
}

export default Home