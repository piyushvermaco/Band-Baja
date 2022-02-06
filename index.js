var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var bih = this.textContent;
    makeSound(bih);
    makeAnimation(bih);
  });
}

document.addEventListener('keypress', function(event) {
  makeSound(event.key);
  makeAnimation(event.key);
});


function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var kickBase = new Audio('sounds/kick-bass.mp3');
      kickBase.play();
      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    default:
      console.log();
  }
}

function makeAnimation(key){
  var actvbtn = document.querySelector("." + key);
  actvbtn.classList.add("pressed");

  setTimeout(function(){
    actvbtn.classList.remove("pressed");
  }, 100);

}
