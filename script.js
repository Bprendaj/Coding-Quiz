// Assignment Code
var generateBtn = document.querySelector("#generate");


// Creating the Arrays of Character Choices
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['@', '%', '!', '?', '/', "'", '(', ')', '+', '=', '{', '}', ':', ';', '_', '-'];


// creating the function to prompt the user with options for password criteria
function criteria () {
  var isValid = false;
    do {
      var length = prompt("Enter a desired password length between 8 and 128 characters");
      var askUpper = confirm("Would you like to include uppercase letters in your password?");
      var askLower = confirm("Would you like to include lowercase letters in your password?");
      var askNumber = confirm("Would you like to include numbers in your password?");
      var askSpecial = confirm ("Would you like to include special characters in your password?");

      if ((length < 8)|| (length > 128))
        alert ("Please enter a password length between 8 and 128 characters");
      else if ((!askUpper)&&(!askLower)&&(!askNumber)&&(!askSpecial))
        alert("Please select at least one of the prompted character types");
      else 
       isValid = true;
      }
    while(!isValid);
    return answers;
}

function generatePassword() {
  var passwordOptions = criteria();
  var posCombination = [];
  var displayPass = "";

  if(askLower === true) {
    for (var i = 0; i < lowerCase.length; i++) {
        posCombination.push(lowerCase[i]);
    }
  }
  if(askUpper === true) {
    for (var i = 0; i < lowerCase.length; i++) {
        posCombination.push(lowerCase[i]);
    }
  }
  if(askNumber === true) {
    for (var i = 0; i < numbers.length; i++) {
        posCombination.push(numbers[i]);
    }
  }
  if(askSpecial === true) {
    for (var i = 0; i < special.length; i++) {
        posCombination.push(special[i]);
    }
  }

  console.log(posCombination);

    for(var i = 0; i < passwordOptions.length; i++){
      displayPass += posCombination.charAt(Math.floor(Math.random() * posCombination.length));
    }

    console.log(displayPass);

    return displayPass;
  }

// Write password to the #password input + including the funtions from each "if" case
function writePassword() {
  var password = generatePassword ();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
