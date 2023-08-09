// conversion explicita de datos 

const horaDescanso = 13;
const horaDescansoTxt = String(horaDescanso); 
console.log ("Hora Descanso " + horaDescansoTxt + "h."); 

const colorVerde= 0x008000;
console.log(`El valor RGB del color verde es: ${colorVerde}`);
console.log(`El valor de RGB del color verde es: ${ colorVerde.toString(16)}`)
console.log(`El valor de RGB del color verde es: ${ colorVerde.toString(16).padStart(6, "0") }`)


const myAgeTxt = "25"; 
const sumatoria = 10 + myAgeTxt; 
console.log(`Valor de la sumatoria ${sumatoria}`)
console.log(`Valor de la sumatoria usando Number(): ${ 10 + parseInt(myAgeTxt)}`)

//Diferencias entre number() y parseInt()
console.log("pasrseInt( `$123 - 456.slice(1) ) :" + parseInt ("$123 - 456".slice(1)) );
// al usar un slice ya que el sigono $ no es numerico ya que parseInt solo convierte numericos

//conversion a booleano
console.log( "Boolean(1): " + Boolean(1) );
