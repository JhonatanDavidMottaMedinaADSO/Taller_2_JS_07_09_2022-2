addEventListener("DOMContentLoaded", ()=>{
    
    // 10. Ingrese una frase que lo identifique como programador de Software y luego mostar esta frase
    // invertida.

    let frase = (prompt(`Ingrese la frase a invertir`))
    console.log(`%c${frase}`, `background-color: yellow; border-radius: 2px; border: 4px groove orange; color: black;`)
    
    let fraseInvert = frase.split("").reverse().join("")
    console.log(`%c${fraseInvert}`, `background-color: yellow; border-radius: 2px; border: 4px groove orange; color: black;`)
})