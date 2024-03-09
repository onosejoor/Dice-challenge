// Player 1//
document.querySelector(".play").addEventListener("click", function(){

    var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomImage1 = "dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImage1);

//  Player 2  //

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

// Winner //

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins!"
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "🚩Player 2 Wins!"
}

else{
    document.querySelector("h1").textContent = "Draw!"

}

});
