// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
  var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuv";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*"; 

  let finalPass = "";
  let tempPass = ""; 

  const passLength = prompt("Please choose a number between '8-128' for the lenght of your password");

if (passLength >= 8 && passLength <= 128) {
  console.log ("This works!")

  let upperCase = confirm("Do you want any lowercase letters in your password?");
  let lowerCaseLetters = confirm("Do you want any uppercase letters in your password?");
  let ynSymbols = confirm("Do you want any special characters in your password?");
  let ynNumbers = confirm("Do you want any numbers in your password?");
  
  if (upperCase) {
    tempPass += capLetters 
  }
  
  if (lowerCaseLetters) {
    tempPass += lowerCase
  }

  if (ynSymbols) {
    tempPass += symbols
  }

  if (ynNumbers) {
    tempPass += numbers
  }
  
  for (var i=0; i < passLength; i++ ) {
    let randomNumber = Math.floor(Math.random() * tempPass.length);
  
    finalPass += tempPass.charAt(randomNumber); 
  }
  return finalPass
} return 'Nope! A number between 8-128!😸'
}