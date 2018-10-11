$(function () {
	"use strict";
	var barH=$(".upper-bar").innerHeight(),
		winH=$(window).height(),
		navH=$(".navbar").innerHeight();

	$(".slider,.carousel-item").height(winH-barH-navH);
});