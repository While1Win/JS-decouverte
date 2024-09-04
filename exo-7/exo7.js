console.log("exo-7");

//console.log(jsonDatas);
for (let i = 0; i < jsonDatas.length; i++) {
    console.log(jsonDatas[i]);
}

let types_traduit = {
    car: "voiture",
    house: "maison",
    game: "jeu",
    videoGame: "jeux videos",
    show: "spectacle"
};

jsonDatas.forEach(function(item) {
   
    item.types_traduit = types_traduit[item.type] || item.type;
});

// Vérification : Afficher les objets avec le type traduit
jsonDatas.forEach(function(item) {
    console.log("Nom :", item.name);
    console.log("Type original :", item.type);
    console.log("Type traduit :", item.types_traduit); // Afficher le type traduit
    console.log("Description :", item.description);
    console.log("Prix :", item.price);
    console.log("Quantité :", item.quantity);
    console.log("-----------------------------");
});

function display_Products(container){
    let product_container = document.getElementById("container");
    console.log("container", product_container)
    product_container.innerHTML = "";


    container.forEach(function(item){
        let container_div = document.createElement("div");
        container_div.innerHTML = `
            <h3> ${item.name}</h3>
            <p> Type : ${item.types_traduit} </p>
            <p> Descrioption : ${item.description || "Rien à afficher"} </p>
            <p>Prix : ${item.price} € </p>
            <p>Quantité : ${item.quantity}</p>
            <hr>
        
        
        `;
        product_container.appendChild(container_div);
    })
}
display_Products(jsonDatas);
// comment on utilise foreach
// exo7.js

/* jsonDatas.forEach(function(item) {
    console.log(item);
});
console.log("---------------");
 */
/** another way of using for in javascript
 *  For ... of
 */
/* for (let jsonData of jsonDatas) {
    console.log(jsonData);
}
 */
/**FOR IN */

/*for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}*/

/** entries ca donne la clé et sa valeur, on peut aussi utilier Keys ou values */
//console.log(object.entries(jsonDatas));

/** yet another way */
/* for(let [key, val] of jsonDatas){
    console.log(key);
    console.log(val);
}
 */


document.getElementById("filter").addEventListener("click", function() {
    let typeInput = document.getElementById("type").value.trim().toLowerCase();
    let includeOutOfStock = document.getElementById("stockCheckbox").checked;

    let filteredArticles = jsonDatas.filter(function(item) {
        // Filtrer par type si un type est spécifié
        let matchesType = typeInput ? item.type.toLowerCase() === typeInput : true;

        // Filtrer par stock si la checkbox n'est pas cochée
        let inStock = includeOutOfStock ? true : item.quantity > 0;

        return matchesType && inStock;
    });

    display_Products(filteredArticles);
});
//display_Products(filteredArticles);