import ModalCoffeeItem from "../coffe-item/ModalCoffeeItem";

const ModalCoffeeList = (props) => {

    const startetPrice = 0;
    const totalPrice = props.order.reduce(
        (accumulator, item) => accumulator + (item.price * item.count), startetPrice);

    return (
        <div className="space-y-5 py-10">
            <p className="flex justify-center items-center">
                Check your order
            </p>
            <div className="flex gap-y-5 flex-col items-center">
                {
                    props.order.map(orderItem =>
                        <ModalCoffeeItem key={orderItem.id} orderItemData={orderItem} />
                    )
                }
            </div>
            <div className="rounded-xl bg-white mx-auto max-w-[40%] lg:max-w-[200px] py-4 text-black">
                Total price: {totalPrice} $
            </div>
        </div>
    );
}

export default ModalCoffeeList;