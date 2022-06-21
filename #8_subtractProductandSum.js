/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const stringNum = n.toString();
    let sum = 0, product = 1;
    for (digit of stringNum){
        sum = sum + Number(digit);
        product = product * Number(digit);
    }

    return (product - sum);
};

console.log (subtractProductAndSum(234));