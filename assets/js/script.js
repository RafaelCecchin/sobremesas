/* Restaurantes */
const urlParams = new URLSearchParams(window.location.search);
const restaurant = urlParams.get('restaurant');
let logo = '';

switch(restaurant) {
    case 'arriba':
        logo = '<img class="logo" src="./assets/img/arriba-logo.png" width="250" height="321" alt="Logo da Arriba Pizza"/>';
        break;
    default:
        logo = '<img class="logo" src="./assets/img/suprema-logo.png" width="184" height="380" alt="Logo da Suprema Pizza"/>';
        break;
}

document.querySelector('.page-1 .logo-container').innerHTML = logo;

/* Etapas */

// Page 1
document.querySelector('.page-1 #acessar-cardapio').addEventListener('click', () => {
    Steps.goToNextStep();
});
// Page-2 -> roleta.js
// Page-3
function submitForm() {
    document.querySelector('#apelido-replace').textContent = document.querySelector('.questions #apelido').value;
    document.querySelector('#acompanhante-replace').textContent = document.querySelector('.questions #acompanhante').value;
    
    Steps.goToNextStep();
}
// Page 4
document.querySelector('.page-4 #sim').addEventListener('click', () => {
    Steps.goToNextStep();
});