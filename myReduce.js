function myReduce(array,callBack,initialValue){
  var accumulator = 0;

  //Ensure that if the array is empty or non-existent AND there is no initial value, reture error
  if((array.length < 1 || array === undefined) && !initialValue ){
    return "Error!"
  }

  //Or else, if there is no initial value identified, assign the accumulator value to first value array
  //then loop through entire array starting from position 1 and put the return value into accumulator
  else if(initialValue === undefined){
    accumulator = array[0];
    for(var i = 1; i < array.length; i++){
      accumulator = callBack(accumulator,array[i]);
    }

  }

  //else, make the accumulator the initialVale, and do the same as above
  else{
    accumulator = initialValue;
    for(var i = 0; i < array.length; i++){
      accumulator = callBack(accumulator,array[i]);
    }
  }

  return accumulator;

}

function callBack(accumulator,currentValue,currentIndex,array){
  return accumulator + currentValue;
}

//for testing purposes
var testArray = ["k","e","v","i","n"];
console.log(myReduce(testArray,callBack,2));









