const Button = (props) => {
    return ( 
        <button onClick={props.add} type={props.type} className="w-full xs:max-w-[150px] lg:max-w-[200px] bg-[#b45309] px-3 py-2 rounded-2xl text-white hover:bg-[#fb923c] active:scale-90">
            {props.title}
        </button>
     );
}
 
export default Button;