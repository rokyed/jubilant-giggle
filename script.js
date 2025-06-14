const boton = document.getElementById('generar');
const resultadoEl = document.getElementById('resultado');
const audio = document.getElementById('croar');


const consejos = [
    'Nunca dejes de saltar hacia tus metas.',
    'Un poco de sol es todo lo que necesitas para brillar.',
    'Mantén la calma y sigue croando.',
    'La paciencia es la clave para atrapar esa mosca esquiva.',
    'El agua fresca renueva las energías.',
    'La vida es mejor entre nenúfares.',
    'Confía en tu instinto anfibio.',
    'Aprovecha cada charco como una oportunidad.',
    'Croa fuerte para que te escuchen.',
    'Sigue el ritmo de la naturaleza.',
    'Un descanso al sol siempre viene bien.',
    'Las aventuras comienzan con un salto.',
    'No temas mojarte en el camino.',
    'A veces un silencio vale más que mil croaks.',
    'Observa antes de dar el gran salto.',
    'Comparte tu estanque con alegría.',
    'Cada día trae un nuevo insecto que probar.',
    'La amistad se cultiva a la orilla del agua.',
    'Saltar en equipo multiplica la diversión.',
    'Tu croar puede inspirar a otros.',
    'Aprende de las lluvias y sé resiliente.',
    'Un salto corto también es un avance.',
    'Aprovecha las noches de luna llena.',
    'Mira el mundo con ojos curiosos.',
    'Sé agradecido por cada gota de lluvia.',
    'La serenidad se encuentra bajo una hoja verde.',
    'No hay charco pequeño para un gran espíritu.',
    'Explora nuevos estanques con valentía.',
    'Las libélulas son compañeras de viaje.',
    'No subestimes el poder de un buen croar.',
    'Cada día es un escenario para brillar.',
    'Descansa en una piedra cálida cuando necesites reflexionar.',
    'Nunca pierdas el sentido del humor.',
    'La flexibilidad te ayuda a sortear obstáculos.',
    'Mantén tus patas firmes en tierra resbalosa.',
    'Celebra tus logros con un gran salto.',
    'La naturaleza siempre tiene algo que enseñarte.',
    'Los amigos se encuentran en los lugares más inesperados.',
    'Un poco de silencio puede traer grandes ideas.',
    'Escucha el viento sobre el estanque.',
    'La práctica hace al maestro del salto.',
    'Tu mejor aliada es la paciencia.',
    'Observa las nubes y sueña en grande.',
    'Aprovecha los días lluviosos para cantar.',
    'Comparte tus insectos con quien lo necesite.',
    'La luz del amanecer trae nuevas oportunidades.',
    'Sé constante y perseverante.',
    'Conoce bien tu estanque y encontrarás tesoros.',
    'La humildad abre puertas acuáticas.',
    'Recuerda que cada croar tiene su momento.',
    'Aprende de tus errores y sigue saltando.',
    'El entusiasmo es contagioso.',
    'Las algas esconden secretos fascinantes.',
    'A veces solo necesitas flotar y observar.',
    'Un salto de fe puede llevarte lejos.',
    'Nunca es tarde para empezar de nuevo.',
    'Mira más allá de la superficie del agua.',
    'Cada estación tiene su encanto.',
    'Acepta los cambios con un croar de bienvenida.',
    'Las pequeñas victorias merecen celebración.',
    'La disciplina te hará saltar más alto.',
    'Busca la armonía en tu entorno.',
    'Valora los momentos de quietud.',
    'No juzgues a otras ranas por su color.',
    'Deja que tu croar exprese lo que sientes.',
    'Un poco de humor aligera cualquier situación.',
    'Las buenas ranas siempre comparten su sombra.',
    'Sé curioso y pregunta todo lo que no entiendas.',
    'La generosidad trae prosperidad.',
    'Cada brinco es un paso hacia el éxito.',
    'La autoconfianza se practica a diario.',
    'Permanece atento a las señales del entorno.',
    'No hay charco sin fango, aprende de él.',
    'Sonríe más, incluso aunque no se vea.',
    'Haz amigos de todas las especies.',
    'Un croar amable abre muchas puertas.',
    'La paciencia puede ser tu mejor aliado.',
    'Nunca subestimes el poder de la cooperación.',
    'Respira profundo y aprecia el momento.',
    'Las estrellas se reflejan mejor en aguas tranquilas.',
    'La constancia te convierte en leyenda.',
    'Guarda energías para los saltos importantes.',
    'Agradece los días soleados y los lluviosos.',
    'Las grandes ranas también fueron renacuajos.',
    'Escucha antes de responder.',
    'El respeto es esencial para convivir en el estanque.',
    'Practica el equilibrio dentro y fuera del agua.',
    'Ayuda a otras ranas cuando puedas.',
    'Nada es tan refrescante como una buena zambullida.',
    'Aprende a adaptarte a las corrientes.',
    'Los sueños se construyen salto a salto.',
    'Sonríe a la vida y la vida te sonreirá.',
    'Croa con entusiasmo cada mañana.',
    'Dedica tiempo a las cosas que amas.',
    'La sabiduría viene con la experiencia.',
    'Aprecia la belleza de lo simple.',
    'Piensa en grande, salta en grande.',
    'Convierte cada charco en un hogar acogedor.',
    'La unión hace la fuerza en el estanque.',
    'Confía en tus habilidades y lánzate al agua.'
];

function generarMensaje(numero) {
    const niveles = [
        'Nivel 1: Eres más humano que rana.',
        'Nivel 2: Casi humano, con un toque anfibio.',
        'Nivel 3: Sientes curiosidad por los charcos.',
        'Nivel 4: Te llaman la atención los insectos.',
        'Nivel 5: Empiezas a saltar de emoción.',
        'Nivel 6: Tu croar se escucha en la distancia.',
        'Nivel 7: Los lirios de agua son tu hogar.',
        'Nivel 8: Croas sin parar día y noche.',
        'Nivel 9: Eres el rey del estanque.',
        'Nivel 10: ¡Una rana legendaria!'
    ];
    const indice = Math.min(Math.floor(numero / 10), 9);
    return niveles[indice];
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
