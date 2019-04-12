class Carousel {
	constructor(element) {
		this.element = element;
		this.leftButton = this.element.querySelector('.left-button');
		this.rightButton = this.element.querySelector('.right-button');
		this.imgs = this.element.querySelectorAll('img');
		this.index = 0;

		//display first image
		this.imgs[0].style.display = 'felx';

    	this.rightButton.addEventListener('click', () => this.scrollRight());
    	this.leftButton.addEventListener('click', () => this.scrollLeft());
	}

	scrollRight() {

		//update index
		if (this.index < this.imgs.length-1) {
			this.index++;
		} else {
			this.index = 0;
		}

		//first hide all imgs
		this.imgs.forEach(img => {
			img.style.display = 'none';
		});

		//display next image
		this.imgs[this.index].style.display = 'flex';
	}

	scrollLeft() {

		//update index
		if (this.index > 0) {
			this.index--;
		} else {
			this.index = this.imgs.length-1;
		}

		//first hide all imgs
		this.imgs.forEach(img => {
			img.style.display = 'none';
		});

		//display previous image
		this.imgs[this.index-1].style.display = 'flex';
	}
}

let carousel = document.querySelectorAll('.carousel');
carousel.forEach(caro => {
	return new Carousel(caro)
});
console.log(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

