const previousBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const imageContainer = document.querySelector(".images");

let counter = 0;

previousBtn.addEventListener("click", () => {
	//animation
	imageContainer.animate([{ opacity: 0.1 }, { opacity: 1.0 }], {
		duration: 1000,
		fill: "forwards",
	});

	if (counter === 0) {
		counter = 8;
	}
	counter--;
	imageContainer.style.backgroundImage = `url(images/img-${counter}.jpg)`;
});

nextBtn.addEventListener("click", () => {
	//animation
	imageContainer.animate([{ opacity: 0.1 }, { opacity: 1.0 }], {
		duration: 1000,
		fill: "forwards",
	});

	if (counter === 7) {
		counter = -1;
	}
	counter++;

	imageContainer.style.backgroundImage = `url(images/img-${counter}.jpg)`;
});
