

$(document).ready(function () {
	var socket = io.connect(location.protocol + "//" + location.host);





	var scanner = new Instascan.Scanner({ video: document.getElementById('preview'), backgroundScan: true, continuous: true, mirror: false });
	scanner.addListener('scan', function (content) {
		// console.log(content);
		swal({
			title: "You checked in!",
			text: "Continue on the store's screen.",
			icon: "success"
		}).then(function (value) {
			// location.href = "/maps";
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
});

