const CustomForm = () => {
    return ( 
        <form className="flex flex-col gap-5 py-5 border w-3/4 mx-auto ">
            <div className="flex flex-col items-start gap-3">
                <label htmlFor="name">Enter your name</label>
                <input className="py-2 px-3 rounded-xl text-black" type="text" id="name" />
            </div>
            <div className="flex flex-col items-start gap-3">
                <label htmlFor="phone">Enter your phone</label>
                <input className="py-2 px-3 rounded-xl text-black" type="phone" id="phone" />
            </div>
            <div className="flex flex-col items-start gap-3">
                <label htmlFor="city">Enter your city</label>
                <input className="py-2 px-3 rounded-xl text-black" type="text" id="city" />
            </div>
            <div className="flex flex-col items-start gap-3">
                <label htmlFor="street">Enter your street</label>
                <input className="py-2 px-3 rounded-xl text-black" type="text" id="street" />
            </div>
        </form>
     );
}
 
export default CustomForm;