import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

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
    <div>
      <button onClick={handleWhatsAppClick}>
        <FaWhatsapp size={32} />
      </button>
    </div>
  );
};

export default WhatsAppButton