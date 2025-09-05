// Slider de imagenes en Nosotros
document.addEventListener("DOMContentLoaded", () => {
    const slideElements = document.querySelectorAll(".slide-in");
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Agrega la clase visible
            } else{
                entry.target.classList.remove("visible"); //quita la clase visible
            }
        });
    }, {
        threshold: 0.2 // El 20% del elemento debe estar visible para activarse
    });
    slideElements.forEach(element => observer.observe(element));
});

document.querySelectorAll('.servicio').forEach(servicio => {
    servicio.addEventListener('click', () => {
        servicio.classList.toggle('mostrar-detalles');
    });
});

// Botón de subir
var boton=document.querySelector('.up');
window.onscroll=function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.up').style.display='block';
    }
    else{
        document.querySelector('.up').style.display='none';
    }
}
boton.addEventListener('click', function(){
    window.scrollTo({top:0, behavior:"smooth"})
});

//Boton toggle
var toggle=document.getElementById('contenedor_toggle');
var body=document.querySelector('body');

toggle.onclick=function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}

