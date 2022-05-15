// User input variable
var enter;
var confirmLAlpha;
var confirmCAlpha;
var confirmNum;
var confirmSpecial;

// lowercase
lalpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// uppercase conversion
calpha = [];

// numeric
num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// special characters
special = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "=", "+", "?", ",", "<", ".", ">", "/", "?"];

// selections outside of the if statement to concatenated
var passwordCharacters;

// converting letters to uppercase
var toUpper = function (x) {
    return x.toUpperCase();
};

calpha2 = lalpha.map(toUpper);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    generate = generatePassword();
    document.getElementById("password").placeholder = generate;
});

// function to generate password
function generatePassword() {
    // prompts for user input
    enter = parseInt(prompt("Select the number of characters in your password. Password must be between 8 and 128 characters."));

    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128 characters."));
        return;
        
    } else {
        confirmLAlpha = confirm("Include lowercase characters?");
        confirmCAlpha = confirm("Include uppercase characters?");
        confirmNum = confirm("Include numbers?");
        confirmSpecial = confirm("Include special characters?");
    };

    if (!confirmLAlpha && !confirmCAlpha && !confirmNum && !confirmSpecial) {
        choices = alert("You must choose at least one criteria.");
    }

    // selected all four criteria
    else if (confirmLAlpha && confirmCAlpha && confirmNum && confirmSpecial) {
        passwordCharacters = special.concat(num, lalpha, calpha2);
    }
    // for 3 positive options
    else if (confirmSpecial && confirmNum && confirmCAlpha) {
        passwordCharacters = special.concat(num, calpha2);
    }
    else if (confirmSpecial && confirmNum && confirmLAlpha) {
        passwordCharacters = special.concat(num, lalpha);
    }
    else if (confirmSpecial && confirmCAlpha && confirmLAlpha) {
        passwordCharacters = special.concat(calpha2, lalpha);
    }

    // for 2 positives
    // special characters
    else if (confirmSpecial && confirmNum) {
        passwordCharacters = special.concat(num);
    }
    else if (confirmSpecial && confirmCAlpha) {
        passwordCharacters = special.concat(calpha2);
    }
    else if (confirmSpecial && confirmLAlpha) {
        passwordCharacters = special.concat(lalpha);
    }
    // lowercase
    else if (confirmLAlpha && confirmNum) {
        passwordCharacters = lalpha.concat(num);
    }
    else if (confirmLAlpha && confirmCAlpha) {
        passwordCharacters = lalpha.concat(calpha2);
    }
    // numeric
    else if (confirmNum && confirmCAlpha) {
        passwordCharacters = num.concat(calpha2);
    }
    // for 1 positive
    else if (confirmSpecial) {
        passwordCharacters = special;
    }
    else if (confirmLAlpha) {
        passwordCharacters = lalpha;
    }
    else if (confirmCAlpha) {
        passwordCharacters = calpha.concat(calpha2);
    }
    else if (confirmNum) {
        passwordCharacters = num;
    };

    var password = [];

    for (var i = 0; i < enter; i++) {
        pickPasswordCharacters = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        password.push(pickPasswordCharacters);
    }

    var generate = password.join("");
    UserInput(generate);
    return generate;
}
function UserInput(generate) {
    document.getElementById("password").textContent = generate;
}
