import ModalCoffeeList from "../coffe-list/ModalCoffeeList";
import CustomForm from "../form/CustomForm";
import EmptyBasket from "./EmptyBasket";

const ModalWindow = (props) => {

    return (
        <div /* onClick={props.onToggleModal}  */ className="w-screen h-screen backdrop-blur-sm absolute z-50 top-0 left-0 overflow-scroll">
            <div className="w-9/12 py-5 bg-[#7c2d12] my-[50px] text-white text-xl rounded-xl text-center overflow-scroll mx-auto">
                {
                    props.order.length
                        ? <div>
                            <ModalCoffeeList order={props.order} />
                            <CustomForm />
                          </div>
                        : <EmptyBasket />
                }

            </div>
        </div>
    );
}

export default ModalWindow;