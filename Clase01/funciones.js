//se hará la función mostrarLista, la cual recibe un arreglo con elementos.
/**
 * Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso devolviendo la longitud de la lista (Utilizar template strings)
Invocar la función con los casos de prueba.

 */
function mostrarLista(listaElementos) {
  if(listaElementos.length === 0 ){
    console.log("Lista Vacia")
  }else{
    for (const i of listaElementos){
      console.log(i);
    }
    console.log(`la longitud del arreglo es ${listaElementos.length}`);
  }
}

console.log(mostrarLista(["Hola", "Como esta", "Yo muy bien"]));