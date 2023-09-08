let loglined = false
let loglines = 0
// var audio = $("audio");
// var audio2 = document.getElementById("audio");
// let dzwiek = true;

// $.each(audio, function() {
//     this.controls = false;
//     this.volume = 0.2;
// });

// document.onkeyup = function(data) {
//     if (data.which == 32) {
//         if (dzwiek == true) {
//             audio2.pause();
//             dzwiek = false;
//         } else {
//             audio2.play();
//             dzwiek = true;
//         }
//     }
// };

window.addEventListener('message', function(event) {
	if (event.data.eventName === 'onLogLine') {
		loglines += 1
		if (loglines > 80) {
			if (loglined == false) {
				loglined = true
				$('.blackscreen').fadeIn(2500)
				setTimeout(() => {
					$.post('https://gangrp_loading/shuwdownloadingscreen', JSON.stringify({}))
				}, 2750);
			}
		}
	}
});