var words = ["ground", "control", "to", "major", "tom"];

function map (arr, callback) {
  var array = [];
  arr.forEach(function(x){
      array.push(callback(x));
    }
  )
  return array;
}


console.log(map(words, function(word) {
  return word.length;
}));

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


