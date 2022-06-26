/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let negative = 0, zero = 0;
    for (num of nums) {
        if (num === 0){
            return 0;
        } else if (num < 0) {
            negative++;
        }
    }
    return negative%2 === 0 ? 1 : -1; 
};

console.log(arraySign([-1,-2,-3,-4,3,2,1]));
console.log(arraySign([1,5,0,2,-3]));
console.log(arraySign([-1,1,-1,1,-1]));
