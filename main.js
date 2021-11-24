var theCount;
var alarm = document.getElementById("alarm");
var panel = document.getElementById("panel");
var turnOff = document.getElementById("turn-off");
var turnOffHor = document.getElementById("closing");
var detonate = document.getElementById("detonate");
var again = document.getElementById("again");
var panel2 = document.getElementById("panel2");
alarm.volume = 0.5; //volume level

var time = document.getElementById("time");
function showCountDown() {
	time.innerText = time.innerText - 1;
	if (time.innerText == 0) {
		clearInterval(theCount);
		time.classList.add("crono");
		abort.classList.add("hide");
        no.classList.add("hide");
        again.classList.add("hide");
        
		
        detonate.classList.add("show");
		setTimeout(function () {
			turnOff.classList.add("close");
			turnOffHor.classList.add("close");
			reload.classList.add("show");
			alarm.pause();
		}, 1500);
	}
   
}

var cover = document.getElementById("cover");
cover.addEventListener("click", function () {
	if (this.className == "box") this.classList.add("opened");
	else this.classList.remove("opened");
});

var btn = document.getElementById("activate");
activate.addEventListener("click", function () {
	this.classList.add("pushed");
	alarm.load();
	alarm.currentTime = 10.1;
	alarm.play();
	setTimeout(function () {
		panel.classList.add("show");
		theCount = setInterval(showCountDown, 1000);
		alarm.load();
		alarm.play();
	}, 500);
});

var abort = document.getElementById("abort");
abort.addEventListener("click", function () {
	btn.classList.remove("pushed");
	panel.classList.remove("show");
	clearInterval(theCount);
	time.innerText = 9;
	alarm.pause();
	alarm.currentTime = 10;
	alarm.play();
   
});

var no = document.getElementById("no");
no.addEventListener("click", function () {
	btn.classList.remove("pushed");
	panel.classList.remove("show");
	clearInterval(theCount);
	time.innerText = 9;
	alarm.pause();
	alarm.currentTime = 10;
	alarm.play();
    panel2.classList.add("show");
});

var again = document.getElementById("again");
again.addEventListener("click", function () {
	btn.classList.remove("pushed");
	panel2.classList.remove("show");
    no.classList.remove("pushed");
	clearInterval(theCount);
	time.innerText = 9;
	alarm.pause();
	alarm.currentTime = 10;
	alarm.play();
    
    
    btn.classList.add("pushed");
	alarm.load();
	alarm.currentTime = 10.1;
	alarm.play();
	setTimeout(function () {
		panel.classList.add("show");
		theCount = setInterval(showCountDown, 1000);
		alarm.load();
		alarm.play();
	}, 500);
});




var reload = document.getElementById("restart");
reload.addEventListener("click", function () {
    panel.classList.remove("show");
	turnOff.classList.remove("close");
	turnOffHor.classList.remove("close");
	abort.classList.remove("hide");
    no.classList.remove("hide");
    
    
	
    detonate.classList.remove("show");
	cover.classList.remove("opened");
	btn.classList.remove("pushed");
	this.classList.remove("show");
	time.classList.remove("crono");
	time.innerText = 9;
});

setTimeout(function () {
	cover.classList.remove("opened");
}, 100);

var mute = document.getElementById("mute");
mute.addEventListener("click", function () {
	if (this.className == "muted") {
		alarm.muted = false;
		this.classList.remove("muted");
	} else {
		alarm.muted = true;
		this.classList.add("muted");
	}
});
