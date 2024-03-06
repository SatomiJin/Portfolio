import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Introduce from "./Component/Introduce/Introduce";
import Project from "./Component/Project/Project";
import TechStack from "./Component/TechStack/TechStack";

function App() {
  return (
    <div className="App" style={{ padding: "2em 0 0 0" }}>
      <Introduce />
      <TechStack />
      <About />
      <Project />
      <Contact />
      <Footer />
      <Header />
    </div>
  );
}

export default App;
