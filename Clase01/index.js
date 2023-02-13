class Persona{
  constructor(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
  }
  static specie = 'Humano'
  saludar = () => { 
    console.log(`Hola, mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`)
  }
  getSpecie = () => {
    console.log(`La especie a la que pertenezco es ${Persona.specie}`);
  }
}

let persona1 = new Persona('Diego', 'Castaneda')

persona1.saludar()
persona1.getSpecie()
