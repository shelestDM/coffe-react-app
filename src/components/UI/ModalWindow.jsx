const ModalWindow = (props) => {
    
    return (
        <div onClick={props.onToggleModal} className="w-screen h-screen backdrop-blur-sm absolute z-50 top-0 left-0 flex items-center justify-center">
            <div className="w-1/2 h-[200px] bg-indigo-700 text-white text-xl rounded-xl text-center">
                <p className="h-[60%] flex justify-center items-center">
                    some text
                </p>
                <button
                    className="rounded-xl bg-green-500 py-2 px-3 hover:bg-green-700 active:scale-90">
                    Close modal
                </button>
            </div>
        </div>
    );
}

export default ModalWindow;