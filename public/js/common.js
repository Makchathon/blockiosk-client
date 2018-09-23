$(document).ready(function () {
	$("body").on("keydown", function (e) {
		if (e.which == 37) { //left

			var prevStep = $(".step.selected").prev(".step");
			$(".step").removeClass("selected");
			$(prevStep).addClass("selected");
		}
		else if (e.which == 39) { //right
			var nextStep = $(".step.selected").next(".step");
			$(".step").removeClass("selected");
			$(nextStep).addClass("selected");
		}
	});
});