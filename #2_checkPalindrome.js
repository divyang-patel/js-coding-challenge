function checkPalindrome (str) {
    for (let i=0; i<str.length/2; i++)  {
        if(str[i] !== str[str.length-1-i]){
          return "not a palindrome";
        }
    }
  return "a palindrome;"
}

function checkPalindromeUsingArray (str) {
    // convert string to an array
    const arrayValues = str.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(str == reverseString) {
        console.log('It is a palindrome even if checked with array methods');
    }
    else {
        console.log('It is not a palindrome even if checked with array methods');
    }
  
}

//take input from user
const string = prompt("Enter a String: ");
console.log (`The given string is ${checkPalindrome(string)}`);

checkPalindromeUsingArray(string);
