"use strict";

//Global Variables
const calBtn = document.getElementsByClassName('btn');
let result = document.getElementById('result');

//resetNo variable will be use after calculating the arithmetic expression we will reset the number so, number will not concate to the result.
let resetNo = false;

//decimalCount variable will help to prevent the occurrence  of multiple decimal point after digit.  
let decimalCount = 0;

//Add Keypress event for user (If user input from keyboard)
document.addEventListener('keypress', perform);

//Add click event to all calculator button
for(let i = 0; i < calBtn.length; i++) {
   calBtn[i].addEventListener('click', perform);
}

function perform() {

	//The value enter by user will store in "userValue"
	let userValue;
	if(event.type === 'keypress') {
		//To prevent browser default behavior because "Enter and space" key fire both the events 
		event.preventDefault();
		
		//If space key is eneterd
		if(event.keyCode === 32)
		userValue = '';
		else
		userValue = event.key;
	} else
		userValue = this.value;

	//If value is numeric
	if(!isNaN(userValue)) {
		if(resetNo === true) {
			result.value = userValue;
			resetNo = false;
		}
		else
			result.value = result.value + userValue;
	
	} else if(userValue === '/' || userValue === '*' || userValue === '+' || userValue === '-' || userValue === '%') {
		
		resetNo = false;
		decimalCount = 0;
		const lastChar = fetchLastCharacter(result.value);

		if(['/','*','+','-','%','.'].includes(lastChar))
			result.value = exceptLastChar(result.value) + userValue;//replace the last arthimetic operator
		else
			result.value = result.value + userValue;
	
	} else if(userValue === '.') {

		if(decimalCount === 0) {

			const lastChar = fetchLastCharacter(result.value);
			if(resetNo === true) {

				result.value = userValue;
				resetNo = false;

			} else if(['/','*','+','-','%'].includes(lastChar)) 
				result.value = result.value + (0 + userValue);
			else
				result.value = result.value + userValue;
		}

		decimalCount++;

	} else if(userValue === 'power') {
		try {
				const expRes   = math.evaluate(result.value);
				result.value = math.pow(expRes,2);
				resetNo      = true;
		} catch (err) {
				result.value = err;
		}
		disableCalcBtn(result.value);	

	} else if(userValue === '=' || userValue === 'Enter') {
		try {
				result.value = math.evaluate(result.value);
				resetNo      = true;
				decimalCount = 0;
		} catch (err) {
				result.value = err;
		}
		disableCalcBtn(result.value);

	} else if(userValue === 'Backspace') {

		const lastChar = fetchLastCharacter(result.value);
		if(lastChar === '.')
			decimalCount = 0;
		if(resetNo === false)
		result.value = exceptLastChar(result.value);

	} else if(userValue === 'clear') {

		if(result.value === 'Overflow' || result.value === 'Infinity' || isNaN(result.value)) {
			for(let i = 0; i < calBtn.length; i++) {
				   calBtn[i].disabled = false;
			}
		}
		result.value = 0;
		decimalCount = 0;
		resetNo = false;
	}
}

function fetchLastCharacter(str) {
    return str.charAt(str.length-1);
}

function exceptLastChar(str) {
	if(str.length-1 === 0)
		return 0;
	else
    return str.substring(0,str.length - 1);
}

function disableCalcBtn(str) {
	if(str === 'Overflow' || str === 'Infinity' || isNaN(str)) {
		for(let i = 0; i < calBtn.length; i++) {
			   calBtn[i].disabled = true;
		}
		document.getElementById('clear').disabled = false;
	}
}
