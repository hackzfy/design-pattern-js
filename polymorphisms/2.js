var makeSound = function (animal) {
  // 多态消除 IF ELSE
  // makeSound 只关注一致的行为
  // 把各个类型的不一致的行为封装到类型对象中去
  animal.sound()
}

var Duck = function () {}
var Chicken = function () {}

Duck.prototype.sound = function () {
  console.log('gagagaga')
}
Chicken.prototype.sound = function () {
  console.log('gegegege')
}

makeSound(new Duck())
makeSound(new Chicken())

var Dog = function () {}
Dog.prototype.sound = function () {
  console.log('wangwang')
}

makeSound(new Dog())
