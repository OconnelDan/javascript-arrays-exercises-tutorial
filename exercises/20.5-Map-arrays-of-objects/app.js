let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];
let calcularEdad= function( fechadenacimiento ){	
	var hoy = new Date();
	 var cumpleanos = new Date(fechadenacimiento.birthDate);
	var edad = hoy.getFullYear() - cumpleanos.getFullYear();
	var m = hoy.getMonth() - cumpleanos.getMonth();

	if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
	edad--;
	}
	
return edad + " years old";

}


let simplifier = function (person){
	

	return "Hello, my name is " + person.name + " and I am " 
}
console.log(people.map(person => simplifier(person) + calcularEdad(person)));



// "Hello, my name is"  "and I am"  "years old"

// function calcularEdad(fecha) {
//     var hoy = new Date();
//     var cumpleanos = new Date(fecha);
//     var edad = hoy.getFullYear() - cumpleanos.getFullYear();
//     var m = hoy.getMonth() - cumpleanos.getMonth();

//     if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
//         edad--;
//     }

//     return edad;
