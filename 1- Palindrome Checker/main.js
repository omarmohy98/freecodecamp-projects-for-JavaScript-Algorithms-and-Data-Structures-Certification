/* 
Palindrome Checker Project
for JavaScript Algorithms and Data Structures Certification 
from https://www.freecodecamp.org/
*/
function palindrome(str) {
    str = str.toLowerCase();
    let strArr = [];
    let NonAlphanumericCharacters = "~`!@#$%^&*) (_-+=}{][|\:;<,>.?/";
    for (let i = 0; i < str.length; i++) {
        if (NonAlphanumericCharacters.indexOf(str[i]) === -1) {
            strArr.push(str[i]);
        }
    }
    return strArr.join("") === strArr.reverse().join("");
}

console.log(palindrome("eye"));
