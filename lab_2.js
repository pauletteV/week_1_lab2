
var convertedTemp;


function convertTemp(inputTemp, degreeType) {

	//converting a temp to F
	if(degreeType === "C") {
		convertedTemp = ((inputTemp - 32) * 5) / 9;	
	}

	//converting a temp to C
	else if (degreeType === "F") {
		convertedTemp = ((inputTemp * 9) / 5 ) + 32; 
		
	}

	console.log(convertedTemp);
}

//calling the function mulitple times
convertTemp(212, "C");
convertTemp(32, "C");
convertTemp(65, "C");
convertTemp(-40, "F");
