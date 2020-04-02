var slider = document.getElementById("slider");
var lengthNum = document.getElementById("slider").value;

slider.outinput = function (){
    document.getElementById("display").innerHTML = this.value; 
}



function generatePassword() {
    var everything = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    var password = "";

    for (var i = 0; i <= lengthNum; i++) {
        password = password + everything.charAt(Math.floor(Math.random() * Math.floor(everything.length-1)));
    };
    document.getElementById("display").value = password;
    console.log(password);
}


