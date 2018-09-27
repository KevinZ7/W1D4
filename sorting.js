function sortAscending(a,b){
  if(a > b){
    return 1;
  }
  if(a = b){
    return 0;
  }
}

function customComparator(a,b){
  if(a.name > b.name){
    return 1;
  }
  if(a.name === b.name){
    if(a.age < b.age){
      return 1;
    }
  }
}


var array = [10, 2, 5, 1, 9];
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
students.sort(customComparator);

console.log(students);