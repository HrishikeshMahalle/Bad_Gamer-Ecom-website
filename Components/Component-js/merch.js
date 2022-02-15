var slider = document.getElementById("myRange")
var output = document.getElementById("demo");
console.log(slider.value)


slider.oninput = function() {
output.innerHTML = this.value;
}