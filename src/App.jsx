import { useState } from "react";
import porto from "./data/porto";
import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Social from "./components/Social";
import Footer from "./components/Footer";
function App() {
  const [portos, setPortos] = useState(porto);
  return (
    <>
      <Navigation ></Navigation>
      <Banner ></Banner>
      <About></About>
      <Portofolio portos={portos}></Portofolio>
      <Social></Social>
      <Footer></Footer>
    </>
  )
}

export default App
