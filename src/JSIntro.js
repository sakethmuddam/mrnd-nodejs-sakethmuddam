
exports.Sum = function (num1, num2) {
    var i = 0
    i = Number(num1)+Number(num2)
    return i
}

exports.SumOfArray = function (arrayOfNums) {
    var i = 0
    var sum = 0;
    for(i=0;i<arrayOfNums.length;i++)
    {
        sum = sum + Number(arrayOfNums[i])
    }
    return sum
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function (arrayOfNums) {
    var length = arrayOfNums.length;
    var newarray = []
    var i = 0
    var sum = 0;
    for(i=0;i<length;i++)
    {
        if(newarray.indexOf((arrayOfNums[i])) == -1)
            newarray.push(arrayOfNums[i])
    }
    for(i=0;i<newarray.length;i++)
    {
        sum = sum + Number(newarray[i]);
    }
    return sum
}

exports.ReverseString = function(str){
    var s = ""
    var i = 0
    for(i=str.length-1;i>=0;i--)
    {
        s+=str[i]
    }
    return s
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){

    var s = []
    var i = 0
    for (i = arrayOfStrings.length - 1; i >= 0; i--) {
        s.push(arrayOfStrings[i])
    }
    return s
}