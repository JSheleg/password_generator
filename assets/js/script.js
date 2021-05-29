////////////////////////////////////array assignments//////////////////////////////////////////////////////

 //lower case (# 97-122)
 var alpha = Array.from(Array(26)).map((e, i) => i + 97) // String.fromCharCode and map maps the alpha array from 97-122 with the equivalent UTF-8 Code. 
 console.log(alpha + " alpha equals");
 var lowerCaseAlphabet = alpha.map((x) => String.fromCharCode(x));
 console.log(lowerCaseAlphabet + " lower");

 //uppercase ( #65-90)  
 var beta = Array.from(Array(26)).map((e, m) => m + 65);
 console.log(beta + " beta equals");
 var upperCaseAlphabet = beta.map((y) => String.fromCharCode(y));
 console.log(upperCaseAlphabet + " Upper");

 //numbers 0-9 (# 48-57)
 var charlie = Array.from(Array(10)).map((e,n) => n + 48);                    
 console.log(charlie + " charlie equals");
 var numericCaseAlphabet = charlie.map((x)=> String.fromCharCode(x));
 console.log(numericCaseAlphabet + " numbers");

 //special characters ( #32-47,58-64, 94-96 and 123-126)
 var delta = [ 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 94, 95, 96, 123, 124, 125, 126];
 console.log(delta + " delta");
 var specialCharAlphabet = delta.map((x) => String.fromCharCode(x));
 console.log(specialCharAlphabet + " special char");


 ///////////////////////////////////////////////Random Functions////////////////////////////////////////////////////////////

  //Catagory Index
  var indexCatagories = new Array();

  //catagory index
  var randomCatagoryIndex = function(){
    //0 = lowercase, 1 = uppercase, 2 = numbers, 3 = special characters
    index =indexCatagories[Math.floor(Math.random()* indexCatagories.length)]; 
  }

  //lowercase index
  var randomLowerCaseIndex = function(){
    indexLowerCase= lowerCaseAlphabet[Math.floor(Math.random()*lowerCaseAlphabet.length)];
  }

  //uppercase index
  var randomUpperCaseIndex = function(){
    indexUpperCase = upperCaseAlphabet[Math.floor(Math.random()* upperCaseAlphabet.length)];
  }

  //number index
  var randomNumberIndex = function(){
    indexNumberCase = numericCaseAlphabet[Math.floor(Math.random()*numericCaseAlphabet.length)];
  }

  //special characters
  var randomSpecialCharIndex = function(){
    indexSpeicalCharCase = specialCharAlphabet[Math.floor(Math.random()*specialCharAlphabet.length)];
  }
///////////////////////Random Functions End//////////////////////////////////////////////////////////

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

///////////////////////// Generate Password Function//////////////////////////////////////////////////////////

function generatePassword(){
  var totalNumbers = window.prompt(' How many characters would you like for your password? Please choose between 8 and 129 characters!');
  if(totalNumbers >= 8 && totalNumbers <=129){
    console.log("Total number requested for password " + totalNumbers);

    //prompts asked after button push and build catagories index
    var lowerCase = window.confirm('Do you want to include LOWER CASE characters in your password?');
    if(lowerCase){
      indexCatagories.push('0');
    }
    var upperCase = window.confirm('Do you want to include UPPER CASE characters in your password?');
    if(upperCase){
      indexCatagories.push('1');
    }
    var numericCase = window.confirm('Do you want to include NUMBER characters in your password?');
    if(numericCase){
      indexCatagories.push('2');
    }  
    var specialCharacters = window.confirm('Do you want to include SPECIAL characters in your password?');
    if(specialCharacters){
      indexCatagories.push('3');
    }
    ///////Index Array should be intialized, loop through number of variables stated by user using randomCatagoryIndex()//////////////
    
    //initialize temp variable for holding the round
    var temp = new Array();

    //loop to generate variable for each index of password.
    for( var i = 0; i<totalNumbers; i++){
      
      //select random index from user fabricated indexCatagories
      randomCatagoryIndex();
 
      //if index = 0 (lowercase)
      if(index === "0"){
        randomLowerCaseIndex();
        temp.push(indexLowerCase);
      }
      else if(index === "1"){
        randomUpperCaseIndex();
        temp.push(indexUpperCase);  
      }
      else if(index === "2"){
        randomNumberIndex();
        temp.push(indexNumberCase);
      }
      else if(index === "3"){
        randomSpecialCharIndex();
        temp.push(indexSpeicalCharCase);
      }           
    } 
    password = temp.join(''); 
    return(password);
  }
  else{
    window.alert("Input was out of range or was not a number, please try again");
  }
}