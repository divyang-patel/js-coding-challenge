/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = max = salary[0];
    let sum = 0;
    for (let i=0; i<salary.length; i++){
        if( salary[i] < min) {
            min = salary [i];
        }
        if (salary[i] > max) {
            max = salary [i];
        }
        sum = sum + salary[i];
    }
    return (sum-min-max)/(salary.length - 2);
};

console.log (average([4000,3000,1000,2000]));