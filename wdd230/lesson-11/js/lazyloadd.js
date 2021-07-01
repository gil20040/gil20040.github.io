// select all the images to lazy load
const images = document.querySelectorAll("[data-src]")

// replacing src with data-src
const preloadImage = (img) => {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = () => {
      img.removeAttribute('data-src');
    };
  };

  
// when to load the images 
const imgOptions = {
    threshold: 0, 
    rootMargin: "0px 0px 10px 0px"
};

// magic 
const imgObserver = new IntersectionObserver ((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
},imgOptions);

// go through each image
images.forEach(image => {
    imgObserver.observe(image);
})