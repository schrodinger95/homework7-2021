var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.95;
	console.log("The current speed is: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate *= 1.05;
	console.log("The current speed is: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead Video");
	if (video.currentTime + 15 < video.duration) {
		video.currentTime += 15;
	}
	else {
		video.currentTime = 0;
	}
	console.log("The current location is: " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video")
	if (video.muted == true) {
		video.muted = false;
		this.innerHTML = "Mute";
	}
	else {
		video.muted = true;
		this.innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Slide Video Volume");
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
	console.log("The current volume: " + this.value);
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Add Old School Class");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove Old School Class");
	video.classList.remove("oldSchool");
});
