import "./App.css";
import Category from "./components/Category";
import Food from "./components/Food";
import HeadlkineCards from "./components/HeadlkineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeadlkineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
