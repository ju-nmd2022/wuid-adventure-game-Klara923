

alert('Give gifts to your wife')
document.getElementById("kitty").onclick = function() {
    document.getElementById("flower").style.visibility = "visible";
}
document.getElementById("flower").onclick = function() {
    document.getElementById("thankyou").style.visibility = "visible";
}
document.getElementById("thankyou").onclick = function() {
    document.getElementById("luckynumber1").style.visibility = "visible";
}
let myMath = Math.floor(Math.random() * 4);
let number = document.getElementById("number");

const myInput = document.getElementById("frame")

const button = document.getElementById("check")
button.addEventListener ("click", function(){
    console.log (myInput)
   const value  = myInput.value
   if (myInput.value == localStorage.number) {
    alert("Correct!You finished the game! Congratulations!");
   } else if (value == 4) {
    alert("Are you sure?");
   } else {
    alert("Incorrect!");
   }
})






