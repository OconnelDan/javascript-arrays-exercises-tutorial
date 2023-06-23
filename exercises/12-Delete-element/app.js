let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
function deletePerson(name) {
    for( let i =0 ; i < people.length; i++)
    
     return people.filter((persona) => persona !== name );
 
    
}


// let newPeople = people.filter((persona) => persona === 'daniella' || persona ==='juan' || persona ==='emilio' );
// console.log(newPeople);

 console.log(deletePerson('daniella'));
 console.log(deletePerson('juan'));
 console.log(deletePerson('emilio'));
