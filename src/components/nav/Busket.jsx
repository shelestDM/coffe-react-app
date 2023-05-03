import busket from '../assets/busket.png'

const Busket = (props) => {
    return (
        <div className="bg-[#ea580c] px-4 py-2 rounded-2xl flex gap-x-4 items-center">
            <p className='font-bold hidden sm:inline'>
                Your order : 
            </p>
            <span className='font-bold'>
                {props.orderSize}
            </span>
            <img className="w-4 h-4" src={busket} alt="busket__logo" />
        </div>
    );
}

export default Busket;