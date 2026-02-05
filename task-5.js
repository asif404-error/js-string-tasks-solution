// Capitalize Every first Letter of each word in a String

const sentence = 'i am a student and i am learning javascript.';

const words = sentence.split(' ');
// console.log(words);

for(let i = 0; i < words.length; i++){
    words[i] = words [i][0].toUpperCase() + words[i].slice(1);
}

const capitalLetters = words.join (' ');
console.log(capitalLetters);