var playerOne = prompt("Player One, Please enter your name. You will be Blue.");
var playerTwo = prompt("Player Two, Please enter your name. You will be red.");

$("#nameline").text(playerOne + ": it is your turn, please pick a column to drop your blue chip.");

var clickCount = 0;

$(".dot").click(function(){
    $("#nameline").text(playerTwo + ": it is your turn, please pick a column to drop your red chip.");
    $(this).css("background","blue");
    clickCount++;  
}) 
$(".dot").click(function(){
    if (clickCount%2 === 0) {
        $("#nameline").text(playerOne + ": it is your turn, please pick a column to drop your blue chip.");
        $(this).css("background","red");
    }
})



