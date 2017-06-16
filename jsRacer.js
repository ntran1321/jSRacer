$(document).ready(function() {
  console.log("ready")
  run();
});

function run() {
  var blueLastKey = '';
  var redLastKey = '';
  document.addEventListener("keydown", function(e) {
      if (e.key === 'p' || e.key === 'o') {
        var $car1 = $('.car1');
        $car1.name = "Billy Bob";
        $car1.lastKey = blueLastKey;
        $car1.image = "zombieHamster.png";
        if ($car1.lastKey !== e.key) {
          console.log("e.key" + e.key);
          console.log("last key" + $car1.lastKey);
          moveCar($car1);
        }
        blueLastKey = e.key;
      }

      if (e.key === 'q' || e.key === 'w') {
        var $car2 = $('.car2');
        $car2.name = "Griselda";
        $car2.lastKey = redLastKey;
        $car2.image = "zombieDude.png";
        if ($car2.lastKey !== e.key) {
          moveCar($car2);
        }
        redLastKey = e.key;
      }
  });
}
  function moveCar(car) {
    console.log($(window).width());
    var carPos = parseInt(car.css('margin-left')) + 50;
    console.log(carPos);
    car.css('margin-left', carPos);
    if (carPos + car.width() >= $(window).width()) {
      console.log(car.name + " wins!");
      $('body').css("background-image", "url("+car.image+")");
      $('h1').text(car.name + ' is the WINNER!!!!!');
      $('.car1').hide();
      $('.car2').hide();
    }
  }
