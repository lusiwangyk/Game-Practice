var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var h2El = document.querySelector("#countdown");
var h3El = document.querySelector("#messages");

function prepareRead() {
  var secondLeft = 5;
  // Create the countdown timer.
  var timerInterval = setInterval(function() {
    secondLeft--;
    h2El.textContent = secondLeft + "seconds left until changing content.";
    

    if(secondsLeft === 0) {
      h2El.textContent = "";
      clearInterval(timerInterval);
      sendMessage();
    }

  },1000);
}

function speedRead() {
  // Print words to the screen one at a time.
  
} 

prepareRead();