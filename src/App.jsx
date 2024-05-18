import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Features from "./components/features/features";

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
    </>
  );
}

export default App;
