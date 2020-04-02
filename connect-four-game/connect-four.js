var playerOne = prompt("Player One, Please enter your name. You will be Blue.");
var playerTwo = prompt("Player Two, Please enter your name. You will be pink.");

// give h3 content:

$("#nameline").text(playerOne + ": it is your turn, please pick a column to drop your blue chip.");

//set colorChange function :

$("td").click(function(){
    $("td.eq(6)").css("background","#1E90EF");
})
























/* only change color after click the button

$("#nameline").text(playerOne + ": it is your turn, please pick a column to drop your blue chip.");

var clickCount = 0;

$(".dot").click(function(){
    $("#nameline").text(playerTwo + ": it is your turn, please pick a column to drop your pink chip.");
    $(this).css("background","blue");
    clickCount++;  
}) 
$(".dot").click(function(){
    if (clickCount%2 === 0) {
        $("#nameline").text(playerOne + ": it is your turn, please pick a column to drop your blue chip.");
        $(this).css("background","pink");
    }
})
*/

