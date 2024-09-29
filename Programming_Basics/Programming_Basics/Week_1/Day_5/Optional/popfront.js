function popfront(arr) {
    var temp = []; 
    var firstElem; 
    var length = arr.length; 

    // Use a for loop to pop each element and store it in temp
    for (var i = 0; i < length - 1; i++) {
        temp.push(arr.pop()); // Pop from arr and push to temp
    }

    
    firstElem = arr.pop();

    // Use another for loop to push elements back from temp to arr 
    for ( i = temp.length - 1; i >= 0; i--) {
        arr.push(temp[i]); 
    }

    return firstElem; 
}

var arr = [5, 93, 22, 4];
console.log(popfront(arr)); 
console.log(arr);               