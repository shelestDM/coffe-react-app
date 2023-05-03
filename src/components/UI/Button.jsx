const Button = (props) => {
    return ( 
        <button onClick={props.add} className="w-full xs:max-w-[100px] lg:max-w-[150px] bg-[#b45309] px-3 py-1 rounded-2xl text-white hover:bg-[#fb923c] active:scale-90">
            Add
        </button>
     );
}
 
export default Button;