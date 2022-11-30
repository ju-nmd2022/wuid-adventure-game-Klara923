

//let flower = document.getElementById("flower.png")
//let money = document.getElementById("money.png")
//let bush = document.getElementById("bush.png")
//let wallet = document.getElementById("wallet.png")


//let collectwallet = false;
//let collectflower = false;

//if (collectflower == true) {
    //flower.style.display = "block";
    //bush.style.display = "block";

//}
//if (collectflower == false) {
    //flower.style.display = "none";
    //bush.style.display = "block";

//}
//if (collectwallet == true) {
    //flower.style.display = "block";

//}
//if (collectwallet == false) {
   // flower.style.display = "none";

//}

//bush.addEventListener("click", function(){
    //collectflower = true;
    //document.getElementById("flower").style.display = "block";
//}); 
let myCoinflip = Math.floor(Math.random() );

    console.log (myCoinflip)
   
   if (myCoinflip == 0) {
    alert("Are you ready?");
   } else if (myCoinflip == 1) {
    alert("Let's start a game!");
}
    

document.getElementById("bush").onclick = function() {
    document.getElementById("flower").style.visibility = "visible";
}



let myMath = Math.floor(Math.random() * 4);
let number = document.getElementById("number")
number.innerHTML = myMath;


 

localStorage.number = number.innerHTML








