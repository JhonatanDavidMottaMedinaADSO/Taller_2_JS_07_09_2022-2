addEventListener("DOMContentLoaded", ()=>{
    
   // Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura. Considere que
    // se cobra por m2 y realice el código que representen el algoritmo que le permita ir generando
    // presupuestos para cada cliente.

    let m2 = Number(prompt(`Metros cuadrados por pintar`))
    let precioM2 = Number(prompt(`Precio de metro cuadrado`))
    
    let precioTotal = m2 * precioM2

    console.log(`%cEl precio total es ${precioTotal}`, `background-color: yellow; border-radius: 2px; border: 4px groove orange; color: black;`)
   
})