module.exports = (server) => {
	var io = require('socket.io').listen(server);
	io.on('connection', function (socket) {
		socket.emit("welcome");
		socket.on("qr", function () {
			socket.broadcast.emit("qr");
		});
		socket.on("changeBrand", function () {
			socket.broadcast.emit("changeBrand");
		})
	});

	return io;
};
