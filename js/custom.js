// ALL IMAGES THAT NEED TO FILL THEIR CONTAINER - SIMILAR TO COVER
const fillImages = document.querySelectorAll('.img-fill img');
const dayElements = document.querySelectorAll('.day');

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

highlightDay();
fitImages();