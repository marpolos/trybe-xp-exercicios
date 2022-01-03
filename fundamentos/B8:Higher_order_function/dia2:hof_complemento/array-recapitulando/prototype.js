//Prototype é fazer qualquer coisa funcionar como se fosse array:
function isLetter(character) {
    return (character >= "a" && character <= "z");
  }

let str = 'Marcelle'
  
  if (Array.prototype.every.call(str, isLetter))
    console.log("A string '" + str + "' contém somente letras!");