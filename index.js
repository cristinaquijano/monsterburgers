const canvas = document.querySelector(".myCanvas");
const context = canvas.getContext("2d");
canvas.style.display = "none";
//const startPage = document.querySelector(".startPage")

const backgroundImage = document.querySelector(".backgroundImage");

// Start button
const startButton = document.querySelector(".startGame");
startButton.onclick = () => {
  backgroundImage.style.display = "none";
  canvas.style.display = "block";
};

// Background
context.fillStyle = "#FF52E3";
context.fillRect(0, 0, canvas.width, canvas.height);
context.strokeStyle = "#5E17EB";
context.fillStyle = "#EDC3AD";
context.lineWidth = "4";
context.font = "101px bangers";
context.fillText("Monster Burgers", 550, 105);
context.strokeText("Monster Burgers", 550, 105);

//start page
//startPage.style.display = "none";
//startPage.style.display = "block";

// Captain burger
const img = new Image();
img.src = "./Images/Monster Burgers.png";
img.onload = () => {
  context.drawImage(img, 100, 0, 250, 250);
};

const ingredientPosition = 70;

// Cheese
const cheese = new Image();
cheese.src = "./Images/cheese.png";
cheese.onload = () => {
  context.drawImage(cheese, ingredientPosition * 1, 700, 90, 90);
};

// Mustard sauce
const mustard = new Image();
mustard.src = "./Images/Mustard.png";
mustard.onload = () => {
  context.drawImage(mustard, ingredientPosition * 2, 700, 60, 110);
};

// Tomato sauce
const tomatoSauce = new Image();
tomatoSauce.src = "./Images/tomato sauce.png";
tomatoSauce.onload = () => {
  context.drawImage(tomatoSauce, ingredientPosition * 3, 700, 60, 110);
};

// Onion
const onion = new Image();
onion.src = "./Images/onion.png";
onion.onload = () => {
  context.drawImage(onion, ingredientPosition * 4, 700, 50, 80);
};

// Patty
const patty = new Image();
patty.src = "./Images/patty.png";
patty.onload = () => {
  context.drawImage(patty, ingredientPosition * 5, 700, 40, 90);
};

// Bread
const bread = new Image();
bread.src = "./Images/bread.png";
bread.onload = () => {
  context.drawImage(bread, ingredientPosition * 6, 700, 50, 95);
};

// Tomatoes
const tomatoes = new Image();
tomatoes.src = "./Images/tomatoes.png";
tomatoes.onload = () => {
  context.drawImage(tomatoes, ingredientPosition * 7, 700, 50, 90);
};

// Table
const table = new Image();
table.src = "./Images/table.png";
table.onload = () => {
    context.drawImage(table, 470, 392, 700, 300);
}  

// Chef
const chef = new Image();
chef.src = "./Images/chef.png";
chef.onload = () => {
  context.drawImage(chef, 670, 120, 300, 300);
};

const orderIngredients = [
  "cheese",
  "ketchup",
  "patty",
  "bread",
  "mustard",
  "onion",
  "tomatoes",
];

// Create burger
function createOrder(newOrder) {
  const newBurger = [];
  for (let i = 0; i < newOrder; i++) {
    const randomIndex = randomIntFromInterval(0, 6);
    newBurger.push(orderIngredients[randomIndex]);
  }
  return newBurger;
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkArrayEquality(_array1, _array2) {
  return (
    _array1.length === _array2.length &&
    _array1.every(function (_array1_i, i) {
      return _array1_i === _array2[i];
    })
  );
}

let madeBurger = [];
let orderBurger = [];

// Set interval
setInterval(() => {
  if (orderBurger.length === 0) {
    orderBurger = createOrder(5);
    console.log(orderBurger);
  }
  if (checkArrayEquality(orderBurger, madeBurger)) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText("Yay, you win!", 100, 100);
  }
  if (
    orderBurger.length === madeBurger.length &&
    !checkArrayEquality(orderBurger, madeBurger)
  ) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText("Haha You lost!", 100, 100);
  }
  orderBurger.forEach((ingredient, index) => {
    context.fillText(ingredient, 120, 100 * (index + 1) + 170);
  });
  madeBurger.forEach((ingredient, index) => {
    context.fillText(ingredient, 1200, 100 * (index + 1) + 170);
  });
}, 20);

canvas.addEventListener("click", (event) => {
  if (
    event.layerX > ingredientPosition * 1 &&
    event.layerX < ingredientPosition * 1 + ingredientPosition &&
    event.layerY > 700 - ingredientPosition &&
    event.layerY < 700 + ingredientPosition
  ) {
    madeBurger.push("cheese");
    console.log("cheese");
  } else if (
    event.layerX > ingredientPosition * 2 &&
    event.layerX < ingredientPosition * 2 + ingredientPosition &&
    event.layerY > 700 - ingredientPosition &&
    event.layerY < 700 + ingredientPosition
  ) {
    madeBurger.push("mustard");
    console.log("mustad");
  } else if (
    event.layerX > ingredientPosition * 3 &&
    event.layerX < ingredientPosition * 3 + ingredientPosition &&
    event.layerY > 700 - ingredientPosition &&
    event.layerY < 700 + ingredientPosition
  ) {
    madeBurger.push("ketchup");
    console.log("tomato sauce");
  } else if (
    event.layerX > ingredientPosition * 4 &&
    event.layerX < ingredientPosition * 4 + ingredientPosition &&
    event.layerY > 700 - ingredientPosition &&
    event.layerY < 700 + ingredientPosition
  ) {
    madeBurger.push("onion");
    console.log("onion");
  } else if (
    event.layerX > ingredientPosition * 5 &&
    event.layerX < ingredientPosition * 5 + ingredientPosition &&
    event.layerY > 700 - ingredientPosition &&
    event.layerY < 700 + ingredientPosition
  ) {
    madeBurger.push("patty");
    console.log("patty");
  } else if (
    event.layerX > ingredientPosition * 6 &&
    event.layerX < ingredientPosition * 6 + ingredientPosition &&
    event.layerY > 700 - ingredientPosition &&
    event.layerY < 700 + ingredientPosition
  ) {
    madeBurger.push("bread");
    console.log("bread");
  } else if (
    event.layerX > ingredientPosition * 7 &&
    event.layerX < ingredientPosition * 7 + ingredientPosition &&
    event.layerY > 700 - ingredientPosition &&
    event.layerY < 700 + ingredientPosition
  ) {
    madeBurger.push("tomatoes");
    console.log("tomatoes");
  }
});
