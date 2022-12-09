function encenderApagar(){
    var srcEncendido = '../img/encendido.png'
    var srcApagado = '../img/apagado.png'
    var estado = document.getElementById('foco').className

    console.log(estado)
    console.log(srcApagado)

   if(estado == "apagado"){
        document.getElementById('foco').src = "../img/encendido.png"
        document.getElementById('foco').className = "encendido"
   }else{
        document.getElementById('foco').src = srcApagado
        document.getElementById('foco').className = "apagado"
   }
}