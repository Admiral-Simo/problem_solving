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
