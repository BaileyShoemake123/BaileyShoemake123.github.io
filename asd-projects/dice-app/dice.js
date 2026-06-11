$(document).ready(function () {
  // Your code goes here
$("<div>")
  .css("height", 15)
  .css("width", 15)
  .css("background-color", "black")
  .css("position", "absolute")
  .css("top", 50)
  .css("left", 50)
  .appendTo("#die");
});

function rollDie(){
  var randomNum = Math.ceil(Math.random() * 6);
  console.log(randomNum);
}
function handleClick(){
  $("#die").click(rollDie);
}
  $("#die").on("click", handleClick);
