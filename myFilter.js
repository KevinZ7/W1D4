function myFilter(array,callBack){
  //create new array to store the 'things' that satisfy the callback function
  var newArray = [];
  //loop through the array
  for(var i = 0; i < array.length; i ++){
    //if the callBack function returns TRUE
    if(callBack(array[i])){
      //push the current value of the array into our newArray
      newArray.push(array[i]);
    }
  }
  //return the array
  return newArray;
}

function callBack(x){
  return x  10;
};

var number = [10,8,2,19,2];

console.log(myFilter(number,callBack));