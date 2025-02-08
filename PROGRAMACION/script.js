// Obtener el botón de WhatsApp
const whatsappBtn = document.getElementById('whatsapp-btn');

// Número de WhatsApp (reemplaza con tu número)
const phoneNumber = '3117964334'; 

// Mensaje predefinido
const message = encodeURIComponent('Hola, estoy interesado en tus servicios.');

// Función para abrir WhatsApp
whatsappBtn.addEventListener('click', () => {
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
});