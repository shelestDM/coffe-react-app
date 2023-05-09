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
  }, [order]);

  useEffect(() => {
    calculateOrderPrice();
  }, [orderSize]);

  const getCountForOrderHandler = (newOrder) => {
    console.log(newOrder);
    mutateExistingCoffeeObj(newOrder)
    setOrder((prevOrder) => {
      return [newOrder, ...prevOrder];
    });
  };

  const calculateOrderSize = () => {
    let calculatedSize = 0;
    for (let coffeItem of order) {
      calculatedSize += coffeItem.count;
    }
    setOrderSize(calculatedSize);
    // console.log(order);
  };

  const calculateOrderPrice = () => {
    let calculatedPrice = 0;
    for (let coffeItem of order) {
      calculatedPrice += coffeItem.count * coffeItem.price;
    }
    setOrderPrice(calculatedPrice);
  }

  const mutateExistingCoffeeObj = (newOrder) => {
    order.map((orderItem)=>{
      if(orderItem.id === newOrder.id){
        setOrder((prevOrder) => {

          return [newOrder, ...prevOrder];
        });
        console.log('yes!');
      }else{
        console.log('no!');
      }
    })
  }


  return (
    <CoffeContext.Provider value={coffeeMenu}>
      <div >
        <NavBar orderSize={orderSize} orderPrice={orderPrice} />
        <HeroSection />
        <CoffeList getCountForOrder={getCountForOrderHandler} />
      </div>
    </CoffeContext.Provider>
  );
}

export default App;
