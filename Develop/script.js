// Assignment code here

function generatePassword() {
  // Prompt 1: Desired password length
  var passwordLengthInput = prompt('Enter desired password length (between 8 and 128 characters)');
  var passwordLength = passwordLengthInput;
  console.log(passwordLength);

  // Validate length and type of user input to ensure a number in the desired range is entered. 
if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Invalid password input. Enter a number between 8 and 128.');
    return;
  }

// Promt 2-5: Character types.
var lowercase = confirm('Do you want to include lowercase characters?');
var uppercase = confirm('Do you want to include uppercase characters?');
var numeric = confirm('Do you want to include numbers?');
var special = confirm('Do you want to include special characters?');

// Ensures that at least 1 character set is selected, or alert is thrown and flow is broken. 
if (!lowercase && !uppercase && !numeric && !special) {
  alert('You must select at least one character type.')
  return;
}

// Character sets
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numericChars = '0123456789';
var specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

// Generating character pool based on selected character sets.
var characterPool = '';
if (lowercase) characterPool += lowercaseChars;
if (uppercase) characterPool += uppercaseChars;
if (numeric) characterPool += numericChars;
if (special) characterPool += specialChars;


let password = '';
for (let i = 0; i < passwordLength; i++) {
  password += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
}

document.getElementById("password").value = password;

return password;
}

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














// Upon "click" you will be presented with a series of prompts for password criteria
// User will select which criteria to include in the password. If generate password button is clicked, then present first criteria prompt. 

// Prompt 1 will cover length with range of at least (>=) 8 characters and no more than (<=) 128 characters. If prompted for length, then user must select >=8 and <=128. 

// Prompt 2-5 will cover character type to include in the password and user will select "whether or not" to include lowercase, uppercase, numeric and/or special characters. If prompted for character types, then user must select >=1 of the 4 options. 

// When each prompt is answered, then user input should be validated and at least (>=) one character type should be selected. 

// If all prompts are answered, then a password should be generated to match the selected criteria.