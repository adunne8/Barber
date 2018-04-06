// ALL IMAGES THAT NEED TO FILL THEIR CONTAINER - SIMILAR TO COVER
const fillImages = document.querySelectorAll('.img-fill img');
const dayElements = document.querySelectorAll('.day');

// NAVBAR BACKGROUND SELECTORS
const navbar = document.querySelector('.navbar');
const activeNav = navbar.querySelector('.active');
const triggers = document.querySelectorAll('.navbar li > a');
const highlight = document.createElement('span');

console.log(activeNav);

// CONFIGURE AND ADD NAV HIGHLIGHTER
navbar.append(highlight);


// FILL IMAGE TO CONTAINER FUNCTION
function fitImages() {
    fillImages.forEach((fillImage) => {
        //ENSURE IMAGE IS LOADED FOR CORRECT DIMENSIONS
        fillImage.onload = function(){
            const imgDims = fillImage.getBoundingClientRect();
            imgDims.width > imgDims.height ? fillImage.classList.add('img-wide') :  fillImage.classList.add('img-tall');

        }
    })

};

function highlightDay(){
    const date = new Date();
    const day = date.getDay();

    console.log(dayElements[day-1].classList.add('day-highlight'));

}

function highlightNav(){
    
    const linkCoords = this.getBoundingClientRect();

    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top,
        left: linkCoords.left + window.scrollX
    }

    highlight.style.width = `${coords.width}px`;
    //highlight.style.height = `${coords.height}px`;

    highlight.style.transform = `translate(${coords.left}px, ${coords.top + coords.height}px`;
}

function initialHighlight(){
    const linkCoords = activeNav.getBoundingClientRect();
    console.log(linkCoords);
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top,
        left: linkCoords.left + window.scrollX
    }

    highlight.style.width = `${coords.width}px`;
    //highlight.style.height = `${coords.height}px`;

    highlight.style.transform = `translate(${coords.left}px, ${coords.top + coords.height}px`;
    
    setTimeout(() => {
        highlight.classList.add('highlight');
    },100);


}


triggers.forEach(trigger => trigger.addEventListener('mouseenter', highlightNav));

highlightDay();
initialHighlight();
fitImages();

