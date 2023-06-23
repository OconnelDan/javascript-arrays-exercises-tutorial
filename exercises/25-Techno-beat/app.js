// // Add your code here
// function lyricsGenerator(params) {
//     let music="";
//     for (let i = 0; i < params.length; i++) {
//         let tono = " ";
//         let tonoDOs= "";
//         let Break= "";
//         if (params[i] === 1 ) { 
//           tono = ' Drop the base ';
          
        
//          } 
//           if (params[i] === 0) {
//             tonoDOs=' Boom ';
//           }
//           if (i + 2 < params.length && params[i] === 1 && params[i + 1] === 1 && params[i + 2] === 1) {
//             Break = " !!!Break the base!!! ";
//             i += 2; // Saltar las dos siguientes posiciones
//         }
 
       
            
//         music+= music + tono + tonoDOs + Break;
//     }

// return music;
// }
function lyricsGenerator(params) {
  let music = "";
  let count = 0;

  for (let i = 0; i < params.length; i++) {
      if (params[i] === 1) {
          count++;
          music += "Drop the base ";
      } else if (params[i] === 0) {
          music += "Boom ";
      }

      if (count === 3) {
          music += "!!!Break the base!!! ";
          count = 0;
      }
  }

  return music.trim();
}


// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))