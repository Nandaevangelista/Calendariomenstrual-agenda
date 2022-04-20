//alert(`Bem vindo ao seu Planner Online!`)
var nome = window.prompt('Qual é o seu nome?')
    usuario.innerHTML = `Olá, <strong>${nome}!`//

    
    
function verificar() {
    let fciclo = document.getElementsByName(`ciclo`)
    let res = document.querySelector(`div#res`)
    let genero = ``
    if (fciclo[0].checked){
        genero = `Regular` 
         
        
    } else if(fciclo[1].checked) {
        genero = `Irregular`

    } 
res.innerHTML = `Seu ciclo é ${genero}.` 
}
var body = document.querySelector(`body`);
