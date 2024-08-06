import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../../img/costs_logo.png";

function Navbar() {
  return (
    <nav className={`flex content-between bg-slate-900 p-4`}>
      <Container>
            <Link to="/">
              <img src={logo} alt="Costs" />
            </Link>
        <ul className={`flex items-center`}>
          <li className={`mr-4`}>
            <Link to="/" className="text-white hover:text-amber-400">Home</Link>
          </li>
          <li className={`mr-4`}>
            <Link to="/projects" className="text-white hover:text-amber-400">Projetos</Link>
          </li>
          <li className={`mr-4`}>
            <Link to="/contact" className="text-white hover:text-amber-400">Contato</Link>
          </li>
          <li className={`mr-4`}>
            <Link to="/company" className="text-white hover:text-amber-400">Empresa</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
export default Navbar;
