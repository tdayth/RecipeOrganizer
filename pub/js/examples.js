"use strict";



//Box code 1
const recipe = new RecipeOrganizer();

//Give an HTML element to to add the library to.
const thisElement = document.querySelector("#dessertExample");
recipe.createDessertTemplate(thisElement, "pink", "white", "white", "white");


//Box code 2
const recipe2 = new RecipeOrganizer();
const thisElement2 = document.querySelector("#dessertExample2");
recipe2.createDessertTemplate(thisElement2, "pink", "white", "white", "white");
recipe2.makeTitle("New York Style Cheesecake");
recipe2.addImage("./cheesecake.jpg");
recipe2.addDescription("Cheesecake that you can easily make at home!")
recipe2.expandIngredients(120);
recipe2.addIngredient("wet", "Cream cheese packages", "1000", "g");
recipe2.addIngredient("wet", "Condensed milk", "500", "ml");
recipe2.addIngredient("dry", "Flour", "0.75", "cup");
recipe2.addIngredient("wet", "Sour cream", "0.75", "cup");
recipe2.addIngredient("wet", "Ricotta", "1", "cup");
recipe2.addIngredient("wet", "Vanilla extract", "2", "tsp");
recipe2.addIngredient("wet", "eggs + yolk", "3", "");



// Box code 3
const recipe3 = new RecipeOrganizer();
const thisElement3 = document.querySelector("#dessertExample3");
recipe3.createDessertTemplate(thisElement3, "pink", "white", "white", "white");
recipe3.makeTitle("New York Style Cheesecake");
recipe3.addImage("./cheesecake.jpg");
recipe3.addDescription("Cheesecake that you can easily make at home!")
recipe3.expandIngredients(120);
recipe3.addIngredient("wet", "Cream cheese packages", "1000", "g");
recipe3.addIngredient("wet", "Condensed milk", "500", "ml");
recipe3.addIngredient("dry", "Flour", "0.75", "cup");
recipe3.addIngredient("wet", "Sour cream", "0.75", "cup");
recipe3.addIngredient("wet", "Ricotta", "1", "cup");
recipe3.addIngredient("wet", "Vanilla extract", "2", "tsp");
recipe3.addIngredient("wet", "eggs + yolk", "3", "");
recipe3.addScale();
recipe3.addVolume();
recipe3.addInstructions("violet", "skyBlue");
recipe3.addSteps("Mix creamcheese until softened in the mixer, \
then add ricotta. Then as its mixing, add condensed milk and vanilla extract.", "white");
recipe3.addSteps("Then add 1 egg at a time while it is slowly mixing.", "white");
recipe3.addSteps("Sift the flour while mixing. Then after, add the sour cream.", "white");
recipe3.addSteps("Finally, bake at 400° for 10 minutes. Then 225° at 25 minutes.", "white");




// recipe.createStandardTemplate();
// recipe.makeTitle("New York Style Cheesecake");
// recipe.addImage("./cheesecake.jpg");
// recipe.addIngredient("normal", "chicken", "500", "ml");
// recipe.addIngredient("normal", "flour", "500", "ml");
// recipe.addIngredient("normal", "vanilla", "500", "ml");
// recipe.addIngredient("normal", "pizza", "1", "ml");
// recipe.addInstructions();
// recipe.addSteps("hello");
// recipe.addSteps("hello");
// recipe.addSteps("hello");
// recipe.addSteps("hello");
// recipe.addSteps("hello");
// recipe.addSteps("hello");
// recipe.addSteps("hello");
// recipe.addSteps("200mg");


// recipe.createDessertTemplate();
// recipe.makeTitle("New York Style Cheesecake");
// recipe.addImage("cheesecake.jpg");
// recipe.addIngredient("dry", "flour", "5", "cup");
// recipe.addIngredient("wet", "milk", "500", "ml");
// recipe.addIngredient("wet", "water", "100", "mg");
// recipe.expandDescriptionBox(100);
// recipe.expandIngredients(100);
// recipe.addInstructions();
// recipe.addSteps("hello");
// recipe.addSteps("hello");
// recipe.addSteps("hello");
// recipe.addSteps("hello");
// recipe.addSteps("hello");
// recipe.addSteps("hello");
// recipe.addSteps("hello");
// recipe.addSteps("hello");
