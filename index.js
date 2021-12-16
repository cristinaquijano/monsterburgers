const canvas = document.querySelector(".myCanvas")
const context = canvas.getContext("2d")
canvas.style.display = "none";
const ingredients = ['tomato sauce', 'patty', 'bread']
//const startPage = document.querySelector(".startPage")

const backgroundImage = document.querySelector(".backgroundImage")

//start button
const startButton = document.querySelector(".startGame");
startButton.onclick = () => {
    console.log('works')
 backgroundImage.style.display = "none";
 canvas.style.display = "block";
};

//background
context.fillStyle = "#FF52E3";
context.fillRect(0, 0, canvas.width, canvas.height);
context.strokeStyle = "#5E17EB"
context.fillStyle = "#EDC3AD";
context.lineWidth = '4';
context.font = "101px bangers"
context.fillText("Monster Burgers", 550, 105)
context.strokeText("Monster Burgers", 550, 105)

//start page
//startPage.style.display = "none";
//startPage.style.display = "block";

//captain burger 
const img = new Image();
img.src = "./Monster Burgers.png";
img.onload = () => {
    context.drawImage(img, 100, 0, 250, 250);
}

//chesse
const cheese = new Image();
cheese.src = "./cheese.png";
cheese.onload = () => {
    context.drawImage(cheese, 152, 750, 90, 90);
}

//mustard sauce
const mustard = new Image();
mustard.src = "./Mustard.png";
mustard.onload = () => {
    context.drawImage(mustard, 220, 670, 60, 110);
}

//tomato sauce
const tomatoSauce = new Image();
tomatoSauce.src = "./tomato sauce.png";
tomatoSauce.onload = () => {
    context.drawImage(tomatoSauce, 162, 580, 60, 110);
}

//onion
const onion = new Image();
onion.src = "./onion.png";
onion.onload = () => {
    context.drawImage(onion, 95, 620, 50, 80)
}

//patty
const patty = new Image();
patty.src = "./patty.png";
patty.onload = () => {
    context.drawImage(patty, 167, 670, 40, 90);
}

//bread
const bread = new Image();
bread.src = "./bread.png";
bread.onload = () => {
    context.drawImage(bread, 110, 690, 50, 95);
}

//table
const table = new Image();
table.src = "./table.png";
table.onload = () => {
    context.drawImage(table, 400, 450, 900, 400);
}

//chef
const chef = new Image();
chef.src = "./chef.png";
chef.onload = () => {
    context.drawImage(chef, 670, 183, 300, 300);
}

//tomates
const tomatoes = new Image();
tomatoes.src = "./tomatoes.png";
tomatoes.onload = () => {
    context.drawImage(tomatoes, 100, 550, 50, 90);
}