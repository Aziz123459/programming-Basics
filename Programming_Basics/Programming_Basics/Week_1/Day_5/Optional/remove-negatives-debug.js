// Debug the following code that removes negative values from an array
//we dont' need var 
function removeNegatives(arr) {
    for(var i=0; i<arr.length; i++) {
        //we need to remove the negtives, 0 is not a negative so i change it to "<"
        if(arr[i] < 0) {
            //the variable we retun does not match the variable we diclaire
            arr[i] = arr.pop();
            i--

            
        }
    }
    //the variable we retun does not match the variable we diclaire
    return arr;
}

var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
console.log(result);