
function CondAlumno(Nota) {
    //Nota=parseInt(Nota)
    console.log("La Nota es " + Nota)
    //Nota es menor a 4 - LIBRE
    //Nota es menor a 7 y no es LIBRE - REGULAR 
    //Nota mayor que 6  - PROMOCIONADO.
    if (Nota<4) {
        console.log("LIBRE")
    } 
    else if (Nota>=4 && Nota<=6) {
        console.log("REGULAR")
    } 
    else if(Nota>6) {
        console.log("PROMOCIONADO")
    }

    if (Nota<1) {
        console.log("Error!! El Número Ingresado es Menor que 1")
    } else if (Nota>10) {
        console.log("Error!! El Número Ingresado es Mayor que 10")
    }
}

CondAlumno(6)

function PromAlumno(Nota1,Nota2,Nota3) {
    //Nota=parseInt(Nota)
    let Nota =0
    Nota=(Nota1+Nota2+Nota3)/3

    console.log("La Nota Resultante del Promedio es " + Nota)

    //Nota es menor a 4 - LIBRE
    //Nota es menor a 7 y no es LIBRE - REGULAR 
    //Nota mayor que 6  - PROMOCIONADO.
    if (Nota<4) {
        console.log("LIBRE")
    } 
    else if (Nota>=4 && Nota<=6) {
        console.log("REGULAR")
    } 
    else if(Nota>6) {
        console.log("PROMOCIONADO")
    }

    if (Nota1<1) {
        console.log("Error!! La Nota 1 es Menor que 1")
    } else if (Nota1>10) {
        console.log("Error!! La Nota 1 es es Mayor que 10")
    }

    if (Nota2<1) {
        console.log("Error!! La Nota 2 es Menor que 1")
    } else if (Nota1>10) {
        console.log("Error!! La Nota 2 es es Mayor que 10")
    }

    if (Nota3<1) {
        console.log("Error!! La Nota 3 es Menor que 1")
    } else if (Nota3>10) {
        console.log("Error!! La Nota 3 es es Mayor que 10")
    }
}

PromAlumno(6,8,7) 