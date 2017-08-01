// counts the amount of notes in the notepad
var noteCounter = 0;

// adds each calculation to the notepad
var addNote = function(textResult) {
        addedNote = '<div id="NoteNo' + noteCounter + '"><label class="checkbox"><input type="checkbox" class="CheckClass" id="CheckNo' + noteCounter + '">  ' + textResult + '</input></label</div>';
        document.getElementById("Notes").innerHTML += addedNote;
        noteCounter++;
};

// Speed converter function
var speedConvert = function() {
	
    var result = 0;
    var conv = "";
    var val = document.getElementById("speed").value;

    if (val === "") {
        val = 0;
    } else if (isNaN(val) === true) {
        alert("Please enter a number!");
        val = 0;
        document.getElementById("speed").value = "";
	} else {
	    
        for (var i = 0; i < document.Speed.from.length; i++) {
            if (document.Speed.from[i].checked) {
	        conv = document.Speed.from[i].value;
		    }
	    }	
		
		if (conv === "Kph") {
            result = val * 1.6;
		} else {
            result = val  / 1.6;
            }
	    
        var text = "";
	
        if(conv === "Kph") {
            textResult = val + " in Mph is " + result + " in Kph.";
        } else {
            textResult = val + " in Kph is " + result + " in Mph.";
	    }
        
        addNote(textResult);
	    document.getElementById("speed").value = "";	
	    document.Speed.result.value = result;
	}
};

// Temperature converter function.

var tempConvert = function() {
	
    var result = 0;
    var conv = "";
    var val = document.getElementById("temp").value;
	
    if (val === "") {
        val = 0;
	} else if (isNaN(val) === true) {
	    alert("Please enter a number!");
	    val = 0;
	    result = 0;
	    document.getElementById("temp").value = "";
    } else {
	    
        for (var i = 0; i < document.Temperature.from.length; i++) {
		    if (document.Temperature.from[i].checked) {
                conv = document.Temperature.from[i].value;
            }
        }	
	
		if (conv === "Fahrenheit") {
            result = (val * 1.8) + 32;
        } else {
            result = (val - 32) / 1.8;
        }
        
	    var text = "";
	    if(conv === "Fahrenheit") {
            textResult = val + " in celcius is " + result + " in fahrenheit.";
	    } else {
            textResult = val + " in fahrenheit is " + result + " in celcius.";
	    }
	
        addNote(textResult);
        document.Temperature.result.value = result;
        document.getElementById("temp").value = "";
	}
};


// Length converter function
var lengthConvert = function() {

    var lengthVal = "";
    var toConvert = document.getElementById("ToConvert").value;
    var convFrom = document.getElementById("From").value;
    var convTo = document.getElementById("To").value;
    
    var convToVal = function (measurement) {
        var convResult = "";
        
		switch (measurement) {
            case "0.001":
            return "millimeters";
            
            case "0.01":
			return "centimeters";
			
            case "1":
			return "meters";
				
			case "1000":
			return "kilometers";
				
			case "0.0254":
			return "inches";
				
			case "0.3048":
			return "feet";
				
			case "0.9144":
			return "yards";
				
			case "1609.344":
			return "miles";
				
			default: 
			return "NA";
		}
	};
    
	var convResult = toString(convToVal(convFrom));
	var result = 0;
	
    if (toConvert === "") {
        result = 0;
    } else if (isNaN(toConvert) === true){
        alert('Please enter a number.');
        result = 0;
	} else {
        result = (toConvert * convFrom) / convTo;
        document.Length.Result.value = result;
        textResult = toConvert + " in " + convToVal(convFrom) + " is " + result + " in " + convToVal(convTo) + ".";
        
        addNote(textResult);
        document.getElementById("ToConvert").value = "";
    }
};


// Mass converter function

var massConvert = function() {
    
    var lengthVal = ""
    var toConvert = document.getElementById("WeightToConvert").value;
    var convFrom = document.getElementById("WeightFrom").value;
    var convTo = document.getElementById("WeightTo").value;
	
    var convToVal = function (measurement) {
        var convResult = "";
		
        switch (measurement) {
		    case "0.001":
			return "milligrams";
				
			case "0.01":
			return "centigrams";
				
			case "1":
			return "grams";
				
			case "1000":
			return "kilograms";
				
			case "28.349523125":
			return "ounces";
				
			case "453.59237":
			return "pounds";
				
			case "6350.29318":
			return "stones";
				
			case "12.7005863600":
			return "quarters";
			
			case "1016.0469088":
			return "tons";
				
			default: 
			return "NA";
				
		}
	};
	
	var convResult = toString(convToVal(convFrom));
	var result = 0;
	
	if (toConvert === "") {
        result = 0;
	} else if (isNaN(toConvert) === true){
		alert('Please enter a number.');
		result = 0;
	} else {
	
	result = (toConvert * convFrom) / convTo;
	document.Weight.Result.value = result;
	
	textResult = toConvert + " in " + convToVal(convFrom) + " is " + result + " in " + convToVal(convTo) + ".";
	
    addNote(textResult);
	document.getElementById("WeightToConvert").value = "";
	}
};




//JQuery
$(document).ready(function() {
	//All forms slide up on load.
	$('.Main').slideUp('fast');

    // Click event that toggles each form up and down. Also assigns a class property
    $('a').click( function () {
    	var $identity = $(this).prop('class');
	    $('#' + $identity).slideToggle("fast");
    });
    
    // Click event on the remove button. This checks every note on the notepad to see if it is ticked. Each ticked note
    // then slides up and dissapears. 
    
    $('#Remove').click(function () {
        $('.CheckClass').each(function () {
	 	    if ($(this).prop('checked') === true) {
	 		    var check = $(this).attr('id');
	 		    var checkToNote = check[7];
	 		    
                if (check.length > 8) {
	 		        for (i = 8; i < check.length; i++) {
	 				checkToNote += check[i];
	 			    }
	 		    }
             
	 		$('#NoteNo' + checkToNote).slideUp('slow');
	 		
	 		};
	 	});
	});

});