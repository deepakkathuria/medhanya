import { FaWhatsapp } from 'react-icons/fa';
import { FloatingWhatsApp } from 'react-floating-whatsapp'


const WhatsAppButton = ({ phoneNumber, message }) => {
  const generateWhatsAppLink = () => {
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  };

  const handleWhatsAppClick = () => {
    const url = generateWhatsAppLink();
    window.open(url, '_blank');
  };

  return (
    <div className='top-[80vh] px-12 fixed right-0 flex justify-center items-center z-[999]'>
      <button onClick={handleWhatsAppClick} className="bg-white p-3 rounded-full opacity-1">
        {/* <FaWhatsapp size={32} /> */}
        <img 
        style={{width:"50px"}}
        src='https://res.cloudinary.com/dqdaz8ni5/image/upload/v1691583227/icons8-whatsapp-100_yost9b.png'></img>
      </button>
      <div className='absolute rounded-full bg-green-400 p-10 animate-ping z-[-1]' />
      <div className='absolute rounded-full bg-green-600 p-7 animate-ping z-[-1]' />
    </div>
  );
};

export default WhatsAppButton