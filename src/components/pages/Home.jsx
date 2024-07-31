import styles from "./Home.module.css"
import savings from "../../img/savings.svg"
import LinkButton from "../layout/LinkButton"
function Home(){
    const port = import.meta.env.VITE_PORT;
    console.log(port)
    return (
    <section className={styles.home_container}>
        <h1>Bem-vindo ao <span>Costs</span></h1>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to="/newProject" text="Criar Projeto"/>

        <img src={savings} alt="Costs" />
    </section>
    )
}

export default Home