// NO CAMBIAR
const PI = 3.14
let valores = [1, 4, 11, 50, 100] // radios de las circunferencias

function obtenerCircunferencia(radio){
	// Escribe tu código aquí
  return 2 * PI * radio;
}

// Escribe tu código aquí (loop)
for(let i = 0; i < valores.length; i++){
  valores[i] = obtenerCircunferencia(valores[i]);
}

// NO CAMBIAR
console.log(`Circunferencias => [${valores}]`);

