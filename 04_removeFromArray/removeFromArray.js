const removeFromArray = function(array, value) {
    let args = Array.from(arguments);
    let result = [];


    for(let i = 0; i < array.length; i++){
        for(let arg = 1; arg < args.length; arg++){
        
            if(array[i] === args[arg]){
                delete array[i];
            }
        }
    }
    result = array.filter(Boolean);
    return result;

};


// Do not edit below this line
module.exports = removeFromArray;
