let myArray = [,23,6,87,43,1,4,6,3,67,8,344345,3,7,5435,63,346,3,456,734,6,34];
    
    function findMax(myArray) {
        let nMasAlto = myArray[0];

        for (let i = 0; i < myArray.length; i++) {
            if ( myArray[i] > nMasAlto)
            nMasAlto = myArray[i];
            
        }
        return nMasAlto;


    
    }

console.log(findMax(myArray));















// function nAlto() {


    
// }

