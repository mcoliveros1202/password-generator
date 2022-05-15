// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lalpha = 'abcdefghijklmnopqrstuvwxyz';
var calpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var special =',.!@#$%^&*?-_+/';

// Write password to the #password input
function generatePassword() {
    var password = "";
    var passwordCharacters = "";

    // create prompt for password length
    var passwordLength = prompt("Select the number of characters in your password. Password must be between 8 - 128 characters.");
    passwordLength = parseInt(passwordLength);

    if (passwordLength < 8) {
        alert("Password must have at least 8 characters!");
        return;
    }

    if (passwordLength > 128) {
        alert("Password can have no more than 128 characters!");
        return;
    }

    // creates confirm for character selection: lower case
    var lalphaChoice = confirm("Include lowercase characters?");
    
    if (lalphaChoice) {
        passwordCharacters += lalphaChoice;
    }
    
    // creates prompt for character selection: upper case
    var calphaChoice = confirm("Include uppercase characters?");
    
    if (calphaChoice) {
        passwordCharacters += calphaChoice;
    }
    // creates prompt for character selection: numeric
    var numChoice = confirm("Include numeric characters?");

    if (numChoice) {
        passwordCharacters += numChoice;
    }

    // creates prompt for character selection: special characters
    var specialChoice = confirm("Include special characters?");

    if (specialChoice) {
        passwordCharacters += specialChoice;
    }

    for (var i=0; i < passwordLength; i++) {
        password = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
    }

function writePassword() {
    var password = generatePassword();
    var passwordText = document.getElementById("password");
    passwordText.value = password;
}


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);