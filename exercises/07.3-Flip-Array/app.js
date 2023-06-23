let arr = [45,67,87,23,5,32,60];

//Your code here.
// let incioFinalArr= arr.length-1;
// let stopArr= 0;

// for ( let i =incioFinalArr; i>=stopArr; i--){
    
//     let newArr = arr;
   

//     console.log(newArr[i]);


// }

let flippedArray = []
for(let i = arr.length - 1; i>= 0;i--){
    let item = arr[i];
    flippedArray.push(item);
}
console.log(flippedArray)