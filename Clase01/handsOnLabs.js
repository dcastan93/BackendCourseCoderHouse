/*class Contador{
  constructor(){
  }
  static contadorGlogal = 0
  getResponsable = (nombre) => {
    console.log(`el responsable de esta cuenta es: ${nombre}`)
  }
  static cuentaIndividual = {}
  contar = (nombre) => {
    if (Contador.cuentaIndividual[nombre]===undefined){
      Contador.cuentaIndividual[nombre] = 1
    }else{
      Contador.cuentaIndividual[nombre] += 1
    }
    Contador.contadorGlogal += 1
  }
  getCuentaIndividual = (nombre) => {
    if(Contador.cuentaIndividual[nombre]=== undefined){
      console.log(0);
    }else{
      console.log(Contador.cuentaIndividual[nombre])
    }
    
  }
  getCuentaGlobal = () => {
    console.log(Contador.contadorGlogal);
  }
}

contador = new Contador()
contador.getResponsable('Diego')
contador.contar('Diego')
contador.contar('Diego')
contador.getCuentaIndividual('Oscar')
contador.getCuentaGlobal()
*/

//otra forma de solucionarlos sería (esto lpo hace el docente)

class Contador {
  static cant = 0
  constructor(responsable){
    this.responsable = responsable
    this.contador = 0
  }
  contar(){
    this.contador++
    Contador.cant++
  }
  
}
const c1 = new Contador("Diego")
const c2 = new Contador("Sara")

console.log(c1)
console.log(c2)