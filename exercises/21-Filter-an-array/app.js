let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here
let resultingNames = allNames.filter(function(nombre){
    return nombre.startsWith('R');
  
});

console.log(resultingNames);