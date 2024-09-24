//we need a loop here because we going to repeat an action mulltipul time
//the satrting is 0
//the stop is 6
//we incrementing by 2
//variable miles
var miles = 0;
var candy = 0;

for(miles = 2; miles <= 6; miles += 2) {
    candy += 1;  // Increment candy count
    console.log("After", miles, "miles, he gets", candy, "piece(s) of candy");
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
var speed = 5
for(miles = 2; miles <= 6; miles += 2) {
    if(speed>5.5){
    candy += 1;  // Increment candy count
    console.log("After", miles, "miles, he gets", candy, "piece(s) of candy");
    }
    else{
        console.log("no candy for you , run faster next time");

    }
}
