let persona = {
    nombre: 'Guille',
    apellido: 'Aszyn'
  }
  
  let logNombre = function(){
    console.log(this.nombre)
  }
  
  let logApellido = function( last ){
    console.log( this.apellido + " " + last )
  }
  
  logNombre('!')// undefined por que no esta bindiado, y por que indica al obejo global
  
  let logNombrePersona = logNombre.bind(persona)
  
  logNombrePersona() // Guille sale por que ya esta indicando al objeto
  
  logApellido.call(persona) // Aszyn
  
  logNombre.apply(persona, ['!'])
  
  // -------------------------------------------------------------
  
  function multiplica(a,b){
    return a * b
  }
  
  var multiplicaPorSiete = multiplica.bind(this, 7) // se remplaza el 'a' por el numbero que deseemos
  
  multiplicaPorSiete(3)
  
  