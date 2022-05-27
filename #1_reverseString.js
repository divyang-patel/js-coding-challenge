function reverseString(str) {

    //empty string
    let newString = "";
    for(let i=str.length-1; i>=0; i--){
        newString+=str[i];
    }
    return newString;
}

function reverseStringUsingArray(str) {

    // return a new array of strings
    const arrayStrings = str.split("");
   
    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();
 
    // join all elements of the array into a string
    const joinArray = reverseArray.join("");
    
    // return the reversed string
    return joinArray;
}

//take input from user
const string = prompt("Enter a String: ");

const result = reverseString(string);
console.log(`The reversed string is ${result}`);

result = reverseStringUsingArray(string);
console.log(`The reversed string using array method is ${result}`);

