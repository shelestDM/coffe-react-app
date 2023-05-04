import { useState , useEffect} from "react";
import CoffeList from "./components/coffe-list/CoffeList";
import HeroSection from "./components/hero-section/HeroSection";
import NavBar from "./components/nav/NavBar";

function App() {

  const [order, setOrder] = useState([]);
  let [orderSize, setOrderSize] = useState(0);
  let [orderPrice, setOrderPrice ] = useState(0);

  useEffect(() => {
    calculateOrderSize();
  }, [order]);

  useEffect(() => {
    calculateOrderPrice();
  }, [orderSize]);

  const getCountForOrderHandler = (newOrder) => {
    setOrder((prevOrder) => {
      return [newOrder, ...(prevOrder.filter(coffe=> coffe.id !== newOrder.id))];
    });
  };

  const calculateOrderSize = () => {
    let calculatedSize = 0;
    for (let coffeItem of order) {
      calculatedSize += coffeItem.count;
    }
    setOrderSize(calculatedSize);
    console.log(order);
  };

  const calculateOrderPrice = () => {
    let calculatedPrice = 0;
    for (let coffeItem of order) {
      calculatedPrice += coffeItem.count * coffeItem.price;
    }
    setOrderPrice(calculatedPrice);
  }



  return (

    <div >
      <NavBar orderSize={orderSize} orderPrice={orderPrice} />
      <HeroSection/>
      <CoffeList getCountForOrder={getCountForOrderHandler} />
    </div>
  );
}

export default App;
