var makeSound = function (animal) {
  // 如何消除 IF ELSE?
  if (animal instanceof Duck) {
    console.log('ga ga ga')
  } else if (animal instanceof Chicken) {
    console.log('ge ge ge')
  }
}

var Duck = function () {}
var Chicken = function () {}

makeSound(new Duck())
makeSound(new Chicken())
