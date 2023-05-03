import { useState } from "react";
import Button from "../UI/Button";

const CoffeItem = (props) => {

    let [ count, setCount ] = useState(0);

    const addCoffeToOrder = () => {
        props.getCountForOrder(createOrder()); 
    }

    const createOrder = () => {
        const orderItem = {
            id: props.coffe.id,
            count: count
        }
        return orderItem;
    }

    const changeCoffeCount = () => {
        setCount(count+=1)
    }

    return ( 
        <div className="border border-[#c2410c] rounded-xl sm:w-full mx-auto border-black w-full px-3 py-3 gap-y-10 gap-x-3 flex flex-col xs:justify-between items-center xs:flex-row ">
            <div className="w-full xs:w-3/4 flex flex-col gap-y-4 text-center xs:text-left xs:gap-y-2">
                <h1 className="font-bold">
                    {props.coffe.title}
                </h1>
                <p>{props.coffe.description}</p>
                <p><span className="font-bold">Coffee content:</span> {props.coffe.ingredients}</p>
                <span className="font-bold text-[#7c2d12]">
                    Price: {props.coffe.price} $
                </span>
            </div>
            <div className="w-1/2 xs:w-1/4 space-y-4 text-center xs:text-right">
                 <div className="space-x-2">
                    <label htmlFor="count">Count</label>
                    <input value={count} onChange={changeCoffeCount} className="w-20 border xs:w-12 rounded-lg text-black pl-4" name="count" type="number" />
                </div>
                <Button add={addCoffeToOrder} />
            </div>
        </div>
     );
}
 
export default CoffeItem;