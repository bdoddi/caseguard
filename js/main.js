// Define an array of strings to be displayed and erased
const textArray = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot']

// Initialize variables
let typeJsText = document.querySelector('.animatedText')
let stringIndex = 0 // Index of the current string in the array
let charIndex = 0 // Index of the current character in the current string
let isTyping = true // Whether we are currently typing or erasing

function typeJs() {
  if (stringIndex < textArray.length) {
    // Check if there are more strings to display or erase
    const currentString = textArray[stringIndex]

    if (isTyping) {
      // Typing animation
      if (charIndex < currentString.length) {
        typeJsText.innerHTML += currentString.charAt(charIndex)
        charIndex++
      } else {
        isTyping = false // Switch to erasing mode
      }
    } else {
      // Erasing animation
      if (charIndex > 0) {
        typeJsText.innerHTML = currentString.substring(0, charIndex - 1)
        charIndex--
      } else {
        isTyping = true // Switch back to typing mode
        stringIndex++ // Move to the next string

        if (stringIndex >= textArray.length) {
          stringIndex = 0 // Reset to the beginning of the array
        }

        charIndex = 0 // Reset character index
        typeJsText.innerHTML = '' // Clear the content for the new string
      }
    }
  }
}

// Set an interval to call the typeJs function
setInterval(typeJs, 100) // You can adjust the animation speed as needed

const carouselContainer = document.querySelector(".carousel-container");
let carouselContainerLen = carouselContainer.length
console.log({carouselContainerLen});
const carouselControlsContainer = document.querySelector("carousel-controls");
const carouselControls = ["previous", "next"]
// const carouselControls = [, '<?php echo get_template_directory_uri(); ?>/assets/icons/carosel_right_arrow.svg'];
const carouselItems = document.querySelectorAll(".carousel-item");

class Carousel {
    constructor(container, items, controls) {
        this.carouselNewContainer = container;
        this.carouselNewControls = controls;
        this.carouselArray = [...items]
    }

    updateCarousel() {
        this.carouselArray.forEach((evt) => {
            evt.classList.remove("item-1");
            evt.classList.remove("item-2");
            evt.classList.remove("item-3");
            evt.classList.remove("item-4");
            evt.classList.remove("item-5");
            // evt.classList.remove("item-6");
        })

        this.carouselArray.slice(0,5).forEach((evt, i) => {
            evt.classList.add(`item-${i+1}`);
        });
    }

    setCurrentState(direction) {
        console.log("clicked direction", direction, direction.className)

        if(direction.className == 'carousel-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }

        this.updateCarousel();
    }

    // setControls() {
    //     this.carouselNewControls.forEach((control) => {
    //         carouselControlsContainer.appendChild(document.createElement("button")).className=`carousel-controls-${control}`
    //         // if(control === "previous") {
    //         //     document.querySelector(`.carousel-controls-${control}`).src = '<?php echo get_template_directory_uri(); ?>}/assets/icons/carousel_left_arrow.svg';
    //         // } else {
    //         //     document.querySelector(`.carousel-controls-${control}`).src = '<?php echo get_template_directory_uri(); ?>/assets/icons/carousel_right_arrow.svg';
    //         // }
    //         document.querySelector(`.carousel-controls-${control}`).innerText = control;

            
    //     })
    // }
 
    useControls() {
        console.log("clicked", carouselControlsContainer.childNodes.length, [...carouselControlsContainer])
        const triggers = [...carouselControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                console.log("clicked", control)
                e.preventDefault();
                this.setCurrentState(control)
            })
        })
    }
}

const carousel = new Carousel(carouselContainer, carouselItems, carouselControls);

// carousel.setControls();
carousel.useControls()