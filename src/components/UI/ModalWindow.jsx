import ModalCoffeeList from "../coffe-list/ModalCoffeeList";
import EmptyBasket from "./EmptyBasket";

const ModalWindow = (props) => {

    return (
        <div onClick={props.onToggleModal} className="w-screen h-screen backdrop-blur-sm absolute z-50 top-0 left-0 flex items-center justify-center">
            <div className="w-9/12 min-h-[200px] py-5 bg-[#7c2d12] text-white text-xl rounded-xl text-center">
                {
                    props.order.length 
                    ? <ModalCoffeeList order={props.order}/> 
                    : <EmptyBasket />
                }
            </div>
        </div>
    );
}

export default ModalWindow;