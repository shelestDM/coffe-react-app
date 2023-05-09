import busket from '../assets/busket.png'

const Busket = (props) => {

    return (
        <button onClick={props.onToggleModal} className="bg-[#ea580c] font-bold  px-4 py-2 rounded-2xl flex gap-x-4 items-center">
            <p className='hidden sm:inline'>
                Your order : 
            </p>
            <span>
                {props.orderSize}
            </span>
            <img className="w-4 h-4" src={busket} alt="busket__logo" />
            <span >
                {props.orderPrice} $
            </span>
        </button>
    );
}

export default Busket;