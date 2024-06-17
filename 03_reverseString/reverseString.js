

const reverseString = function(string) {
    let reversedString = "";
    let stringArray = string.split("");
    let reversedStringArray = [];

    for(let i = stringArray.length; i >= 0; i--){
        reversedStringArray.push(stringArray[i]);
    }
     
    reversedString = reversedStringArray.join("");

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
