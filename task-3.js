// Task-3: Check whether a string contains all the vowels a, e, i, o, u

// const word = "Education";
// const text = "Hello! Universe.";
const messAge = "Education is important.";

let hasA = false;
let hasE = false;
let hasI = false;
let hasO = false;
let hasU = false;

for (let i = 0; i < messAge.length; i++) {
    if (messAge[i] === 'a' || messAge[i] === 'A') {
        hasA = true;
    }
    else if (messAge[i] === 'e' || messAge[i] === 'E') {
        hasE = true;
    }
    else if (messAge[i] === 'i' || messAge[i] === 'I') {
        hasI = true;
    }
    else if (messAge[i] === 'o' || messAge[i] === 'O') {
        hasO = true;
    }
    else if (messAge[i] === 'u' || messAge[i] === 'U') {
        hasU = true;
    }
}

if (hasA && hasE && hasI && hasO && hasU) {
    console.log('YES - Contains all vowels');
}
else {
    console.log('NO - Missing some vowels');
}

/*
you can use this method also but it is more advanced if(['a', 'e', 'i', 'o', 'u'].includes(word[i]))
- This is why i have uses or method
*/