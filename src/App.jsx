import { useState } from "react";
import porto from "./data/porto";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import About from "./components/About";
import Portofolio from "./components/portofolio";
import Contact from "./components/Contact";
function App() {
  const [portos, setPortos] = useState(porto);
  return (
    <div className="bg-white">
      <Navigation ></Navigation>
      <Banner ></Banner>
      <About></About>
      <Portofolio portos={portos}></Portofolio>
      <Contact></Contact>
    </div>
  )
}

export default App
