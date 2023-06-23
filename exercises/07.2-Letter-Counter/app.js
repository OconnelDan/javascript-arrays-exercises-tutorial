let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

    for(let i in par){
        const letras = par[i].toLowerCase();
        console.log(letras);
         if(letras == " ") continue;
        else if(counts[letras] == undefined){
            console.log("Found "+letras+" for the first time")
            counts[letras] = 1;
        } 
        else{
            console.log("Found "+letras+" more than once")
            counts[letras] = counts[letras] + 1;
            
        }
       
    }
    
    console.log(counts);


