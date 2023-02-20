class primerosPasos{

  constructor(parametrosDeCreacion){
    console.log('este es el contructor para la clase primeros pasos')
    let variablePrueba = parametrosDeCreacion
    console.log('Aca ponemos los argumentos con los que se construye la clase: '+variablePrueba)
  }
}

let primeraInstancia = new primerosPasos('Hola mundo');
console.log(primeraInstancia);