// ALL IMAGES THAT NEED TO FILL THEIR CONTAINER - SIMILAR TO COVER
const fillImages = document.querySelectorAll('.img-fill img');

function fitImages() {
    fillImages.forEach((fillImage) => {
        //ENSURE IMAGE IS LOADED FOR CORRECT DIMENSIONS
        fillImage.onload = function(){
            const imgDims = fillImage.getBoundingClientRect();
            (imgDims.width > imgDims.height) ? fillImage.classList.add('img-wide') :  fillImage.classList.add('img-tall');
            /*
            if (imgDims.width > imgDims.height) {
                fillImage.classList.add('img-wide')
            }
            else {
                fillImage.classList.add('img-tall')
            }
            */
        }
    })

};

fitImages();