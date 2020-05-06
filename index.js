

    var randomNumber1 = Math.floor(Math.random() * 6 + 1);  // random number 1 to 6

    var randomDiceImage = "dice" + randomNumber1 + ".png";   // dice1.png to dice6

    var randomImageSource = "images/" + randomDiceImage;  ///images/dice1 to dice6.png

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    var randomImageSource1 = "images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource1);

    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML="Player 1 Wins";
    }
    else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML="Player 2 Wins";
    }
      else
      document.querySelector("h1").innerHTML="Draw";
  
