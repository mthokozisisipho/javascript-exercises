const removeFromArray = function(myArray) {
    // Iterate through the arguments if there are any
    for (let i = 1; i < arguments.length; i++) {
        /* On each argument find out where it is located in myArray
           And store that index place */
        let argIndex = myArray.indexOf(arguments[i]);

        /* Now that we know where the argument is stored in the array 
           we can get to it and remove it from the array */
        if (argIndex in myArray) {
            myArray.splice(argIndex, 1);
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
