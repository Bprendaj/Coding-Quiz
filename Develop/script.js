// Assignment Code
var generateBtn = document.querySelector("#generate");
// defining the variables for the generator//
var numberText = "0123456789";
var lowercaseText = "abcdefghijklmnopqrstuvwxyz";
var uppercaseText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialText = "!@#$%^&*(){}=+<>?/~`_";
var lengthChoice
var uppercaseChoice
var numberChoice
var specialChoice

// generating the password prompt //
function passwordLength() {
// establishing user prompts (length) - password btwn 8-128 characters //
  var lengthChoice = prompt (" Input Character length, password must be between 8-128 characters.")
  lengthChoice = parseInt(lengthChoice);

// generating the correct password length alerts//
  if (lengthChoice < 8) {
    alert("Password must be between 8-128 characters");
   passwordLength ();
  }

  else if (lengthChoice > 128) {
    alert("Password must be between 8-128 characters");
    passwordLength ();
  }

  else if (isNaN(lengthChoice)) {
    alert ("Please choose a number between 8-128 for password length")
    passwordLength ();
  }

  else {
    return lengthChoice;
  }
}

// establising user prompts (upper/lowercase)
function passwordUpper (){
  uppercaseChoice = prompt ("Would you like to include upper case letters in your password? ")
    uppercaseChoice = uppercaseChoice.toLowerCase();

// generating the correct alerts and choice setttings   
  if (uppercaseChoice === "yes"){
    uppercaseChoice = true;
    return uppercaseChoice;
    }

  else if (uppercaseChoice === "no"){
    uppercaseChoice = false;
    return uppercaseChoice;
  }

  else {
    alert ("Please answer yes or no, would you like to include upper case letters in your password?");
    passwordUpper ();
  }
  return uppercaseChoice;
}

// creating the function to include numbers in the password
function passwordNumber (){
  numberChoice = prompt (" Would you like to include numbers in your password?");
    numberChoice = numberChoice.toLowerCase ();
// generating the correct alerts and choice settings
    if (numberChoice === "yes"){
    numberChoice = true;
    return numberChoice;
    }

    else if (numberChoice === "no"){
    numberChoice = false;
    return numberChoice;
    }

    else {
      alert ("Please answer yes or no, would you like to include numbers in your password?");
      passwordNumber ();
    }

    return numberChoice;
}

// creating function to include special characters in the password 
function passwordSpecial (){
  specialChoice = prompt (" Would you like to include special characters in your password?");
    specialChoice = specialChoice.toLowerCase ();
// generating the correct alerts and choice settings
    if (specialChoice === "yes"){
    specialChoice = true;
    return specialChoice;
    }

    else if (specialChoice === "no"){
    specialChoice = false;
    return specialChoice;
    }

    else {
      alert ("Please answer yes or no, would you like to include special characters in your password?");
      passwordSpecial ();
    }
    return specialChoice;
}

//taking the fuctions from each "if/else" case and creating a password using a random number generator
function generatePassword (){
  passwordLength ();
  console.log(lengthChoice);
  passwordUpper ();
  console.log(uppercaseChoice);
  passwordNumber ();
  console.log(numberChoice);
  passwordSpecial ();
  console.log(specialChoice);

  //setting the combinations of texts
  var characters = lowercaseText;
  var password = "";
  if (uppercaseChoice && numberChoice && specialChoice){
    characters += uppercaseText + numberText + specialText;

  }else if (uppercaseChoice && specialChoice){
    characters += uppercaseText + specialText;
  
  }else if (numberChoice && specialChoice){
    characters += numberText + specialText;

  }else if (uppercaseChoice && numberChoice){
    characters += uppercaseText + numberText;

  }else if (uppercaseChoice){
    characters += uppercaseText;
  
  }else if(numberChoice){
    characters += numberText;
  
  }else if (specialChoice){
    characters += specialText;
  
  }else{
    characters === lowercaseText;
  }
  
    for(var i = 0; i < passwordLength; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }

// Write password to the #password input + including the funtions from each "if" case
function writePassword() {
  var password = passwordLength();
  var password = passwordUpper ();
  var password = passwordNumber ();
  var password = passwordSpecial ();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
