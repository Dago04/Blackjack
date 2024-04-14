// pedirCarta();

/**
 * Obtener el valor de la carta
 * @param {String} carta una carta de la baraja
 * @returns {Number} retorna el valor de la carta
 */
export const valorCarta = (carta) => {

    if (!carta) throw new Error('No hay carta para evaluar');

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}