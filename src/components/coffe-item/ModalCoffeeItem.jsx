const ModalCoffeeItem = (props) => {
    return (
        <div className="border p-3 w-full xs:w-3/4 flex flex-row justify-between gap-y-4 text-center xs:text-left xs:gap-y-2">
            <h1>
                {props.orderItemData.title}
            </h1>
            <div className="flex flex-col gap-y-3 justify-between font-bold">
                <p>
                    x: {props.orderItemData.count}
                </p>
                <span className="font-bold">
                    Total price: {props.orderItemData.count * props.orderItemData.price} $
                </span>
            </div>
        </div>
    );
}

export default ModalCoffeeItem;