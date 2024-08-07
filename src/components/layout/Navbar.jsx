import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../../img/logo2.svg";

function Navbar() {
  return (
    <nav className={`flex content-between bg-blue-950 p-4`}>
      <Container>
            <Link to="/">
              <img className="max-w-12" src={logo} alt="Costs" />
            </Link>
        <ul className={`flex items-center`}>
          <li className={`mr-4`}>
            <Link to="/" className="text-white hover:text-indigo-400">Home</Link>
          </li>
          <li className={`mr-4`}>
            <Link to="/projects" className="text-white hover:text-indigo-400">Projetos</Link>
          </li>
          <li className={`mr-4`}>
            <Link to="/about" className="text-white hover:text-indigo-400">Sobre</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
export default Navbar;
