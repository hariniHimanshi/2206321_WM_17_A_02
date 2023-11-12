const dice = document.getElementById('dice-btn');

function dicegame(){
    //dice one
    var random1 = Math.floor((Math.random()*6)+1);
    var location1 = "png/"+"dice-six-faces-"+random1+".png";
    var png1 = document.querySelectorAll("img")[0];
    png1.setAttribute("src",location1);
    //dice two
    var random2 =Math.floor((Math.random()*6)+1);
    var location2 = "png/"+"dice-six-faces-"+random2+".png";
    var png2 = document.querySelectorAll("img")[1];
    png2.setAttribute("src",location2);
    
    //check who is win
    if(random1 > random2){
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    }
    else if(random1 < random2){
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    }
    else if(random1 === random2){
        document.querySelector("h1").innerHTML = "Draw";
    }
    else{
        document.querySelector("h1").innerHTML = "Error";
    }
    dice.innerHTML = "Play Again"
}