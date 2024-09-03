// you can write js here

//console.log('exo-5');
let input = 'Turpentine and turtles';
let vowels =[ 'a', 'e', 'i', 'o', 'u', 'y', 'h'];
let resultArray = [];

for ( var i = 0; i<input.length; i++){
    console.log(input[i].toLocaleLowerCase());
    for (var j = 0; j<vowels.length; j++){
        if ( input[i] === vowels[j]){
            resultArray.push(input[i]);
            break;
        }
    }
}
console.log(resultArray.join('').toUpperCase());