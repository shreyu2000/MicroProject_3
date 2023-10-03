const foodData = require("./food.json");

// Task1 : list all the food items

let allitems = foodData.map((items) => {
    return items;
  });
  console.log(allitems);


  //Task2: list all the food items with category vegetables

let itemsVegetables = foodData.filter((items) => {
    if (items.category === "Vegetable") return items.foodname;
  });
  console.log(itemsVegetables);
  
  //Task3:list all the food items with category fruit
  
  let itemsFruits = foodData.filter((items) => {
    if (items.category === "Fruit") return items.foodname;
  });
  console.log(itemsFruits);
  
  // Task4:list all the food items with category protien
  
  let itemsProtien = foodData.filter((items) => {
    if (items.category === "Protein") return items;
  });
  console.log(itemsProtien);
  
  // Task5:list all the food items with category nuts
  
  let itemsNuts = foodData.filter((items) => {
    if (items.category === "Nuts") return items;
  });
  console.log(itemsNuts);
  
  // Task6:list all the food items with category grains
  
  let itemsGrains = foodData.filter((items) => {
    if (items.category === "Grain") return items;
  });
  console.log(itemsGrains);
  
  // Task7:list all the food items with category dairy
  
  let itemsDairy = foodData.filter((items) => {
    if (items.category === "Dairy") return items;
  });
  console.log(itemsDairy);
  
  // Task8:list all the food items with calorie above 100
  
  let itemsCalorieAbove100 = foodData.filter((items) => {
    if (items.calorie > 100) return items;
  });
  console.log(itemsCalorieAbove100);
  
  // Task9:list all the food items with calorie below 100
  
  let itemsCalorieBelow100 = foodData.filter((items) => {
    if (items.calorie < 100) return items;
  });
  console.log(itemsCalorieBelow100);
  
  // Task10:list all the food items with highest protien content to lowest
  
  let highestToLowest = foodData.sort((a, b) => {
    return b.protiens - a.protiens;
  });
  console.log(highestToLowest);
  
  // Task11:list all the food items with lowest cab content to highest
  
  let lowestToHighest = foodData.sort((a, b) => {
    return a.cab - b.cab;
  });
  console.log(lowestToHighest);