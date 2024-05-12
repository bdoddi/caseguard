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

/** Filter functionality begins from here */

function filterFunction() {
const select = document.querySelector("select");
const colors = document.querySelector(".colors");

select.addEventListener("change", (event) => {
    const selected = event.target.value;

    for(let i=0; i < colors.children.length; i++) {
        const color = colors.children[i];

        if(selected === 'none') {
            colors.style.display = 'block';
            color.style.display = 'block';
        } else {
            if(color.id !== selected) {
                color.style.display = 'none';
            } else {
                colors.style.display = 'block';
                color.style.display = 'block';
            }
        }
    }
})

}


/** Carousel functionalities begins from here */

const slider = document.querySelector('.carousel-container');

function activate(e) {
    const items = document.querySelectorAll('.carousel-item');
    e.target.matches('.carousel-controls-next') && slider.append(items[0])
    e.target.matches('.carousel-controls-previous') && slider.prepend(items[items.length - 1]);
}

// setInterval(document.addEventListener('click', activate, false), )

document.addEventListener('click', activate, false);

/**combining filter and carousel functionalities */
let selectedColor = '';
function selectedImage(e) {

const colors = document.querySelector(".colors");
for(let i=0; i < colors.children.length; i++) {
    const color = colors.children[i];
}

}

document.addEventListener('click', selectedImage, false);

function CarouselFilter() {
    const items = document.querySelectorAll('.carousel-item');
    const colors = document.querySelector(".colors");
    for(let i=0; i < colors.children.length; i++) {
        const color = colors.children[i];
    }
    for(let i=0; i < items.length; i++) {
        /** CarouselFilter functionality is in progress.... */
    }
    
};


/**Calling Functions */
filterFunction()
CarouselFilter()