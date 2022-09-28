addEventListener("DOMContentLoaded", ()=>{
    
    // Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo,
    // pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. Realice el código
//     // que representen el algoritmo para solucionar este problema.
//     añon=int(input("Ingrese el año de nacimiento: "))
//     añoa=int(input("Ingrese el año actual: "))
//     edad=añoa-añon
//     print("La edad es", edad)

    let añoNa = Number(prompt(`Ingrese su año de nacimiento`))
    let añoAct = Number(prompt(`Ingrese el año actual`))

    let edad = añoAct - añoNa

    console.log(`%cLa edad es ${edad}`, `background-color: yellow; border-radius: 2px; border: 4px groove orange; color: black;`)
})