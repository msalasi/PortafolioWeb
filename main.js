window.sr = ScrollReveal();

sr.reveal('.navbar' , {
    duration: 1000,
    origin: 'top',
    distance: '300px'
})


sr.reveal('#scrReveal' , {
    duration: 1000,
    origin: 'left',
    distance: '300px'
})

sr.reveal('.header-content-right' , {
    duration: 1000,
    origin: 'right',
    distance: '300px'
})


let animado = document.querySelectorAll(".animado");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    /* bucle para detectar la distancia entre el comienzo de la pagina y el elemnto a animar */
    for (var i=0; i<animado.length; i++){
        /* se guarda el resultado obtenido en la varibale*/
        let alturaAnimado = animado[i].offsetTop;
        /*ciclo para aplicar animacion cuando se llega al elemento a animar
        al hacer scroll menos 400px para que se anime en el centro del scroll*/
        if (alturaAnimado - 400 < scrollTop) {
            /*cuando se llega el punto de la animacion se aplicac opacidad 1 para que el
            elemento se muestre ya que tenia en un principio opacidad 0*/
            animado[i].style.opacity = 1;
            /*se agrega la clase creada*/
            animado[i].classList.add("mostrarArriba");
        }
    }
}
/*se selecciona con propiedad window el html y se llama a la funcion scroll de js*/
window.addEventListener('scroll', mostrarScroll);