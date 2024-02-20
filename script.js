// Sélectionner les éléments du DOM
const messageContainer = document.getElementById('message-container');
const closeBtn = document.getElementById('close-btn');

// Fonction pour fermer le message
function closeMessage() {
    messageContainer.style.display = 'none';
}

// Ajouter un événement pour fermer le message lorsque le bouton est cliqué
closeBtn.addEventListener('click', closeMessage);

// Afficher le message lorsque la page est entièrement chargée
window.addEventListener('load', function() {
    messageContainer.style.display = 'block';
});

