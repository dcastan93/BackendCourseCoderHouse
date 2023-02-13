//ejp rest spread

const persona = {nombre: "Marian", edad: 36}
const copiaPersona = {...persona} // operador spread

const number = [1,2,3,4,5]
const otherNumbers = [7,8,9]


//operador rest

function mostrar(){
  for (const arg of arguments){
    console.log(arg)
  }
}
mostrar(...number)