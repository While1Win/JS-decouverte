// you can write js here
console.log('exo-2');
let istesting = true;
let msg1 = 'jour de semaine';
let msg2 = 'weekend';
let currentDay ;
let currenthour;

if (istesting ) {
    currentDay = parseInt(prompt("Entrez un jour de la semaine (0 pour Dimanche, 1 pour Lundi, ..., 6 pour Samedi) :"));
    currenthour = parseInt(prompt("Entrez l'heure actuelle (de 0 à 23) :")); 

    if (currentDay ===  0 || currentDay === 6){
        console.log(msg2);
    } else if (currentDay === 5 && currenthour >= 17){
        console.log(msg2)
    }
    else if ( currentDay === 1 && currenthour < 9){
        console.log(msg2);
    }
    else  {
        console.log(msg1);
    }
 
}else {
    const myDate = new Date('August 30, 2024 18:15:15');
    currentDay = myDate.getDay();
    currenthour = myDate.getHours();
    const currenttime = myDate.getMinutes();
    console.log(currentDay);
    console.log(currenthour);
    console.log(currenttime);

    /*if (currentDay ===  0 || currentDay === 6){
        console.log(msg2);
    } else if (currentDay === 5 && currenthour >= 17){
        console.log(msg2)
    }
    else if ( currentDay === 1 && currenthour < 9){
        console.log(msg2);
    }
    else  {
        console.log(msg1);
    }*/
 
    
}
       





