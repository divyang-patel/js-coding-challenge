/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let manhattanIndices = new Map();
    let currentMin = Infinity;
    let manhattanDistance;
    points.forEach((point, i) => {
        if (x === point[0] || y === point[1]){
            manhattanDistance = Math.abs(x - point[0]) + Math.abs(y - point[1]);
            if (manhattanDistance < currentMin) {
                manhattanIndices.clear();
                manhattanIndices.set(i,manhattanDistance);
                currentMin = manhattanDistance;
            } else if (manhattanDistance === currentMin) {
                manhattanIndices.set(i,manhattanDistance);
            };
        };
    });
    for([index, distance] of manhattanIndices){
        if(distance === currentMin){
            return index;
        }
    }
    return -1;
};

console.log(nearestValidPoint(3, 4, [[1,2],[3,1],[2,4],[2,3],[4,4]]));