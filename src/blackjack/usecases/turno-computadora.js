import { pedirCarta, valorCarta, crearCartaHtml } from "./";




/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHtml puntos en el html
 * @param {HTMLElement} divCartasComputadora div donde se muestran las cartas de la computadora
 * @param {Array<String>} deck deck de cartas
 */
export const turnoComputadora = (puntosMinimos, puntosHtml, divCartasComputadora, deck = []) => {
    if (!puntosMinimos) throw new Error('puntosMinimos es requerido');
    if (!deck) throw new Error('deck es requerido');
    if (!puntosHtml) throw new Error('puntosHtml es requerido');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHtml.innerText = puntosComputadora;

        const imgCarta = crearCartaHtml(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}
