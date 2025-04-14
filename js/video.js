var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1");

	// Turn off autoplay and looping
    video.autoplay = false;
    video.loop = false;
    console.log("Auto play is set to " + video.autoplay);
    console.log("Loop is set to " + video.loop);

	// Initialize volume display
    updateVolumeInfo();

	// Play Button
    document.querySelector("#play").addEventListener("click", function() {
        video.play();
        updateVolumeInfo();
        console.log("Play Video");
    });

	// Pause Button
    document.querySelector("#pause").addEventListener("click", function() {
        video.pause();
        console.log("Pause Video");
    });

	// Slow Down Button
    document.querySelector("#slower").addEventListener("click", function() {
        video.playbackRate *= 0.9;
		console.log("Slow down video");
        console.log("Speed is " + video.playbackRate.toFixed(5));
    });
    
    // Speed Up Button
    document.querySelector("#faster").addEventListener("click", function() {
        video.playbackRate /= 0.9;
		console.log("Speed up video");
        console.log("Speed is " + video.playbackRate.toFixed(5));
    });
    
    // Skip Ahead Button
    document.querySelector("#skip").addEventListener("click", function() {
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
		console.log("Skip ahead")
        console.log("Video current time is " + video.currentTime.toFixed(2));
    });
    
    // Mute Button
    document.querySelector("#mute").addEventListener("click", function() {
        video.muted = !video.muted;
        this.textContent = video.muted ? "Unmute" : "Mute";
        console.log(video.muted ? "Mute" : "Unmute");
    });
    
    // Volume Slider
    document.querySelector("#slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        updateVolumeInfo();
        console.log("The current value is " + video.volume.toFixed(2));
    });
    
    // Styled Button (Old School)
    document.querySelector("#vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });
    
    // Original Button
    document.querySelector("#orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });
    
    // Function to update volume display
    function updateVolumeInfo() {
        document.getElementById("volume").textContent = Math.round(video.volume * 100) + "%";
    }
});




