const pistaCarrusel = document.querySelector('.pista-carrusel');
const tarjetasCarrusel = Array.from(pistaCarrusel.children);
const botonAnterior = document.querySelector('.boton-carrusel.anterior');
const botonSiguiente = document.querySelector('.boton-carrusel.siguiente');
let indiceActual = 0;

const actualizarCarrusel = () => {
  const anchoTarjeta = tarjetasCarrusel[0].getBoundingClientRect().width + 24;
  pistaCarrusel.scrollTo({
    left: indiceActual * anchoTarjeta,
    behavior: 'smooth'
  });
};

const avanzarCarrusel = () => {
  indiceActual = (indiceActual + 1) % tarjetasCarrusel.length;
  actualizarCarrusel();
};

const retrocederCarrusel = () => {
  indiceActual = (indiceActual - 1 + tarjetasCarrusel.length) % tarjetasCarrusel.length;
  actualizarCarrusel();
};

botonSiguiente.addEventListener('click', avanzarCarrusel);
botonAnterior.addEventListener('click', retrocederCarrusel);

let recorridoAutomatico = setInterval(avanzarCarrusel, 6000);

pistaCarrusel.addEventListener('mouseover', () => clearInterval(recorridoAutomatico));
pistaCarrusel.addEventListener('mouseleave', () => {
  recorridoAutomatico = setInterval(avanzarCarrusel, 6000);
});

window.addEventListener('resize', actualizarCarrusel);

actualizarCarrusel();
