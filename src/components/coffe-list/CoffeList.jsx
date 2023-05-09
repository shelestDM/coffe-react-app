import { useContext } from "react";
import CoffeItem from "../coffe-item/CoffeItem";
import { CoffeContext } from "../../context/coffeeContext";

const CoffeList = (props) => {
    const coffeMenu = useContext(CoffeContext)

    return (
        <div className="w-[90%] mx-auto mt-4 sm:w-2/3 flex flex-col gap-y-5 sm:mx-auto md:w-1/2">
            {
                coffeMenu.map( coffe => 
                    <CoffeItem getCountForOrder={props.getCountForOrder} key={coffe.id} coffe={coffe}/>
                )
            }
        </div>
    );
}

export default CoffeList;