let chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here
    for (let i = 0; i< firstArray.length;i++) {
        newArray.push(firstArray[i]);
        
    }
    for (let i = 0 ; i < secondArray.length; i++){
        newArray.push(secondArray[i]);
    }


    return newArray;
}
console.log(mergeArrays(chunk_one, chunk_two));
console.log (chunk_one.concat(chunk_two));