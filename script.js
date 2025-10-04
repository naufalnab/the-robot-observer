document.addEventListener('DOMContentLoaded', () => {

    const cards = document.querySelectorAll('.nft-card');

    // Intersection Observer to animate cards on scroll
    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        threshold: 0.1 // trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Attach the observer to each card
    cards.forEach(card => {
        observer.observe(card);
    });

});