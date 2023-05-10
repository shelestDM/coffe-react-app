import ModalCoffeeItem from "../coffe-item/ModalCoffeeItem";
import Button from "../UI/Button";

const ModalCoffeeList = (props) => { 
    return (
        <div className="space-y-5">
            <p className="py-5 flex justify-center items-center">
                Check your order
            </p>
            <div className="flex gap-y-5 flex-col items-center">
               {
                props.order.map(orderItem=>
                    <ModalCoffeeItem key={orderItem.id} orderItemData={orderItem}/>
                )
               }
            </div>
            <Button title={'Place an order'} />
        </div>
    );
}

export default ModalCoffeeList;