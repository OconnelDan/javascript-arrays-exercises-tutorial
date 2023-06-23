let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let esWiki = function (i){
 
    if (i === 1) {
        return 'wiki';
        
    } else
    return 'woko';
          
        
}


// console.log(esWiki);

console.log(theBools.map(esWiki));