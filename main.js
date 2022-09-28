addEventListener("DOMContentLoaded", ()=>{
    // 1. Escribir un programa que sume, reste, multiplique y divida dos números
    
    // 2. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 2% de
    // descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada producto y el total de la compra.
    
    let x1 =  Number(prompt(`Valor del producto 1`))
    let x2 =  Number(prompt(`Valor del producto 2`))
    let x3 =  Number(prompt(`Valor del producto 3`))
    let x4 =  Number(prompt(`Valor del producto 4`))
    let x5 =  Number(prompt(`Valor del producto 5`))

    let desx1 = x1 - ((x1) * 0.05)

    let desx2 = x2 - ((x2) * 0.05)
 
    let desx3 = x3 - ((x3) * 0.02)

    let desx4 = x4 - ((x4) * 0.02)

    let total = desx1 + desx2 + desx3 + desx4 + x5

    console.log(`%cEl precio del producto 1 es: ${desx1}
El precio del producto 2 es: ${desx2}
El precio del producto 3 es: ${desx3}
El precio del producto 4 es: ${desx4}
El precio del producto 5 es: ${x5}
El total es: ${total}`, `background-color: yellow; border-radius: 2px; border: 4px groove orange; color: black;`)
})