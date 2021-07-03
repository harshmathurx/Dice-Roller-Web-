var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var dice1url = 'images/dice' + randomNumber1 + '.png';
document.getElementById('img1').setAttribute('src',dice1url);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice1url = 'images/dice' + randomNumber2 + '.png';
document.getElementById('img2').setAttribute('src',dice1url);

var result;
if(randomNumber1 == randomNumber2){
    result = "It's a tie";
}
else if(randomNumber1 > randomNumber2){
    result = "Player 1 Wins";
}
else{
    result = "Player 2 Wins";
}

document.getElementById('heading').innerHTML = result;