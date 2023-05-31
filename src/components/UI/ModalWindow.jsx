import ModalCoffeeList from "../coffe-list/ModalCoffeeList";
import CustomForm from "../form/CustomForm";
import Button from "./Button";
import EmptyBasket from "./EmptyBasket";
import { useState } from "react";


const ModalWindow = (props) => {

    const closeModal = (event) => {
        // event.stopPropagation()
        props.onToggleModal();
        // console.log(event.target.id );
        // if(event.target.id === 'modal'){
            
        // }
    }

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm);
    }

    return (
        <div id="modal"  className="w-screen h-screen backdrop-blur-sm absolute z-50 top-0 left-0 overflow-scroll">
            <div className="relative w-9/12 py-5 border bg-[#ef6c00] my-[50px] text-white text-xl rounded-xl text-center overflow-scroll mx-auto">
                <span onClick={closeModal} className="pointer absolute text-sm bg-red-500 py-1 px-3 rounded-[50%] right-5 top-5">X</span>
                {
                    props.order.length
                        ? <div>
                            <ModalCoffeeList order={props.order} />
                            <Button add={toggleForm} title={'Place an order'} />
                            {showForm && <CustomForm toggleForm={toggleForm} closeModal={closeModal} order={props.order}/>}
                          </div>
                        : <EmptyBasket />
                }
            </div>
        </div>
    );
}

export default ModalWindow;