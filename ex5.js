		//ori leibovitz 205793896 dvir Agaliyaho 205684798

		function myFunc() {
		  // get value of the first number from text box. 
		  x = document.getElementById("firstNum").value;
		  // get value of the second number from text box.
		  y = document.getElementById("secondNum").value;
		  // define function result. 
		  var result_String = x + " + " + y + " = " + (parseInt(x) + parseInt(y))
		  // show function result at html page.
		  document.getElementById("result").innerHTML = result_String;
		}