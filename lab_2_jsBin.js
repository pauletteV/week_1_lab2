 
//demo a for loop
 for(i=1; i<= 10; i++) {
   console.log(i);
 }

// ****************************
//demo a while loop 
var age = 10;

while (age <= 17){
  console.log("You are " + age +" years old!");
  age++;
}

console.log("You are legally an adult");

// ****************************
//demo a function with a for loop
function playGame(game) {
  console.log("Let's play " + game + " !");  
}
  
for(var i=0; i<4; i++){
  playGame("Uno");
  playGame("Checkers");
} 