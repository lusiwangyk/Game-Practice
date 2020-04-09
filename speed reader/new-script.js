var countdown = document.querySelector("#countdown");
var words = document.querySelector("#messages");

var timeLeft = 5;

var timeInterval = setInterval(function(){
    timeLeft--;
    countdown.textContent = timeLeft + "seconds left to start the word game."
    if (timeLeft == 0){
        clearInterval(timeInterval);
        sentMessage();
    }
},1000);

var zoo = ["Tiger", "Dog", "Cat", "Elephant", "Wolf", "Panda", "Bird", "Monkey", "Squirrels"];

function sentMessage(){
    for (var i = 0;i <zoo.length;i++){
        var timeChange = setInterval(function(){
            var message = zoo[(Math.floor(Math.random() * zoo.length))];
            words.textContent = message;
        },1000)
        console.log(message);
    }
    

}

