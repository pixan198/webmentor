


function display(){
	const second = 1000,
	minute = second * 60,
	hour = minute * 60,
	day = hour * 24;
let inpdate= new Date(document.getElementById("inpdate").value);

let countDown = new Date(inpdate).getTime();
let now = new Date().getTime(),
	distance = countDown - now;
	if(distance <= 0){
		document.getElementById("lis").style.display="none";
		document.getElementById("err").style.display="block";
	}
	else{
		document.getElementById("lis").style.display="block";
		document.getElementById("err").style.display="none";
	document.getElementById('days').innerText = Math.floor(distance / (day)),
	document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
	document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
	document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
	}
let x = setInterval(display, 1000);
}
