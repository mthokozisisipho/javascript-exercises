const sumAll = function(start, end) {
    
    if (typeof(start) != "number" || typeof(end) != "number" ||
        start < 0 || end < 0) return "ERROR";

    let sum = 0;

    if (start < end) {
        for (let i = start; i <= end; i++) {
            sum += i;
        }
    }
    else if (start > end) {
        for (let i = start; i >= 1; i--) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
