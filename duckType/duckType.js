var duck = {
  duckSing: function(){
    console.log('gagaga');
  }
}

var chicken = {
  duckSing: function() {
    console.log('gagaga');
  }
}


// duck and chicken are considered as the same type.
// since the have the same function: duckSing
var choir = [];

var joinChoir = function(animal) {
  if(animal && typeof animal.duckSing === 'function') {
    choir.push(animal)
    console.log('welcome to join the choir!');
    console.log('number of choir members: ', choir.length);
  }
}


joinChoir(duck);
joinChoir(chicken)