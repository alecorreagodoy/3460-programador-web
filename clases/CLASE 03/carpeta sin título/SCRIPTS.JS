var a = function (mensaje){
	console.log(mensaje)
}
//parametro
a("hola")


var a = function (num){
	var b = num + 2;
}

a("pepe");
a("lalo");
b(3);


//parametros se suman 
/*var a = function (numA, numB,numC){
	var b = numA + numB - numC;
	console.log(b)
	 }
	 */

/*var a = function(distanciaA,distanciaB){
	var b = distanciaA + distanciaB;
}*/

//SCOPE
/*
function foo(a){
	var b = a*2;
	function bar (c){
		console.log(a,b,c)
	}
	bar(b*3)
}
foo(2);*/
//return
/*var result1 = function(numa, numB){
	var res = numa+numB;
	return res
}

var result2 = function(numa, numB){
	var res = numa - numB;
	return res
}

var res1 = result1(2,4)
var res2 = result2(9,3)

if (result1 === result2){
		console.log("ok")

}else {
	console.log("")
}
*/

var MiFuncion = function(nombre){
	var mensaje = "hola" + nombre + " , ";

	return function(numero){
		var mensaje
	}
}







