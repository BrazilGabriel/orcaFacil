import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Project from "./components/pages/Project";
import axios from "axios";

const url = `https://custos-banco.onrender.com`; // Replace with your Render URL
const interval = 900000; // Interval in milliseconds (30 seconds)

function reloadWebsite() {
  console.log("enviado")
  axios.get(url)
    .then(response => {
      console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
    })
    .catch(error => {
      console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
    });
}
setInterval(reloadWebsite, interval);



function App() {

  return (
    <Router>
      <Navbar />
      <Container customClass="minHeight">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
