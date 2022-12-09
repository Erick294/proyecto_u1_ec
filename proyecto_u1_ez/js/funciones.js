let verificar
let resultado

function sumar(){
    resultado =  parseInt(document.getElementById('primero').value) + parseInt(document.getElementById('segundo').value)
    console.log(resultado)
    return resultado
}

function restar(){
    resultado = document.getElementById('primero').value - document.getElementById('segundo').value
    return resultado
}

function multiplicar(){
    resultado = document.getElementById('primero').value * document.getElementById('segundo').value
    return resultado
}

function dividir(){
    return document.getElementById('primero').value / document.getElementById('segundo').value
}

function verificarPosicion1(){
    verificar = 'primero'
}

function verificarPosicion2(){
    verificar ='segundo'
}

function getVerificar(){
    return verificar
}

function resetear(){
    document.getElementById('primero').innerText='0'
    document.getElementById('segundo').innerText='0'
    document.getElementById('signo').innerText='-'
    document.getElementById('resultado').innerText='0'
}

