import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Body from "./components/Body ";
import Projects from "./components/Projects";
import About from "./components/About";
import End from "./components/End";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Body />
      <Projects />
      <About />
      <End />
      <Footer />
    </div>
  );
}

export default App;
