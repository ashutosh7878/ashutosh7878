

// Function to handle the intersection of elements
function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add the animation class when the element is in the viewport
            entry.target.classList.add('animate__animated', 'animate__bounceIn');
        } else {
            // Remove the animation class when the element is out of the viewport
            entry.target.classList.remove('animate__animated', 'animate__bounceIn');
        }
    });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    threshold: 0.3, // Trigger when 30% of the element is in the viewport
});

// Find the elements with the class 'jump-animation'
const elementsToAnimate = document.querySelectorAll('.jump-animation');

// Observe each element
elementsToAnimate.forEach((element) => {
    observer.observe(element);
});
