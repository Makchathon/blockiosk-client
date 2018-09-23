$("document").ready(function () {
	var socket = io.connect(location.protocol + "//" + location.host);

	$("body").on("click", "button", function () {
		socket.emit("changeBrand");
	});
});