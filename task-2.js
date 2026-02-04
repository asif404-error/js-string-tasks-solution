//Task-2: Count how many times a string has the letter a or A

const address = "Andar killa bAndorban gohin Aronne jekhane bAgh mamA thAke.";

// console.log(address.length);

let countLower = 0;
let countUpper = 0;

//>>>Using for Loop<<<\\
/*
for (let i = 0; i <address.length; i++){
    if(address[i] === 'a'){
        countLower++;
    }
    else if(address[i] === 'A'){
        countUpper++;
    }
}
*/

//>>>Using while Loop<<<\\

let i = 0;
 while (i < address.length){
    if(address[i] === 'a'){
        countLower++;
    }
    else if(address[i] === 'A'){
        countUpper++;
    }
    i++;
 }

console.log('a =', countLower);
console.log('A =', countUpper);