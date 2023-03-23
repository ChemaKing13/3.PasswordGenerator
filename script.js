// Assignment code here
var generatePassword = function() {

  //This variables will allow us to find the elements we need to generete the password 
  var possibleNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var symbols = ["!", "@", "#", "%", "*", "()", "{}", "[]", "/", ".", ","];
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "l", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "L", "O", "P", "Q", "R", "S", "T", "U", "V", "w", "X", "Y", "Z"];
  var passwordCharacters = [];

  //Ask the user for password length and character preferences 
  var passwordLength = window.prompt("Choose password length (between 8 and 128 characters)");

  if (passwordLength < 8 || passwordLength > 128) {
    return alert("Please chosse a lenght between 8 and 128 characters");
  }
  else {
    alert("Your password will be " + passwordLength + " character long" );
  }

  lowercase = confirm("Do you want to include lowercase characters? ");

  uppercase = confirm("Do you want to include uppercase characters?");

  numbers = confirm("Do you want to use numbers?");

  specialCharacters = confirm("Do you want to include special characters? ");



  //Her we use concat to join all the selected characters into a single array called "possibleCharacters"
  if (lowercase) {
  passwordCharacters = passwordCharacters.concat(lowercaseLetters); 
  }

  if (uppercase) {
  passwordCharacters = passwordCharacters.concat(uppercaseLetters); 
  }

  if (numbers) {
  passwordCharacters = passwordCharacters.concat(possibleNumbers); 
  }

  if (specialCharacters) {
  passwordCharacters = passwordCharacters.concat(symbols); 
  }

  let finalPassword = ""
  for (let i = 0; i < passwordLength; i++) {
  let rng = [Math.floor(Math.random() * passwordCharacters.length)];

  finalPassword = finalPassword + passwordCharacters[rng];
  }
  return finalPassword;
};

  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



