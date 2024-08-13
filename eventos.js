document.addEventListener('DOMContentLoaded', function () {

const div = document.getElementById(`container`);
const boton = document.getElementById(`btn`);

// Agrego manejador de eventos al boton para poder detener la propagación del mismo. 

boton.addEventListener(`click`, function(event){
    alert(`Hola!`);
    event.stopPropagation(); // Detiene la propagación
    
div.addEventListener('click', function () {
        alert('Hola! Soy el div');

    });

    });
    
});
