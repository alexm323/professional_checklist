/**
 * ARRAY WORK
 * Please research the following methods:
 * 
___________________________________________________________
map
creates a new array populated with the results of calling a function on every element in the calling array 

syntax 
map((element, index, array) => { ... } )

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

when to not use map:
1. You are not using the returned array, use forEach() or for...of instead 
2. youre not returning a value from the callback 


___________________________________________________________
___________________________________________________________
reduce

executes a reducer function that you provide on each element of the array and the return value is a single output value based on that reducer 

Syntax 

reduce((accumulator, currentValue, index, array) => { ... }, initialValue)


const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

___________________________________________________________
___________________________________________________________
filter

Syntax
filter((element, index, array) => { ... } )

creates a new array with all elements that pass the test implemented by the provided function 

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

______________________________________________________________________________________________________________________

forEach

executes a provided function once for each array element\
syntax

forEach((element, index, array) => { ... } )
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"


does not mutate the original array and always returns undefined 
cannot be chained and should be used to execute side effects at the end of a chain 

forEach does not wait for promises 

______________________________________________________________________________________________________________________

sort

sorts the elements of an array in place (not putting the values into an outside data structures to avoid taking extra space)
and returns the sorted array 
the sort is ascending and is made from converting the elements into strings and comparing their UTF-16 code unit values 


const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]


can be given a comparator function to evaluate differently 
let stringArray = ['Blue', 'Humpback', 'Beluga'];
let numericStringArray = ['80', '9', '700'];
let numberArray = [40, 1, 5, 200];
let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // [700, 80, 9]
numericStringArray.sort(compareNumbers); // [9, 80, 700]

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, 700, 80, 9]
mixedNumericArray.sort(compareNumbers); // [1, 5, 9, 40, 80, 200, 700]


______________________________________________________________________________________________________________________

slice
returns a shallow copy of a portion of an array selected from start to end (end not included)

syntax 
slice(start, end)

start - the first index to start at 
end - the last index but does not include this one 

returns a new array containing the extracted elements 

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]
______________________________________________________________________________________________________________________

pop

pop()

removes and returns the last element of the array 
changes the length of the array
returns undefined if the array is empty 

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
______________________________________________________________________________________________________________________

shift

removes and returns the first element of an array 
this changes the length of an array

syntax 
shift()

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
______________________________________________________________________________________________________________________

push

adds one or more elements to the end of an array and returns the new length of the array 

syntax
push(element0, element1, ... , elementN)


const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
______________________________________________________________________________________________________________________

unshift

adds one or more elements to the beginning of an array and returns the new length of the array 

syntax 
unshift(element0, element1, ... , elementN)

const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

______________________________________________________________________________________________________________________

includes
determines if an array includes a certain value among its entries 
returns either true or false 

syntax 
includes(searchElement, fromIndex(optional))

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false


______________________________________________________________________________________________________________________

indexOf

syntax 
indexOf(searchElement, fromIndex)

returns the first index at which the searched value can be found 
if it is not present it will return negative 1 

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
______________________________________________________________________________________________________________________

every

returns true or false if an array passes a provided function 

syntax 
every((element, index, array) => { ... } )

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

______________________________________________________________________________________________________________________

reverse

reverses an array in place 

syntax 
reverse()

returns the reversed array

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]



___________________________________________________________


Give a short description of what the method does, how it works, it's time complexity (if appropriate), and give three examples of it in action!

Questions to practice:

One:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

Two:
You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

Three:
Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
Example:
[ 6, 2, 1, 8, 10 ] => 16
[ 1, 1, 11, 2, 3 ] => 6

5 codewars tagged as arrays (minimum)

Add what you learn to an interview deck on Anki!
 * 


STRING WORK 
Please research the following string methods:
___________________________________________________________
charAt

Syntax: charAt(index)
finds the character at the given index. defaults to 0 index and will return the first character if no index is specified.
returns whatever character is at that index in a string. 
if no character is at that index it returns an empty string

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"



___________________________________________________________


___________________________________________________________
charCodeAt

Syntax
charCodeAt(index)
finds the character code for the character at the given index in a string 

returns a number that is represening the UTF-16 code unit value 
if the index does not exist (out of range) then it returns NaN 


___________________________________________________________
___________________________________________________________
concat
Syntax 
concat(string, string2, ...)

accepts any number of strings and returns a new string that contains the combined text of all the strings provided 
if the arguments provided are not strings, they are converted to strings before being added to 

the + operator should almost always be used when trying to concatenate strings 
___________________________________________________________

___________________________________________________________
includes

Syntax(searchString, position(optional))
searchString - the string we are looking for 
position 

makes a CASE SENSITIVE search to see if one string can be found inside another string 

returns true or false 

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"

returns true if the string is found anywhere after the starting position which defaults to zero 
false otherwise 

___________________________________________________________
___________________________________________________________

indexOf

Syntax

indexOf(searchValue)
indexOf(searchValue, fromIndex)

searchValue - The string to be searched for 
fromIndex (optional) - where to start the search , offsets the number returned based off of where you start. if you start at a negative index it gets added on 

returns the index of where the first time the searchvalue appears

'hello world'.indexOf('') // returns 0
'hello world'.indexOf('', 0) // returns 0
'hello world'.indexOf('', 3) // returns 3
'hello world'.indexOf('', 8) // returns 8

if you try to start at a position greater than the length of the string you only get the length of the string back 

to check for occurences correctly use this 

'Blue Whale'.indexOf('Blue') !== -1  // true
'Blue Whale'.indexOf('Bloe') !== -1  // false

how to count occurences of a string with indexOf 

const str = 'To be, or not to be, that is the question.'
let count = 0
let position = str.indexOf('e')

while (position !== -1) {
  count++
  position = str.indexOf('e', position + 1)
}

console.log(count)  // displays 4




___________________________________________________________
___________________________________________________________
match
retrieves the result of matching a string against a regular expression 

syntax
match(regexp)
regexp - a regular expression object

if a non regexp is provided then it is converted using new RegExp(regexp)

if you use the match method with no argument given then it just returns an array with an empty string aka [""]

returns an array based on whether the -g flag is present or absent. 
returns null if no matches are found 


example 
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// expected output: Array ["T", "I"]

examples with global flag and ignoring case matching 

const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const regexp = /[A-E]/gi;
const matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

___________________________________________________________
___________________________________________________________
repeat

constructs and returns a new string which has the concatenated number of copies of the strings on which it was called 

syntax 

repeat(count)

count is any number between zero and infinity 
will throw an error otherwise that states invalid count value 

___________________________________________________________
___________________________________________________________
replace
Lets you use a string or regex to replace the string or pattern indicated in the first argument with the 2nd argument 

replace(regexp, newSubstr)
replace(regexp, replacerFunction)

replace(substr, newSubstr)
replace(substr, replacerFunction)


regexp - a regular expression object, the match or matches are replaced with 
substr - the substring that we are going to replace with the new SubString . only the FIRST occurence will be replaced 
newSubstr - A string that replaces the substring specified by the regexp or substr. There are special patterns that are supported
If newSubstr is an empty string , then the regexp or substr specified are removed instead 

replaceFunction - a function to create a new substring to replace the matches specified by the regexp or substr 

returns a NEW STRING does not alter the first string 

special patterns:
Pattern	Inserts
$$	Inserts a "$".
$&	Inserts the matched substring.
$`	Inserts the portion of the string that precedes the matched substring.
$'	Inserts the portion of the string that follows the matched substring.
$n	Where n is a positive integer less than 100, inserts the nth parenthesized submatch string, provided the first argument was a RegExp object. Note that this is 1-indexed. If a group n is not present (e.g., if group is 3), it will be replaced as a literal (e.g., $3).
$<Name>	Where Name is a capturing group name. If the group is not in the match, or not in the regular expression, or if a string was passed as the first argument to replace instead of a regular expression, this resolves to a literal (e.g., $<Name>). Only available in browser versions supporting named capturing groups.


___________________________________________________________

___________________________________________________________
search

syntax 
search(regexp)

finds the first index value to fit the regexp 
returns an index value if found and -1 if not found 

should use when you want to know whether a pattern is found and ALSO its index within a string 

let str = "hey JudE"
let re = /[A-Z]/g
let reDot = /[.]/g
console.log(str.search(re))    // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)) // returns -1 cannot find '.' dot punctuation
___________________________________________________________
___________________________________________________________
slice

Extracts a section of string and returns it as a new string, does not modify the original string 

Syntax
slice(beginIndex)
slice(beginIndex, endIndex)

if the beginIndex is greater than the stringlength then an empty string is returned 
you can go negative to slice from the back forward
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(-4));
// expected output: "dog."

endIndex - optional and tells it what index to go to not including the index argument so if its the one below it only slice from 4 to 18 

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

return value is a new string , does not modify the original 
___________________________________________________________
___________________________________________________________

split
syntax 


split()
split(separator)
split(separator, limit)

separator - the pattern that describes where each split should occur. \\ this can be either a simple string or even a regular expression 
limit(optional)- can set a limit of how many items to include in the array and will do nothing with the remaining text once that limit is reached
if the limit is not reached then the array might contain fewer entries, 
if the limit is 0 then you get back an empty array [] 


creates an array of substrings based on a pattern that is provided as the first param 
searches for a pattern that is provided as the first argument 

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]


___________________________________________________________
___________________________________________________________
substr
syntax 
substr(start)
substr(start, length)

returns a new string from the index of the first character specified and can optionally have a second param to indicate the number of characters to extract 
can also use a negative index to start from the end (there is some weirdness with this regarding microsoft JS)
const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"
___________________________________________________________
___________________________________________________________
toLowerCase

syntax
toLowerCase()

returns the value of the string converted into lower case , does NOT modify the original string 

const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toLowerCase());
// expected output: "the quick brown fox jumps over the lazy dog."

___________________________________________________________
___________________________________________________________
toUpperCase

syntax 
toUpperCase()

const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

___________________________________________________________
___________________________________________________________
trim

syntax

trim()

removes white space from both ends of a string 

returns a new string with the whitespace trimmed 
you can also use 
trimStart() or trimEnd() to trim just one side 

const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";


___________________________________________________________

Give a short description of what the method does, how it works, it's time complexity (if appropriate), and give three examples of it in action!

5 Codewars tagged as strings (minimum) 

 */