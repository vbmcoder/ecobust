import { FaWhatsapp } from "react-icons/fa";


const handleClick = () => {
    const phoneNumber = '+919929031735'; 
    const url = `https://wa.me/${phoneNumber}`;
    window.location.href = url;
};

export default function Whatsapp() {
    return <>
        <button onClick={handleClick} className='whatsappnoti'>
            <FaWhatsapp />
        </button>
    </>
}