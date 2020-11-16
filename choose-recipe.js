// Compares a bakery with a recipe's ingredients.
const ingredientCheck = (bakery, ingredients) => {
  for (const bakeryIngredient of bakery) {
    for (const recipeIngredient of ingredients) {
      if (bakeryIngredient === recipeIngredient) {
        return true;
      }
    }
  }
  return false;
}

// Iterates through each recipe sequentially and compares its ingredients
// with those from each bakery. Retirms recipe name for a match.
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (const recipe of recipes) {
    if (ingredientCheck(bakeryA, recipe.ingredients) &&
        ingredientCheck(bakeryB, recipe.ingredients)) {
      return recipe.name;
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));