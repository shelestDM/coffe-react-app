import { useState } from "react";
import CoffeList from "./components/coffe-list/CoffeList";
import HeroSection from "./components/hero-section/HeroSection";
import NavBar from "./components/nav/NavBar";

function App() {

  const [ order, setOrder ] = useState([]);

  const getCountForOrderHandler = (newOrder) => {
    setOrder((prevOrder)=>{
      return [newOrder, ...prevOrder];
    });
    console.log(order);
  }

  function test () {
    console.log(order);
  }

  return (

    <div >

      <NavBar test={test} />
      <HeroSection/>
      <CoffeList getCountForOrder={getCountForOrderHandler}/>

    </div>
  );
}

export default App;
