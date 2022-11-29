




alert('Click "Buy a plushtoy" to buy something pretty for your wife')
document.getElementById("button3").onclick = function() {
    document.getElementById("mario").style.visibility = "visible";
}
document.getElementById("mario").onclick = function() {
    document.getElementById("butwhichone").style.visibility = "visible";
}
document.getElementById("butwhichone").onclick = function() {
    document.getElementById("button4").style.visibility = "visible";
}
document.getElementById("button4").onclick = function() {
    document.getElementById("buy").style.visibility = "visible";
}
document.getElementById("buymario").onclick = function() {
    document.getElementById("wrong").style.visibility = "visible";
}
document.getElementById("buypikachu").onclick = function() {
    document.getElementById("wrong1").style.visibility = "visible";
}
document.getElementById("buyhellokitty").onclick = function() {
    document.getElementById("datetime").style.visibility = "visible";
}
document.getElementById("datetime").onclick = function() {
    document.getElementById("pay").style.visibility = "visible";
}
document.getElementById("wallet").onclick = function() {
    document.getElementById("money").style.visibility = "visible";
}



