// Interactive scrapbook experience with full-screen pages
const pages = document.querySelectorAll('.page');
let currentPage = -1; // Start with no page visible

function showPage(index) {
    pages.forEach((page, i) => {
        page.style.display = i === index ? 'block' : 'none';
    });
}

// Start exploring button functionality
const startButton = document.getElementById('start-flipping');
startButton.addEventListener('click', function() {
    currentPage = 0;
    showPage(currentPage);
});

// Add navigation to flip pages
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight' && currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    } else if (event.key === 'ArrowLeft' && currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

// Clickable Origami Elements
const origamiElements = document.querySelectorAll('.origami');
origamiElements.forEach(element => {
    element.addEventListener('click', () => {
        alert('This is a hidden message!');
    });
});

// Floating Hearts on Final Page
const finalPage = document.querySelector('.final-page');
if (finalPage) {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        finalPage.appendChild(heart);
    }
}
