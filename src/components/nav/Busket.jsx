import busket from '../assets/busket.png'

const Busket = (props) => {
    return (
        <div className="bg-[#ea580c] px-4 py-2 rounded-2xl flex gap-x-4 items-center">
            <img className="w-4 h-4" src={busket} alt="busket__logo" />
            <div className='hidden sm:flex gap-x-4 items-center'>
                <p>
                    Your order
                </p>
                <span className='font-bold'>
                    5
                </span>
            </div>
        </div>
    );
}

export default Busket;