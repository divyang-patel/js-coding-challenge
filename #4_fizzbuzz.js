for (let i = 1; i <= 100; i++){
  let result = i;
  if (i%15 == 0){
    result = 'fizzbuzz';
  } else if (i%3 == 0){
    result = "fizz";
  } else if (i%5 == 0){
    result = "buzz";
  }
  console.log (result);
}