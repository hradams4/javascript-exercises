const repeatString = function(string, num) {
    let resultString = "";
    if (num >= 0){
        for (let i = 1; i <= num; i++){
            resultString = resultString + string;
        }

        return resultString;
        resultString = "";
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
