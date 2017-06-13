// Создает метку и добавляет ее на карту
var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.64, 55.76));
placemark.name = "Имя метки";
placemark.description = "Описание метки";
map.addOverlay(placemark);

// Открывает балун
placemark.openBalloon();
var btn = document.querySelector(".btn_modal");
var modal = document.querySelector(".modal");
var off = document.querySelector(".close");
var slide1 = document.querySelector("#slide1");
var slide2 = document.getElementById("#slide2");
var slide3 = document.getElementById("#slide3");
var slide10 = document.getElementById("#slide10");
var slide20 = document.getElementById("#slide20");
var slide30 = document.getElementById("#slide30");
var sliders = document.querySelector(".sliders");
var slider = document.querySelector(".slider");


btn.addEventListener("click", function (){
	modal.classList.toggle("visible");
});

off.addEventListener("click", function (){
	modal.classList.remove("visible");
});

slide10.addEventListener("checked", function (){
	sliders.classList.remove("slider");
	sliders.classList.add("slide1");
});

slide20.addEventListener("checked", function (){
	sliders.classList.remove("slider");
	sliders.classList.add("slide2");
});

slide30.addEventListener("checked", function (){
	sliders.classList.remove("slider");
	sliders.classList.add("slide3");
});
console.log ("hi")
