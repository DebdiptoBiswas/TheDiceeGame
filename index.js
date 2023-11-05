var randomnumber1 = Math.floor(6 * Math.random()) + 1;
// console.log(randomnumber1);
var randomDiceImg1 = "images/dice"+randomnumber1+".png";
var randomnumber2 = Math.floor(6 * Math.random()) + 1;
// console.log(randomnumber1);
var randomDiceImg2 = "images/dice"+randomnumber2+".png";
document.querySelector("img.img1").setAttribute("src",randomDiceImg1);
document.querySelector("img.img2").setAttribute("src",randomDiceImg2);
if(randomnumber1 === randomnumber2){document.querySelector("h1").innerHTML = "Draw";}
else if(randomnumber1 < randomnumber2){document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";}
else if(randomnumber1 > randomnumber2){document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";}
