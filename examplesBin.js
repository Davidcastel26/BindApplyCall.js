// bin examples 

let coach = {
    name:"Frak",
    age: 25
  }
  
  let aluminium = {
    name: "Jhon",
    course: "FullStack"
  }
  
  function getName(){
    return this.name;
  }
  
  getNameCoach = getName.bind(coach)
  // getNameCoach = function (){ return coach.name}
  getNameAluminium = getName.bind(aluminium)
  console.log(getNameAluminium()) // 'Jhon'
//   --------------------------------------------------------------------------------------------
function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena){
    // console.log(this)
    return delimitadorIzquierda + cadena + delimitadorDerecha;
  }
  
  let textoAsteriscos = crearCadena.bind(this, '*', '*');
  textoAsteriscos('Martina') // *Martina*
  let textGuiones = crearCadena.bind(this, '-', '-')
  
  let textUnderscore = crearCadena.bind(this, '_', '_')