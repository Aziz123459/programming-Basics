// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];
for(i=0;i<=arr1.length-1;i++){//loop to read arr1

    console.log(arr1[i]);//  print the arr1 
}



var sum=0   //variable sum start with a 0
for(i=0;i<=arr2.length-1;i++){//loop to read arr2
    sum=sum+arr2[i]//sum formul
    console.log(sum);//  print the arr1 
    console.log([i]);//  print the arr1 
}




for(i=0;i<=arr3.length-1;i++){//loop to read arr3
    if(arr3[i]>5){//condition print just the numbers gearter than 5
    console.log(arr3[i]);//  print the nubers grater than 5 
} 
else{
    console.log("no dice")//  print the numbers smaller than 5 
}
}