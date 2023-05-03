import Busket from "./Busket";

const NavBar = () => {
    return (
        <nav className="fixed top-0 z-[20] left-0 w-full min-h-10 bg-[#fb923c] text-white py-4 px-3 md:px-6 lg:px-10 flex justify-between items-center">
            <h1 className="font-bold text-lg">
                Coffe Shop
            </h1>
            <Busket/>
        </nav>
    );
}

export default NavBar;