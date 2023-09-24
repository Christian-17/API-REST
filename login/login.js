const inicioSeccion = document.querySelector('.link-Registro');
const registrate = document.querySelector('.link-inicioSeccion');
const container = document.querySelector('.container');
const iconoPass = document.querySelector('.password')

inicioSeccion.addEventListener('click', () => {
    container.classList.toggle('active');
});

registrate.addEventListener('click', () => {
    container.classList.toggle('active');
});

iconoPass.addEventListener('click', function() {
    if(this.nextElementSibling.type === 'password') {
        this.nextElementSibling.type = 'text';
    } else {
        this.nextElementSibling.type = 'password';
    }
});
