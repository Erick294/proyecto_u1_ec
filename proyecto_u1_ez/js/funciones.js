var verificar

function sumar(){
    var suma =  parseInt(document.getElementById('primero').value) + parseInt(document.getElementById('segundo').value)
    return suma
}

function restar(){
    return document.getElementById('primero').value - document.getElementById('segundo').value
}

function multiplicar(){
    return document.getElementById('primero').value * document.getElementById('segundo').value
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

