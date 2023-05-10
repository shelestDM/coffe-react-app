import { useState, useEffect, useContext } from "react";
import CoffeList from "./components/coffe-list/CoffeList";
import HeroSection from "./components/hero-section/HeroSection";
import NavBar from "./components/nav/NavBar";
import { CoffeContext } from "./context/coffeeContext";

function App() {

  const coffeeMenu = useContext(CoffeContext);

  const [order, setOrder] = useState([]);
  let [orderSize, setOrderSize] = useState(0);
  let [orderPrice, setOrderPrice] = useState(0);

  useEffect(() => {
    calculateOrderSize();
    console.log(order);
  }, [order]);

  useEffect(() => {
    calculateOrderPrice();
  }, [orderSize]);

  const calculateOrderSize = () => {
    let calculatedSize = 0;
    for (let coffeItem of order) {
      calculatedSize += coffeItem.count;
    }
    setOrderSize(calculatedSize);
  };

  const calculateOrderPrice = () => {
    let calculatedPrice = 0;
    for (let coffeItem of order) {
      calculatedPrice += coffeItem.count * coffeItem.price;
    }
    setOrderPrice(calculatedPrice);
  }

  const getCountForOrderHandler = (newOrder) => {
    setOrder((prevOrder) => {
      changeCoffeeCountByIdIfAddExistingCoffeeObj(prevOrder, newOrder);
      return [newOrder,...prevOrder.filter(item=>item.id!==newOrder.id)];
    });
  };

  const changeCoffeeCountByIdIfAddExistingCoffeeObj = (prevOrder, newOrder) => {
    prevOrder.forEach((item)=>{
      if(item.id===newOrder.id){
      newOrder.count+=item.count;
    }}) 
  }


  return (
    <CoffeContext.Provider value={coffeeMenu}>
      <div >
        <NavBar order={order} orderSize={orderSize} orderPrice={orderPrice} />
        <HeroSection />
        <CoffeList getCountForOrder={getCountForOrderHandler} />
      </div>
    </CoffeContext.Provider>
  );
}

export default App;
