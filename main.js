addEventListener("DOMContentLoaded", ()=>{
    
    // 27. tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año. Martin toma
    // 2/3 del total. Jairo un cuarto del total, y Lorena se queda con el resto. ¿qué parte le corresponde a
    // Lorena?

    let tapas = Number(prompt(`Ingresa el numero de tapas reunidas: `))
    
    let martin = tapas * 2/3
    let jairo = tapas * 1/4
    let lorena = tapas - martin - jairo
    let lorena2 = lorena.toFixed(2)
    let porc = (lorena * 100) / tapas
    let porc2 = porc.toFixed(2)
    console.log(`%cA lorena le corresponden ${lorena2} tapas`, `background-color: yellow; border-radius: 2px; border: 4px groove orange; color: black;`)
    console.log(`%cEl porcentaje que le corresponde es ${porc2}%`, `background-color: yellow; border-radius: 2px; border: 4px groove orange; color: black;`)
   
})