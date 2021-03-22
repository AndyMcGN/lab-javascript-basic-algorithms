// Iteration 1: Names and Input

const hacker1 = 'Andy';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Cintia';
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name. It has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let upperCaseName = '';

for (let i = 0; i < hacker1.length; i++) {
    const letter = hacker1[i].toUpperCase();
    upperCaseName += letter + ' ';
}
console.log(upperCaseName);

let backwardsName = '';
for (let i = hacker2.length - 1; i >= 0; i--){
     const letter = hacker2[i];
     backwardsName += letter;
}
console.log(backwardsName);

if (hacker1 === hacker2) {
    console.log('What?! You both have the same name?');
} else {
    for (let i = 0; i < hacker1.length; i++) {
    if (hacker1[i] < hacker2[i]) {
        console.log("The driver's name goes first.");
        break;
    } else {
        console.log("Yo, the navigator goes first definitely.");
        break;
    }
}
}

// Bonus 1

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut ullamcorper felis, vel luctus tellus. Etiam et nisi enim. Sed euismod mi eget posuere tincidunt. Nulla facilisi. Cras tincidunt ac dolor a aliquet. Mauris pulvinar justo nec metus commodo tempus id ut nisl. Nullam bibendum, eros ullamcorper mollis porttitor, nunc arcu commodo magna, sed aliquet enim nisl ut ipsum. Nam aliquet in odio a feugiat. Curabitur scelerisque id ante a tristique. Etiam id lorem dolor. Praesent a neque a erat ultricies viverra sit amet non arcu. Duis pulvinar mauris est. Integer id lectus in mauris placerat dapibus. Donec nec turpis vitae nisi volutpat condimentum id sit amet sem. Phasellus dictum dui eget nisl pellentesque pellentesque. Sed pellentesque risus non malesuada luctus. Vivamus vestibulum ex turpis, id dignissim diam ullamcorper sagittis. Sed eget ipsum eget lorem tempus condimentum. Sed at lorem neque. Proin consectetur, nunc eu facilisis condimentum, sem arcu convallis eros, eget dictum magna nunc nec tellus. Integer maximus augue nec fermentum vehicula. Ut aliquam nibh nunc, a finibus purus varius nec. Quisque leo urna, euismod in nisi quis, congue vulputate enim. Suspendisse suscipit sed quam elementum venenatis. Cras fermentum fringilla nunc, et porta dui tempor nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate tincidunt ex, quis tincidunt ipsum gravida eget. Pellentesque risus ipsum, ornare vel hendrerit in, iaculis a urna. Nunc interdum, risus in porttitor tempor, erat orci auctor enim, in volutpat quam ante eu orci. Duis mattis arcu tellus, ut convallis est laoreet sit amet. Suspendisse laoreet est tincidunt elit vehicula condimentum. Integer accumsan nisl sed sem pharetra, sit amet bibendum ex aliquet. Suspendisse rhoncus vulputate sapien vitae dictum. Nullam vestibulum neque a odio finibus, eget ullamcorper felis sodales. Vestibulum tellus risus, faucibus quis elit eu, ullamcorper placerat erat. Fusce ut sollicitudin lectus. Vivamus nec gravida ipsum. In hac habitasse platea dictumst."

let words = 1;

for (let char = 0; char < loremIpsum.length; char++) {
     if (loremIpsum[char] === ' ') {
         words++;
     }
}
console.log(`There are ${words} words.`);


let etCounter = 0;

for (let char = 0; char < loremIpsum.length; char++) {
    let snippet = loremIpsum.slice(char, char + 4);
    if(snippet === ' et ') {
        etCounter++;
    }
}
console.log(`'Et' appear ${etCounter} times.`);


// Bonus 2

let phraseToCheck = "A man, a plan, a canal, Panama!";
let isPalindrome = true;
let noSpaces ='';

for (let i = 0; i < phraseToCheck.length; i++) {
    if ('A' <= phraseToCheck[i] && phraseToCheck[i] <= 'Z' || 'a' <= phraseToCheck[i] && phraseToCheck <= 'z') {
        noSpaces += phraseToCheck[i].toLowerCase();
    }
}
console.log(noSpaces);

for (let i = 0; i < noSpaces.length / 2; i++) {
    if (noSpaces[i] !== noSpaces[noSpaces.length - i - 1]) {
        console.log('Not a palindrome');
        isPalindrome = false;
        break;
    } 
}
if (isPalindrome) {
    console.log('A palindrome!');
}

