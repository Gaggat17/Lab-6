const tiles = ["one", "two", "three", "four", "five", "six"];
function kubs(){
  var player1 = document.getElementById("player1");
  var player2 = document.getElementById("player2");
  var score = document.getElementById("score");
  var random1 = Math.round(Math.random()*5);
  var random2 = Math.round(Math.random()*5);
  if(random1 > random2){
    score.innerHTML = "Гравець 1 переміг";
  }else if(random1 < random2){
    score.innerHTML = "Гравець 2 переміг";
  }else score.innerHTML = "Ничья";
  player1.innerHTML = '<p>Гравець 1</p><img src="'+tiles[random1]+'.jpg"/>';
  player2.innerHTML = '<p>Гравець 2</p><img src="'+tiles[random2]+'.jpg"/>';
}