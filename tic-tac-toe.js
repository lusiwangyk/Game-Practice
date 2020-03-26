

var squareOne = document.querySelector("#one");
squareOne.addEventListener("click",function(){
    //squareOne.textContext  = "O";
    console.log(squareOne.style.visibility = "visible");
})
squareOne.addEventListener("dblclick",function(){
    squareOne.textContent = "X";
})

var squareTwo = document.querySelector("#two");
var squareThree = document.querySelector("#three");

var squareFour = document.querySelector("#four");
var squareFive = document.querySelector("#five");
var squareSix = document.querySelector("#six");

var squareSeven = document.querySelector("#seven");
var squareEight = document.querySelector("#eight");
var squareNine = document.querySelector("#nine");
var thTag = document.getElementsByTagName("th");



function reStart() {
    thTag.textContent = "";
}
