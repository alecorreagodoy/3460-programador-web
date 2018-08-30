$(document).ready(function(){

var searchStudent = function(name,lastname,list){

	for (var i = 0; i < list.lenght; i++){
		if(list[i].firstname === nombre){
			return [i];
			
			
	}
		    return -1;			 
		}
	
		
};



var studentsList = [
{
	firstname: "juan",
	lastname:"perez",
	dni: 23456789
},
{
	firstname: "ana",
	lastname:"perez",
	dni: 23456789
},
{
	firstname: "luis",
	lastname:"perez",
	dni: 23456789
},
{
	firstname: "alejandro",
	lastname:"perez",
	dni: 23456789
}
]


var button =  $("#enviar")


$("#enviar").click(function(){
	//console.log('hola')
	var name = $("#nombre").val();
	var lastname = $("#apellido");

	searchStudent(name, studentsList)
})

})