
function howMuchLeftOverCake(numberofpersonnes,pieces){
    var leftovers=pieces%numberofpersonnes
    if(numberofpersonnes>pieces){
        console.log("no enough pieces")//pieces avabality
    }
    else if(pieces-numberofpersonnes==0){
        console.log("there is no leftovers")// if there aren't any leftovers
        console.log("leftovers",leftovers)
    }
    else if(pieces-numberofpersonnes<=2){
        console.log("you have some to share")//if there are 2 pieces of cake or less
        console.log("leftovers",leftovers)
    }
    else if(3<=pieces-numberofpersonnes<=5){
        console.log("you have leftovers to share")//f there are 3 - 5 pieces of cake left over
        console.log("leftovers",leftovers)
    }
    else {
        console.log("hold another party ")//if there are more than 5 pieces of cake left over.
        console.log("leftovers",leftovers)
    }
}
howMuchLeftOverCake(12,5)

