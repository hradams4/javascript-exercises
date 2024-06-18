// sumAll(1, 4) returns 1 + 2 + 3 + 4

const sumAll = function(startNum, endNum) {
    let numIterations = 0;
    let numsInRange = [];
    let rangeNum = 0; 
    let result = 0;

    if(startNum < endNum){
        numIterations = endNum - startNum;
        rangeNum = startNum;
        result = startNum;
    } else {
        numIterations = startNum - endNum;
        rangeNum = endNum;
        result = endNum;
    }
    
    if(startNum >= 0 && endNum >=0 
        && typeof startNum === "number" && typeof endNum === "number"){
        for(let i = 0; i < numIterations; i++){
            rangeNum++;
            numsInRange.push(rangeNum);
        }

        for(let j = 0; j < numsInRange.length; j++){
            result += numsInRange[j];
        }

        return result; 
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
