// you can write js here

//console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];


console.log(secretMessage);
secretMessage.pop();
console.log(secretMessage);
secretMessage.push('to');
secretMessage.push('program');
console.log(secretMessage);

var index = secretMessage.indexOf("easily");
secretMessage[index] = "right";


secretMessage.shift();
secretMessage.unshift('programing');



// Étape 1 : Trouver l'indice de "get"
var startIndex = secretMessage.indexOf("get");
// Étape 2 : Remplacer les cinq mots par "know"
secretMessage.splice(startIndex,5,"know");


console.log(secretMessage.join(' '));





