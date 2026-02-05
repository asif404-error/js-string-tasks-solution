/*
Task-4: If a given string has either x, replace x by y. if the given string has X, replace it by Y.

Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
*/

const text1 = "six";
const text2 = "BOX";
const text3 = "Xbox";
const text4 = "YELLOW";

// console.log("six".includes('x'));
// console.log("BOX".includes('X'));

if (text1.includes('x')){
    console.log('x-exist');
    let newText1 = text1.replace('x','y');
    console.log(newText1);
}

if(text2.includes('X')){
    console.log('X-exist');
    let newText2 = text2.replace('X','Y');
    console.log(newText2);
}

if(text3.includes('X') && text1.includes('x')){ //You can use OR condition instead or AND
    console.log('X-exist', 'x-exist');
    let newText3 = text3.replace('X', 'Y').replace('x', 'y');
    console.log(newText3);
}

if(text4.includes('Y')){
    console.log('Y-exist');
    let newText4 = text4.replace('Y', 'X');
    console.log(newText4);
}