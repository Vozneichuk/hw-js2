//TASK 1

function printTimeout(str, n) {
  setTimeout(() => {
    console.log(str)
  }, n*1000);
};

//TASK 2

function sumAll(n) {
  if(n != 0){
    return n+sumAll(n-1);
  } return 0;
}

//TASK 3

function bombTimer(str, time){
  let t = time;
  let s = setInterval(()=>{
    if(t>0){
      console.log(t);
      t--;
    }else{
      console.log(str)
    clearInterval(s);
  }
  }, t* 1000);
}

//TASK 4

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

//TASK 5

function bombTimer(str, time){
  let t = time;
  let s = setInterval(()=>{
    if(t>0){
      console.log(t);
      t--;
    }else{
      console.log(str)
    clearInterval(s);
  }
  }, 1000);
}

//TASK 6

function filterNumbers(arr, maxNumber){
 let completeArray = [];
 arr.filter(function(number){
   if(maxNumber>number){
     completeArray.push(number);
   }
 });
 return completeArray;
}
//TASK 7


//TASK 8

function average(arr){
    const count = arr.length;
    let total = 0;
    arr.map(function(arr){
      total+=arr;
    });
    const averageArr = total/count;
    return averageArr;
  }


//TASK 9

function concatFirstNestedArrays(arr){
  let arrays = arr.reduce(function(a,b){
  return a.concat(b)
  });
  return arrays;
}