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