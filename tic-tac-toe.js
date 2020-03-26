

var squareOne = document.querySelector("#one");
var squareTwo = document.querySelector("#two");
var squareThree = document.querySelector("#three");

var squareFour = document.querySelector("#four");
var squareFive = document.querySelector("#five");
var squareSix = document.querySelector("#six");

var squareSeven = document.querySelector("#seven");
var squareEight = document.querySelector("#eight");
var squareNine = document.querySelector("#nine");
var pTag = document.getElementsByTagName("p");

squareOne.addEventListener("click",function(){
    squareOne.style.visibility = "visible";
   // console.log(squareOne.style.visibility = "visible");
})
squareOne.addEventListener("dblclick",function(){
    squareOne.textContent = "X";
})

function changeVisibility() {
    pTag.style.visibility = "visible";
}

function reStart() {
    pTag.textContent = "o";
    pTag.style.visibility = "hidden";
}
