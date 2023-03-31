// Exercise 1
// Write a regular expression that matches a string containing only letters, numbers, and underscores.

let regex = /[\w\d]+/;

console.log("somet______hing".match(regex)[0]);

// Exercise 2
// Write a regular expression that matches a string containing a valid email address.

let regex1 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

console.log("admiralsimo16@protonmail.co".match(regex1)[0]);

// Exercise 3
// Write a regular expression that matches a string containing a valid URL.

// http://localhost:8000/

let regex2 = /(http|https):\/\/(www\.)?[\w-]*\.[\w]{2,4}/;

console.log("http://localhost.com".match(regex2)[0]);

// Exercise 4
// Write a regular expression that matches a string containing a valid phone number with an optional country code.
// The phone number should be in the format (123) 456-7890 or 123-456-7890.

let regex3 = /^(\(\d{3}\)\s|\d{3}-)?\d{3}-\d{4}$/;
console.log("(123) 456-7890".match(regex3)[0]);
console.log("123-456-7890".match(regex3)[0]);

// Exercise 5
// Write a regular expression that matches a string containing a valid date in the format mm/dd/yyyy.

let regex4 = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
console.log("12/23/2009".match(regex4)[0]);
console.log("02/23/2009".match(regex4)[0]);

let regex5 = /(?<=The value is )./i;
console.log("The value is Dh 5000".match(regex5)[0]);

let regex6 = /.*(?=The value is)/i;
console.log("Dh 5000 The value is".match(regex6)[0]);

// Match any letter that is immediately preceded by the letter "c".
// String: "abcdecedf"

let regex7 = /(?<=c)./g;
console.log("abcdecedf".match(regex7)[0]);

// Match any number that is immediately preceded by the letter "x" or "y".
// String: "x123y456z789"

// difference between * and +

let regex8 = /(?<=(x|y))\d*/g;
console.log("x123y456z789".match(regex8)[0]);

// Match any whitespace character that is immediately preceded by a word character.
// String: "foo bar\tbaz"

let regex9 = /(?<=\w)\s/g;
console.log("foo bar\tbaz".match(regex9)[0]);

let regex10 = /(?<=\^)\d*/g;
console.log("(2x+1)^200".match(regex10)[0]);

// let regex11 = /(?<=\()[\w\d]+(?=\))/
let regex11 = /(?<=\().+(?=\))/;
console.log("(2x+1)^200".match(regex11)[0]);

let aRegex = /[-]?\d+(?=\w)/;
console.log("2x+1".match(aRegex)[0]);

let bRegex = /(?<=[a-z]).+/;
console.log("2x+1".match(bRegex)[0]);
