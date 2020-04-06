/*var slider = document.getElementById("slider");
var lengthNum = document.getElementById("slider").value;

slider.outinput = function (){
    document.getElementById("display").innerHTML = this.value; 
}
*/
function myLength() {
    var passwordLength = document.getElementById("length").value;
    console.log(passwordLength);
}


function generatePassword() {
    var everything = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    var password = "";

    for (var i = 0; i <= 12; i++) {
        password = password + everything.charAt(Math.floor(Math.random() * Math.floor(everything.length-1)));
    };
    document.getElementById("display") = password;
    console.log(password);
}


