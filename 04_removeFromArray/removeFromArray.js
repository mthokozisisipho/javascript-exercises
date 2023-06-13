const removeFromArray = function(myArray) {
    for (let i = 1; i < arguments.length; i++) {
        let argIndex = myArray.indexOf(arguments[i]);
        if (argIndex in myArray) {
            myArray.splice(argIndex, 1);
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
