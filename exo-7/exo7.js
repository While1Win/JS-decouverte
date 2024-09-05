console.log("exo-7");

// Fonction pour afficher les articles
function display_Products(data) {
  let product_container = document.getElementById("container");
  product_container.innerHTML = ""; // On vide d'abord le conteneur

  // Parcourir chaque type d'articles (ex: car, house)
  data.forEach(function (category) {
    let category_div = document.createElement("div");
    category_div.innerHTML = `<h2>Type : ${category.type}</h2>`;
    product_container.appendChild(category_div);

    // Parcourir chaque article de la catégorie
    category.items.forEach(function (item) {
      let item_div = document.createElement("div");
      item_div.innerHTML = `
            <h3> ${item.name}</h3>
            <p> Description : ${item.description || "Rien à afficher"} </p>
            <p> Prix : ${item.price} € </p>
            <p> Quantité : ${item.quantity}</p>
            <p> Contact : ${item.contact.firstName} ${item.contact.lastName}, ${
        item.contact.address
      }</p>
            <hr>`;
      category_div.appendChild(item_div);
    });
  });
}

// Affichage initial de tous les articles
display_Products(jsonDatas);

// Filtrer les articles par type et disponibilité en stock
document.getElementById("filter").addEventListener("click", function () {
  let typeInput = document.getElementById("type").value.trim().toLowerCase();
  let includeOutOfStock = document.getElementById("stockCheckbox").checked;

  let filteredArticles = [];

  jsonDatas.forEach(function (category) {
    if (!typeInput || category.type.toLowerCase() === typeInput) {
      let filteredItems = category.items.filter(function (item) {
        return includeOutOfStock || item.quantity > 0;
      });

      if (filteredItems.length > 0) {
        filteredArticles.push({
          type: category.type,
          items: filteredItems,
        });
      }
    }
  });

  display_Products(filteredArticles);
});

// Fonction de tri des articles
function sortArticles(articles) {
  // Récupérer le critère de tri (nom ou prix)
  let sortCriteria = document.querySelector(
    'input[name="sortCriteria"]:checked'
  ).value;

  // Récupérer l'ordre de tri (ascendant ou descendant)
  let sortOrder = document.querySelector(
    'input[name="sortOrder"]:checked'
  ).value;

  articles.forEach(function (category) {
    category.items.sort(function (a, b) {
      let valueA = a[sortCriteria];
      let valueB = b[sortCriteria];

      // Si on trie par nom, on compare en ignorant la casse
      if (sortCriteria === "name") {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }

      // Comparaison selon l'ordre choisi (ascendant ou descendant)
      if (valueA < valueB) {
        return sortOrder === "asc" ? -1 : 1;
      } else if (valueA > valueB) {
        return sortOrder === "asc" ? 1 : -1;
      } else {
        return 0;
      }
    });
  });

  return articles;
}

// Tri des articles au clic du bouton "Trier"
document.getElementById("sortButton").addEventListener("click", function () {
  let filteredArticles = [];

  jsonDatas.forEach(function (category) {
    let filteredItems = category.items;
    if (filteredItems.length > 0) {
      filteredArticles.push({
        type: category.type,
        items: filteredItems,
      });
    }
  });

  let sortedArticles = sortArticles(filteredArticles);

  // Affichage des articles triés
  display_Products(sortedArticles);
});

// Ajouter un nouvel article via le formulaire
document
  .getElementById("addArticleForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêcher le rechargement de la page lors de la soumission du formulaire

    // Récupérer les valeurs du formulaire
    let name = document.getElementById("name").value.trim();
    let type = document.getElementById("type").value.trim().toLowerCase();
    let description = document.getElementById("description").value.trim();
    let price = parseFloat(document.getElementById("price").value);
    let quantity = parseInt(document.getElementById("quantity").value);
    let lastName = document.getElementById("lastName").value.trim();
    let firstName = document.getElementById("firstName").value.trim();
    let address = document.getElementById("address").value.trim();

    // Vérifier si la catégorie existe déjà
    let category = jsonDatas.find(function (cat) {
      return cat.type === type;
    });

    // Créer un nouvel article
    let newItem = {
      name: name,
      description: description || "Rien à afficher",
      price: price,
      quantity: quantity,
      contact: {
        lastName: lastName,
        firstName: firstName,
        address: address,
      },
    };

    // Si la catégorie existe, ajouter l'article
    if (category) {
      category.items.push(newItem);
    } else {
      // Si la catégorie n'existe pas, la créer et ajouter l'article
      jsonDatas.push({
        type: type,
        items: [newItem],
      });
    }

    // Réafficher les articles mis à jour
    display_Products(jsonDatas);

    // Optionnel : Vider le formulaire après l'ajout
    document.getElementById("addArticleForm").reset();
  });
