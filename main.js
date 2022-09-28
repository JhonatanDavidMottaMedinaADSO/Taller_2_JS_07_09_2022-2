addEventListener("DOMContentLoaded", ()=>{
    // 1. Escribir un programa que sume, reste, multiplique y divida dos números
    
    // • Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un depósito.
    // • Q=V/t, siendo Q (caudal), V (volumen) y t (tiempo).
    // • Volumen = PI *(radio^2)* H (altura del depósito)
    // • El tiempo se encuentra en minutos.
    // • Normalmente se mide el volumen en litros y el tiempo en segundos.

    alert('Escriba los datos para calcular el tiempo estimado de llenado de un deposito')
    let t = Number(prompt(`Ingrese el tiempo en min`))
    let r = Number(prompt(`Ingrese el radio del deposito`))
    let h = Number(prompt(`Ingrese la altura del deposito en cm`))

    let seg = t * 60
    let volumen = Math.PI * (Math.pow(r,2)) * h
    let caudal = volumen/seg

    console.log(`%cEl caudal del posito es: ${caudal}`, `background-color: yellow; border-radius: 2px; border: 4px groove orange; color: black;`)
})