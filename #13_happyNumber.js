/**
 * @param {number} n
 * @return {boolean}
 */
const isHappyAnotherWay = function (n){
        let slowRunner = n;
        let fastRunner = getSumOfDigitSquared(n);
        while (fastRunner != 1 && slowRunner != fastRunner) {
            slowRunner = getSumOfDigitSquared(slowRunner);
            fastRunner = getSumOfDigitSquared(getSumOfDigitSquared(fastRunner));
        }
        return fastRunner === 1;
    }

const isHappy = function (n) {
    const seen = [4, 16, 37, 58, 89, 145, 42, 20];
    while (n !== 1 && !seen.includes(n)){
        if (n < 243)
            seen.push(n);
        n = getSumOfDigitSquared(n);
    }
    return n === 1;
};

const getSumOfDigitSquared = function (n) {
    let nextNum = 0;
    for (digit of n.toString()) {
        nextNum += digit * digit;
    };
    console.log(nextNum);
    return nextNum;
};

console.log(isHappy(7));
console.log(isHappyAnotherWay(116));