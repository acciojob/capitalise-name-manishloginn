//your JS code here. If required.


function uppercase() {
	let field = document.getElementById("fname");
	field.value = field.value.toUpperCase();
}
let field = document.getElementById("fname");
field.addEventListener("blur", uppercase)




