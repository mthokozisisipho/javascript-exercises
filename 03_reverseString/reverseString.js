const reverseString = function(string) {
    const chars = string.split("");
    let newString = "";
    for (let i = chars.length - 1; i >= 0; i--) {
        newString += chars[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
