//"hello" "Dojo"
function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');



//"hello" "result is" 15
function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);



//"num is"3   "result is"18
function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);


//15 10 10 15
var num = 15;
console.log(num);
function logAndReturn(num){
    console.log(num);   
    return num;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);


//15 10 20 15 
var num = 15;
console.log(num);
function timesTwo(num){
    console.log(num);   
    return num*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);


//"num is"3 "num is"5  "result is" 16 
function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);



//  5  8
function sumNums(num1, num2) {  
    return num1+num2;
}
console.log(sumNums(2,3))
console.log(sumNums(3,5))



//2  5  3  8
function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
}
console.log(printSumNums(2,3))
console.log(printSumNums(3,5))



//"sum is"5 "sum is"8 "result is"13
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);




//"sum is" 5  "sum is"3   "sum is"6   "sum is"3   "sum is"5  "sum is"8
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);