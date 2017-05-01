	var writeToUs = document.querySelector(".write-to-us");
	var popup = document.querySelector(".modal-content");
	var modalContentClose = document.querySelector(".modal-content .modal-content-close");
	var modalOverlay = document.querySelector(".modal-overlay");
	var map = document.querySelector(".map-mini");
	var modalContentMap = document.querySelector(".modal-content-map");
	var mapClose = document.querySelector(".modal-content-close");
	var buy = document.querySelector(".buy");
	var addGoods = document.querySelector(".add-goods");
	var addGoodsClose = document.querySelector(".add-goods .modal-content-close");


writeToUs.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	modalOverlay.classList.add("modal-overlay-show");
});
modalContentClose.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	modalOverlay.classList.remove("modal-overlay-show");
});
map.addEventListener("click", function(event) {
	event.preventDefault();
	modalContentMap.classList.add("modal-content-map-show");
	modalOverlay.classList.add("modal-overlay-show");
});
mapClose.addEventListener("click", function(event) {
	event.preventDefault();
	modalContentMap.classList.remove("modal-content-map-show");
	modalOverlay.classList.remove("modal-overlay-show");
});
buy.addEventListener("click", function(event) {
	event.preventDefault();
	addGoods.classList.add("add-goods-show");
	modalOverlay.classList.add("modal-overlay-show");
});
addGoodsClose.addEventListener("click", function(event) {
	event.preventDefault();
	addGoods.classList.remove("add-goods-show");
	modalOverlay.classList.remove("modal-overlay-show");
});