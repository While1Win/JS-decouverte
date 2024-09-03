// Cours 8 de Codecademy
//console.log("exo-6");
/* 
var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe

console.log(joeInfo['cars']);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

joeInfo['bathrooms']='1';
console.log(joeInfo['bathrooms']);


// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 

joeInfo['garage'] = true;
console.log(joeInfo);
*/

let team = {
    players: [
        {
            firstName: "LeBron",
            lastName: "James",
            age: 39,
            position: "Forward",
            height: 206,  
            weight: 113   
        },
        {
            firstName: "Anthony",
            lastName: "Davis",
            age: 31,
            position: "Forward-Center",
            height: 208,  
            weight: 115   
        },
        {
            firstName: "D'Angelo",
            lastName: "Russell",
            age: 28,
            position: "Guard",
            height: 193,  
            weight: 90   
        },
        {
            firstName: "Austin",
            lastName: "Reaves",
            age: 26,
            position: "Guard",
            height: 196,  
            weight: 89    
        },
        {
            firstName: "Rui",
            lastName: "Hachimura",
            age: 26,
            position: "Forward",
            height: 203,  
            weight: 104   
        }
    ],
    games: [
        {
            opponent: "Golden State Warriors",
            teamPoints: 115,
            opponentPoints: 110,
            date: "2024-02-15",
            location: "Staples Center"
        },
        {
            opponent: "Boston Celtics",
            teamPoints: 121,
            opponentPoints: 114,
            date: "2024-03-03",
            location: "Staples Center"
        },
        {
            opponent: "Miami Heat",
            teamPoints: 108,
            opponentPoints: 101,
            date: "2024-04-01",
            location: "American Airlines Arena"
        }
    ],
    addPlayer: function(firstName, lastName, age, position, height, weight) {
        this.players.push({
            firstName: firstName,
            lastName: lastName,
            age: age,
            position: position,
            height: height,
            weight: weight
        });
    },
    addGames: function(opponent, teamPoints, opponentPoints, date, location){
        this.games.push({
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints,
            date: date,
            location: location
        })
    }
};


team.addPlayer("Russell", "Westbrook", 35, "Guard", 190, 91); 
team.addGames("NewYork Knicks", 100,150,"2024-10-20","Madison Square Garden");


console.log(team.players);
console.log(team.games);


let somme = 0;
for (let i = 0; i < team.games.length; i++){
    somme = somme + team.games[i].teamPoints;
}
let papi = 0;
for (let j= 0; j < team.players.length; j++){
    if (team.players[j].age > papi){
        papi = team.players[j].age;
    }
}
console.log("total points of the last matches = " , somme );
console.log("average points = ", somme / team.games.length );
console.log(papi);
