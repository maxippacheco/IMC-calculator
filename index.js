
const form = document.querySelector('form');
const peso = document.querySelector ('#peso');
const estatura =  document.querySelector('#estatura') ;
const resultado_div = document.querySelector('#resultado_div');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const num_peso = parseInt( peso.value );
    const num_estatura = parseFloat( estatura.value );
    const resultado = getIMC( num_peso, num_estatura );
    
    resultado_div.textContent = resultado;


});


const getIMC = (peso, estatura) => {
    return (peso / (estatura*estatura));
}