addEventListener("DOMContentLoaded", ()=>{
    // 1. Escribir un programa que sume, reste, multiplique y divida dos números
    
    // 1. Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la solución,
    // por favor utilizar funciones matemáticas de Python para ello d = rc((x2-x1)^2 + (y2-y1)^2)
    
    let x1 =  Number(prompt(`Ingrese el valor de x1:`))
    let x2 =  Number(prompt(`Ingrese el valor de x2:`))
    let y1 =  Number(prompt(`Ingrese el valor de y1:`))
    let y2 =  Number(prompt(`Ingrese el valor de y2:`))

   
    let d = Math.sqrt(Math.pow((x2)-(x1),2) + Math.pow((y2)-(y1),2))


    console.log(`%cLa distancia entre dos puntos es ${d}`, `background-color: yellow; border-radius: 2px; border: 4px groove orange; color: black;`)
})