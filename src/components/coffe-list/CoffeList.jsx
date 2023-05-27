import { useEffect, useState } from "react";
import CoffeItem from "../coffe-item/CoffeItem";
import useFetch from "../../hooks/useFetch";

const CoffeList = (props) => {

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchCoffee = async () => {
        const response = await fetch('https://jokes-react-app-default-rtdb.firebaseio.com/coffee.json');
        const responseData = await response.json();

        let coffeArr = [];

        for (const key in responseData) {
            coffeArr.push({
                id: key,
                price: responseData[key].price,
                description: responseData[key].description,
                title: responseData[key].title,
                ingredients: responseData[key].ingredients
            })
        }
       setCoffeeList(coffeArr);
    };

    const [fetchData, isLoading, errorMessage] = useFetch(fetchCoffee);
    const [coffeeList, setCoffeeList] = useState([]);


    if (isLoading) {
        return (
            <section className="animate-pulse text-center font bold text-[25px] mt-5">
                <p className="animate-bounce">Please wait until the app gets the data from the server...</p>
            </section>
        )
    }
    if(errorMessage){
        return (
            <section className="animate-pulse text-red-500 text-center font bold text-[25px] mt-5">
                <p className="animate-bounce">{errorMessage}</p>
            </section>
        )
    }

    return (
        <div className="animate-coffeeAppear w-[90%] mx-auto mt-4 sm:w-2/3 flex flex-col gap-y-5 sm:mx-auto md:w-1/2">
            {
                coffeeList.map(coffe =>
                    <CoffeItem getCountForOrder={props.getCountForOrder} key={coffe.id} coffe={coffe} />
                )
            }
        </div>
    );
}

export default CoffeList;