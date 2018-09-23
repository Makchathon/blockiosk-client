

$(document).ready(function () {
	var socket = io.connect(location.protocol + "//" + location.host);

	var scanner = new Instascan.Scanner({ video: document.getElementById('preview'), backgroundScan: true, continuous: true, mirror: false });
	scanner.addListener('scan', function (content) {
		// console.log(content);
		socket.emit("qr");
		swal({
			title: "You checked in!",
			text: "Continue on the store's screen.",
			icon: "success"
		}).then(function (value) {
			location.href = "/control";
		});
	});

	Instascan.Camera.getCameras().then(function (cameras) {
		if (cameras.length > 0) {
			scanner.start(cameras[cameras.length - 1]);
		} else {
			console.error('No cameras found.');
		}
	}).catch(function (e) {
		console.error(e);
	});

	$("body").on("click", "#start", function () {


		if (screenfull.enabled) {
			screenfull.request();
		}

		$(".step").removeClass("selected");
		$("#main").addClass("selected");
	});

	$("body").on("click", "#toScan", function () {
		$(".step").removeClass("selected");
		$("#scan").addClass("selected");
	});
});

