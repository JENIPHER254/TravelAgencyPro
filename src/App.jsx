import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Features from "./components/features/features";
import About from "./components/about/about";
import Pricing from "./components/pricing/pricing";

function App() {
  return (
    <>
      {/* Navbar section */}
      <Navbar />
      {/* ! Navbar section */}

      {/* Home section */}
      <Home />
      {/* ! Home section */}
      {/* Home section */}
      <Features />
      {/* ! Home section */}
      {/* About section */}
      <About />
      {/* ! About section */}
       {/* Pricing section */}
       <Pricing />
      {/* ! Pricing section */}
    </>
  );
}

export default App;
