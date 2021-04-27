// JavaScript source code
let actionCard = document.getElementById("actionCard");

function hideScene1() {
	let scene1 = document.getElementById("scene1");
	scene1.style.visibility = "hidden";
	let body = document.body;
	body.style.background = "none";
	body.style.animation = "swap 6s linear forwards";
	let scene2 = document.getElementById("scene2");
	scene2.style.animation = "show 6s linear forwards";
}

actionCard.onclick = hideScene1;


let carouselWidth = 600; 

let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-image-row");

let imageNum = 0;

function showNextImage() {
	imageNum += 1;
	imageRow.style.left = "-600px";
	checkControls();
}

nextButton.onclick = showNextImage;

function showPrevImage() {
	imageNum -= 1;
	let shift = -1 * carouselWidth * imageNum;
	imageRow.style.left = "0px";
	checkControls();
}
prevButton.onclick = showPrevImage;

let totalImages = document.getElementsByClassName("carousel-image").length;


function checkControls() {

	if (imageNum == 0) {

		prevButton.classList.add("hidden");
	}
	else if (prevButton.classList.contains("hidden")) {

		prevButton.classList.remove("hidden");
		
	}

	if (imageNum == 1) {

		nextButton.classList.add("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {

		nextButton.classList.remove("hidden");
	}
} 

checkControls()


