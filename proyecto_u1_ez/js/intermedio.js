function prueba(){
    /*Variables*/
    var sinUsar /*ya no se usa*/
    let valor; /*igual que el var pero mas eficiente*/
    let valorSRC = document.getElementById('img').src
    const iva = 0.12; /*constantes*/

    /*arrays*/
    let dias = ["Lunes", "Martes", "Miercoles"]

    console.log(iva)
    console.log(valorSRC)

    if(valorSRC.includes('demon.jpg')){
        
    }

    dias.push("Jueves");
    console.log(dias);
    
    /*Desestructuracion arrays*/
    const diasCompletos = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    const [dia1, dia2, dia3, dia4, dia5, dia6, dia7] = diasCompletos
    console.log(dia7)

    const [d1, d2] = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    console.log(d1, d2)

    /*Manejo de objetos*/
    const persona = {
        nombre: "Erick", 
        edad: 23,
        apellido: "Zambrano",
        ciudad: "Quito",
        cedula: "154785963",
        padres:{
            madre:{
                nombre: "Rosa", 
                edad: 45,
                apellido: "Cordova",
                ciudad: "Quito",
                cedula: "154745963"
            },
            padre:{
                nombre: "Charles", 
                edad: 38,
                apellido: "Zambrano",
                ciudad: "Quito",
                cedula: "154458783"
            }
        },
        materia:{
            nombre:"PWEB",
            creditos: 6
        }
    }
    console.log(persona)

    /*desestructuracio objetos*/
    const {nombre, edad} = persona
    console.log(nombre, edad)

    const{materia} = persona
    console.log(materia)

    const{creditos} = materia
    console.log(creditos)

    const {apellido, ciudad, cedula} = {
        nombre: "Erick", 
        edad: 23,
        apellido: "Zambrano",
        ciudad: "Quito",
        cedula: "154785963"
    }

    console.log(apellido, ciudad, cedula)
    this.funcion2()
}

function funcion2(){
    console.log("Segunda funcion")
    return "valor"
}