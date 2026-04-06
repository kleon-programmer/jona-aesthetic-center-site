// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false // Set to true if you want animations to repeat every time you scroll up/down
});

// 1. Reveal the Hero Text
sr.reveal('.hero-text-side', { origin: 'left', delay: 300 });

// 2. Reveal Service Cards with a "Stagger" effect (one after another)
sr.reveal('.v3-card', { 
    interval: 200, 
    distance: '40px',
    scale: 0.9 
});

// 3. Reveal the Package Banner
sr.reveal('.package-banner', { 
    delay: 400, 
    origin: 'right',
    distance: '100px'
});

// 4. The Glass Contact Block (The one we just added)
sr.reveal('.glass-contact', { 
    duration: 2500,
    opacity: 0,
    scale: 0.8,
    viewFactor: 0.2 // Starts when 20% of the element is visible
});

// 5. Contact Info Items inside the glass
sr.reveal('.info-item', { 
    interval: 300, 
    delay: 800,
    origin: 'top' 
});
const thisYear = new Date().getFullYear();
document.getElementById("year").textContent=`${thisYear}-${thisYear+1}`