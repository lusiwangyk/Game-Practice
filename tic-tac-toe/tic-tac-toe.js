var restart = document.querySelector("#b");
var box = document.querySelectorAll(".game");

function clearBoard () {
    for (var i = 0; i < box.length; i++) {
        box[i].style.visibility = "hidden";
    }
}
restart.addEventListener("click",clearBoard);




var squareOne = document.querySelector("#one");
squareOne.addEventListener("click",function(){
    squareOne.textContent = "X";
})
squareOne.addEventListener("dblclick",function(){
    squareOne.textContent = "O";
})


var squareTwo = document.querySelector("#two");
squareTwo.addEventListener("click",function(){
    squareTwo.textContent = "X";
})
squareTwo.addEventListener("dblclick",function(){
    squareTwo.textContent = "O";
})


var squareThree = document.querySelector("#three");
squareThree.addEventListener("click",function(){
    squareThree.textContent = "X";
})
squareThree.addEventListener("dblclick",function(){
    squareThree.textContent = "O";
})


var squareFour = document.querySelector("#four");
squareFour.addEventListener("click",function(){
    squareFour.textContent = "X";
})
squareFour.addEventListener("dblclick",function(){
    squareFour.textContent = "O";
})


var squareFive = document.querySelector("#five");
squareFive.addEventListener("click",function(){
    squareFive.textContent = "X";
})
squareFive.addEventListener("dblclick",function(){
    squareFive.textContent = "O";
})


var squareSix = document.querySelector("#six");
squareSix.addEventListener("click",function(){
    squareSix.textContent = "X";
})
squareSix.addEventListener("dblclick",function(){
    squareSix.textContent = "O";
})


var squareSeven = document.querySelector("#seven");
squareSeven.addEventListener("click",function(){
    squareSeven.textContent = "X";
})
squareSeven.addEventListener("dblclick",function(){
    squareSeven.textContent = "O";
})


var squareEight = document.querySelector("#eight");
squareEight.addEventListener("click",function(){
    squareEight.textContent = "X";
})
squareEight.addEventListener("dblclick",function(){
    squareEight.textContent = "O";
})


var squareNine = document.querySelector("#nine");
squareNine.addEventListener("click",function(){
    squareNine.textContent = "X";
})
squareNine.addEventListener("dblclick",function(){
    squareNine.textContent = "O";
})

//var spanTag = document.querySelectorAll("span");



