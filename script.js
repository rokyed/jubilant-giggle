const boton = document.getElementById('generar');
const resultadoEl = document.getElementById('resultado');
const audio = document.getElementById('croar');

const consejos = [
    'Nunca dejes de saltar hacia tus metas.',
    'Un poco de sol es todo lo que necesitas para brillar.',
    'Mantén la calma y sigue croando.',
    'La paciencia es la clave para atrapar esa mosca esquiva.'
];

function generarMensaje(numero) {
    if (numero < 25) return 'Eres más humano que rana.';
    if (numero < 50) return 'Tienes un toque de rana en ti.';
    if (numero < 75) return '¡La rana que llevas dentro está asomando!';
    return '¡Eres una auténtica rana!';
}

function mostrarResultado() {
    const numero = Math.floor(Math.random() * 101); // 0-100
    const mensaje = generarMensaje(numero);
    const consejo = consejos[Math.floor(Math.random() * consejos.length)];

    resultadoEl.textContent = `${mensaje} Resultado: ${numero}/100. Consejo: ${consejo}`;
    if (audio && audio.play) {
        audio.currentTime = 0;
        audio.play().catch(() => {/* ignore errors */});
    }
}

boton.addEventListener('click', mostrarResultado);
