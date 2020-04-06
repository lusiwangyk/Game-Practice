$(document).ready(function(){
    var everything = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    var password = "";
    $("#lengthbutton").click(function(){
        var passwordLength = $("#length").val;
        console.log(passwordLength);
    });
    $("#generator").click(function(){
        for (var i = 0;i < passwordLength;i++){
            password += everything.charAt(Math.floor(Math.random() * Math.floor(everything.length-1)));
        };
        $("display").textContent = password;
        console.log(password);
    })
})

