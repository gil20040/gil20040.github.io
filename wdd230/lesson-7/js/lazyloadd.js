// get all imgs with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

// user parameters to determine when to load images
const imgOptions = {
    threshold: 1, 
    rootMargin: "0px 0px -50px 0px"
};

const loadImages = (image) => {
    image.setAttributes('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

// check if intersection observer is supported 
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) = > {
        items.forEach((item) => {




        });
    }, imgOptions);

// loop through each img and check status and load if needed
imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
});
}
else { //just load all images if not supported
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });