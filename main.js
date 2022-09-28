addEventListener("DOMContentLoaded", () => {

    // 24. Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada uno por
    // $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. Después de pagar le
    // sobran $91000. ¿cuánto dinero tenía?

    alert('Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. Después de pagar le sobran $91000. ¿cuánto dinero tenía?')

    let bomba = 1168000
    let cajaPerno = 87000
    let llave = 11500
    let juegosLlave = 5 * llave
    let conjuntoPerno = 3 * cajaPerno
    let total = juegosLlave + conjuntoPerno + bomba + 91000

    console.log(`%cEl dinero que llevaba el obrero es: ${total}`, `background-color: yellow; border-radius: 2px; border: 4px groove orange; color: black;`)
})