import heroImage from '../assets/coffe-hero-section.jpeg'

const HeroSection = () => {
    return ( 
        <div style={{backgroundImage: `url(${heroImage})`}} className="bg-cover bg-center bg-no-repeat flex justify-center items-end w-full md:w-1/2 md:mx-auto h-[400px]">
            <p className='text-center font-bold text-[#f97316] px-5 w-ful sm:w-2/3 md:w-full' >
                Aromatic coffee for you - fast, delicious and with a guarantee of a good mood
            </p>
        </div>
     );
}
 
export default HeroSection;