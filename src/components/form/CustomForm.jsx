import { useState } from "react";
import Button from "../UI/Button";

const CustomForm = (props) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');

    const changeName = (event) => {
        setName(event.target.value)
    };
    const changePhone = (event) => {
        setPhone(event.target.value)
    };
    const changeCity = (event) => {
        setCity(event.target.value)
    };
    const changeStreet = (event) => {
        setStreet(event.target.value)
    };
    const sendForm = (e) => {
        e.preventDefault();

        const finalOrder = {
            name: name,  
            phone: phone,
            city: city,
            street: street,
            order: createOrderObj()
        };
        sendRequest(finalOrder);
        console.log('order: ', finalOrder);
    };

    const sendRequest = async (order) => {
        const response = await fetch('https://jokes-react-app-default-rtdb.firebaseio.com/orders.json',{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(order)
        });
        if(response.status === 200){
            clearInputs();
            props.closeModal();
            
        }
    };
    
    const createOrderObj = () => {
        const order = [];
        for (const item of props.order) {
            order.push({
                title: item.title,
                count: item.count
            });
        };
        return order;
    };

    const clearInputs = () => {
        setCity('');
        setName('');
        setPhone('');
        setStreet('');
    };

    return ( 
        <form onSubmit={sendForm} className="flex flex-col gap-5 py-5 w-3/4 mx-auto">
            <div className="flex flex-col items-start gap-3">
                <label htmlFor="name">Enter your name</label>
                <input value={name} onChange={changeName} className="py-2 px-3 rounded-xl text-black" type="text" id="name" />
            </div>
            <div className="flex flex-col items-start gap-3">
                <label htmlFor="phone">Enter your phone</label>
                <input value={phone} onChange={changePhone} className="py-2 px-3 rounded-xl text-black" type="phone" id="phone" />
            </div>
            <div className="flex flex-col items-start gap-3">
                <label htmlFor="city">Enter your city</label>
                <input value={city} onChange={changeCity} className="py-2 px-3 rounded-xl text-black" type="text" id="city" />
            </div>
            <div className="flex flex-col items-start gap-3">
                <label htmlFor="street">Enter your street</label>
                <input value={street} onChange={changeStreet} className="py-2 px-3 rounded-xl text-black" type="text" id="street" />
            </div>
            <div>
                <Button id={'send__order'} title={'Order'} type={'submit'}/>
            </div>
        </form>
     );
}
 
export default CustomForm;