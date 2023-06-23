// Code goes here
let matrixArray = [1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1];
 function matrixBuilder(n) {
    let matrixz = [];
    let index = 0; 
   for (let i = 0; i < n; i++) {
    let row= [];
    for (let j = 0; j < n; j++) {
        row.push(matrixArray[index]);
        index = (index + 1) % matrixArray.length;

        
    }
    matrixz.push(row);

   }
   return matrixz;

    }




// do not change anything from this line down
console.log(matrixBuilder(5));