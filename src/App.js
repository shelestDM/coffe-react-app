import { useState , useEffect} from "react";
import CoffeList from "./components/coffe-list/CoffeList";
import HeroSection from "./components/hero-section/HeroSection";
import NavBar from "./components/nav/NavBar";

function App() {

  const [order, setOrder] = useState([]);
  let [orderSize, setOrderSize] = useState(0);
  let [orderPrice, setOrderPrice ] = useState(0);

  useEffect(() => {
    calculateOrder();
  }, [order]);

  const getCountForOrderHandler = (newOrder) => {
    setOrder((prevOrder) => {
      return [newOrder, ...prevOrder];
    });
  };

  const calculateOrder = () => {
    let calculatedSize = 0;
    let calculatedPrice = 0;
    for (let coffeItem of order) {
      calculatedSize += coffeItem.count;
    }
    setOrderSize(calculatedSize);
    console.log(order);
  };

  return (

    <div >

      <NavBar orderSize={orderSize} />
      {/* <HeroSection/> */}
      <CoffeList getCountForOrder={getCountForOrderHandler} />

    </div>
  );
}

export default App;
