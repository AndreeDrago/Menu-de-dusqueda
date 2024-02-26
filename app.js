const buscador = document.querySelector('.buscador')
const buscar = document.querySelector('.buscar')
const input = document.querySelector('.input')

buscar.addEventListener('click', () => {
    buscador.classList.toggle('activo')
    input.focus()
})