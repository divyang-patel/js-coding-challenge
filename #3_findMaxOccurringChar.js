let ASCII_SIZE = 256;
function getMaxOccurringChar(str){
  
        // Create array to keep the count of individual characters and initialize the array as 0
        let count = new Array(ASCII_SIZE);
        for (let i = 0; i < ASCII_SIZE; i++)
        {
            count[i] = 0;
        }
         
        // Construct character count array from the input string.
        let len = str.length;
        for (let i = 0; i < len; i++)
        {
            count[str[i].charCodeAt(0)] += 1;
        }
        let max = -1;   // Initialize max count
        let result = ' ';   // Initialize result
         
        // Traversing through the string and maintaining the count of each character
        for (let i = 0; i < len; i++)
        {
            if (max < count[str[i].charCodeAt(0)])
            {
                max = count[str[i].charCodeAt(0)];
                result = str[i];
            }
        }
        return result;
}

function getMaxOccurringCharWithRegex(str){
  
  //initialize object to store max occurring letter and count of occurrence
  let max = {letter: [], count: 0};
  //empty array to store unique letters in a string
  let temp = [];
  for (let s of str){
    
    //If letter is counted already, skip to the next one or push in the temp
    if (temp.includes(s)){
      continue;
    }else{
      temp.push(s);
    }
    
    // creating regex 
    const re = new RegExp(s, 'g');

    // matching the pattern
    const count = str.match(re).length;
    
    if (count > max.count){
      max.count = count;
      max.letter = [s];
    }else if(count == max.count){
      max.letter.push(s);
    }
  }
  return max;
}

let string = prompt("Enter a string: ");
console.log (`The max ocurring char in a string is '${getMaxOccurringChar(string)}'`)

let maxCountChar = getMaxOccurringCharWithRegex(string);
console.log (`The max ocurring char(s) in a string when checked with regex is '${maxCountChar.letter}' which occurs ${maxCountChar.count} times`)