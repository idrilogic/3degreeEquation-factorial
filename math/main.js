function fact() {
	var n = document.getElementById("inputFact").value;
	var result = document.getElementById("result");

	result.innerHTML = factorial(n);
	document.getElementById("inputFact").value = " ";
}

function factorial(n) {
	if (n <= 1) {
		return 1;
	}

	else {
		return n * factorial(n - 1);
	}
}


function apply(){
	var a, b, c, ma, mb, mc, delta, deltaR, x1, x2, result;
	a = document.getElementById("a").value;
	b = document.getElementById("b").value;
	c = document.getElementById("c").value;
	

	ma = document.getElementById("ma").innerText = a;
	mb = document.getElementById("mb").innerText = b;
	mc = document.getElementById("mc").innerText = c;


	result = document.getElementById("out");
	result2 = document.getElementById("out2");
	deltaR = document.getElementById("deltaR");

	delta = (b * b) - (4 * a * c);
	deltaR.innerText = delta;

	if (delta >= 0) {
		x1 = (-b - Math.sqrt(delta)) / (2 * a);
		x2 = (-b + Math.sqrt(delta)) / (2 * a);
	}
	result.innerText = x1;
	result2.innerText = x2;


	if (delta < 0) {
		alert("This equation has no solution, we could solve it in the range of complex numbers !!")
	}
	result.innerText = x1;
	result2.innerText = x2;

}

function remove() {
	document.getElementById("a").value = "";
	document.getElementById("b").value = "";
	document.getElementById("c").value = "";
}