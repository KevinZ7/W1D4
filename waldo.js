// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(currentPerson,index){
    if(currentPerson === 'Waldo'){
      found(currentPerson,index);
    }
  });



  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(i);   // execute callback
  //   }
  // }
}

function actionWhenFound(currentPerson,index) {
  console.log("Found him at index: " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);