// Set the variables
  
   var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var abcUpperArr = abcUpper.split("");
   var abcLower = "abcdefghijklmnopqrstuvwxyz";
   var abcLowerArr = abcLower.split("");
   var num = "0123456789";
   var numArr = num.split("");
   var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
   var symArr = sym.split("");

//  Prompt instruction for the user to begin

window.onload = alert("Welcome! Please click 'Generate password' to start!");

// Function for Password Generation

function generatePass(){
    var allChars = [];
    var resultPass = "";

    var Totlength = prompt("How many characters would you like your password to be?");

    if(Totlength <8 || Totlength > 128){
        alert("It is recommended to have a password between 8 and 128 characters long!\nPlease start over.");
    }

// Confirm the rest of character conditions
    
    else{
        if(confirm("Would you like your password to contain upper case letters?")){
            Array.prototype.push.apply(allChars, abcUpperArr);
        }

        if(confirm("@ould you like your password to contain lower case letters?")){
            Array.prototype.push.apply(allChars, abcLowerArr);
        }

        if(confirm("Would you like your password to contain numbers?")){
            Array.prototype.push.apply(allChars, numArr);
        }

        if(confirm("Would you like your password to contain symbols?")){
            Array.prototype.push.apply(allChars, symArr);
        }

        if(allChars.length===0){
            alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
        }

        else{
            for(var i =0;i<Totlength;i++){
                var random = Math.floor(Math.random()*allChars.length);
                resultPass += allChars[random];
            }
        }
        }
        document.getElementById("password").innerHTML = resultPass;
   }

// Bonus! function to copy password to clipboard

function copyPass(){

    document.querySelector("textarea").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}
