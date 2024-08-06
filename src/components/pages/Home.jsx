import savings from "../../img/savings.svg"
import LinkButton from "../layout/LinkButton"
function Home(){
    const port = import.meta.env.VITE_PORT;
    console.log(port)
    return (
    <section className="w-full flex flex-col items-center justify-center p-16">
        <h1 className="text-4xl mb-2">Bem-vindo ao <span className="text-amber-400 p-1 bg-slate-900">Costs</span></h1>
        <p className="mb-6 text-slate-600">Comece a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to="/newProject" text="Criar Projeto"/>

        <img className="w-80 my-8 mx-0" src={savings} alt="Costs" />
    </section>
    )
}

export default Home