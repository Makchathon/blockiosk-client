$(document).ready(function () {
	var socket = io.connect(location.protocol + "//" + location.host);


	var data = {
		mcdonalds: {
			major: [
				{
					name: "Especially for you!"
				},
				{
					name: "Recently ordered"
				},
				{
					name: "Burgers"
				},
				{
					name: "Happy meals"
				},
				{
					name: "Main menu"
				},
				{
					name: "Deserts"
				}
			],
			minor: [
				{
					name: "Big Mac",
					image: "bigmac.png",
					old_price: "3.19",
					new_price: "2.99"
				},
				{
					name: "Hamburger",
					image: "hamburger.png",
					old_price: "0.89",
					new_price: "0.79"
				},
				{
					name: "Grilled Chicken Salad",
					image: "grilled-chicken-salad.png",
					old_price: "3.33",
					new_price: "2.19"
				}
			]
		},
		starbucks: {
			major: [
				{
					name: "Especially for you!"
				},
				{
					name: "Recently ordered"
				},
				{
					name: "Espresso"
				},
				{
					name: "Mocha"
				},
				{
					name: "Hot Chocolate"
				},
				{
					name: "Filter Coffee and Tea"
				},
				{
					name: "Frappuccino - Coffee Blend"
				},
				{
					name: "Frappuccino - Cream Blend"
				},
				{
					name: "Starbucks Reserves"
				}
			],
			minor: [
				{
					name: "Vanilla Spice Latte",
					image: "vanilla-spice-latte.jpg",
					old_price: "3.25",
					new_price: "3.05"
				},
				{
					name: "Caffe Latte",
					image: "caffe-latte.jpg",
					old_price: "2.25",
					new_price: "2.05"
				}
			]
		},
		dominos: {
			major: [
				{
					name: "Especially for you!"
				},
				{
					name: "Recently ordered"
				},
				{
					name: "Classic Pizzas"
				},
				{
					name: "Sumptuous Sides"
				},
				{
					name: "Tasty Chicken and Pork"
				},
				{
					name: "Divine Desserts"
				},
				{
					name: "Thirst Quenchers"
				}
			],
			minor: [
				{
					name: "Pepperoni Passion",
					image: "pepperoni_passion.png",
					old_price: "13.99",
					new_price: "11.99"
				},
				{
					name: "Potato Wedges",
					image: "potato-wedges.jpg",
					old_price: "3.99",
					new_price: "2.99"
				},
				{
					name: "Coleslaw 200g tub",
					image: "coleslaw.jpg",
					old_price: "1.99",
					new_price: "1.29"
				}
			]
		}
	}

	var nowBrand = 0;
	var brandNames = ["mcdonalds", "starbucks", "dominos"];

	$("body").on("click", ".toSelectMenu", function () {
		$(".step").removeClass("selected");
		$("#selectMenu").addClass("selected");
		changeData(brandNames[nowBrand]);

	});

	socket.on("qr", function () {
		$(".step").removeClass("selected");
		$("#where").addClass("selected");
	});



	socket.on("changeBrand", function () {
		nowBrand++;
		if (nowBrand > 2) {
			nowBrand = 0;
		}
		changeData(brandNames[nowBrand]);

	});

	var animationEffect = function () {
		$(".animation:eq(0)").removeClass("animation");
		if ($(".animation").length > 0) {
			setTimeout(animationEffect, 100);
		}
	}

	var majorRenderer = new Maro.listRenderer("#major", $("#major").html());
	var minorRenderer = new Maro.listRenderer("#minor", $("#minor").html());

	var changeData = function (brand) {
		$("body").attr("class", "");
		$("body").addClass(brand);

		
		$(".loading").removeClass("hide");
		$("#minor").addClass("hide");

		console.log(data[brand].major);
		majorRenderer.setRenderData(data[brand].major);
		minorRenderer.setRenderData(data[brand].minor);
		setTimeout(function () {
			animationEffect();
		}, 100);
		setTimeout(function () {
			$(".loading").addClass("hide");
			$("#minor").removeClass("hide");
		}, 2500);
	}

	changeData("mcdonalds");
});