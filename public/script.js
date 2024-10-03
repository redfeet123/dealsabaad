const header = document.querySelector('header');
const headdeal = document.querySelector('.headdeal');
const container3 = document.querySelector('.container3');
const contentContainer4 = document.querySelector('.content-container4');
const contentContainer5 = document.querySelector('.content-container5');
const container6 = document.querySelector('.container6');
const contentContainer7 = document.querySelector('.content-container7');
const contentContainer8 = document.querySelector('.content-container8');

// Helper function to add 'visible' class when elements enter the viewport
function addVisibility(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Reveal element
        }
    });
}

// Observer for container2
const observerHeaddeal = new IntersectionObserver(addVisibility, {
    root: null,
    threshold: 0.5,
    rootMargin: '0px'
});

// Observer for container3
const observerContainer3 = new IntersectionObserver(addVisibility, {
    root: null,
    threshold: 0.5
});

// Observer for container4
const observerContentContainer4 = new IntersectionObserver(addVisibility, {
    root: null,
    threshold: 0.5
});

// Observer for headdeal
const observerContentContainer5 = new IntersectionObserver(addVisibility, {
    root: null,
    threshold: 0.5
});

// Observer for container6
const observerContainer6 = new IntersectionObserver(addVisibility, {
    root: null,
    threshold: 0.5
});

// Observer for contentContainer7
const observerContentContainer7 = new IntersectionObserver(addVisibility, {
    root: null,
    threshold: 0.5
});

// Observer for contentContainer8
const observerContentContainer8 = new IntersectionObserver(addVisibility, {
    root: null,
    threshold: 0.5
});

// Observer to reset animations when the header is visible
const resetObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove visible classes to reset animations
            headdeal.classList.remove('visible');
            container3.classList.remove('visible');
            contentContainer4.classList.remove('visible');
            contentContainer5.classList.remove('visible');
            container6.classList.remove('visible');
            contentContainer7.classList.remove('visible');
            contentContainer8.classList.remove('visible');
        }
    });
}, {
    root: null,
    threshold: 0.7 // Trigger reset when the header is slightly visible
});

// Start observing the elements
observerHeaddeal.observe(headdeal);
observerContainer3.observe(container3);
observerContentContainer4.observe(contentContainer4);
observerContentContainer5.observe(contentContainer5);
observerContainer6.observe(container6);
observerContentContainer7.observe(contentContainer7);
observerContentContainer8.observe(contentContainer8);

// Observe the header to reset animations
resetObserver.observe(header);



function startCountdown(daysElement, hoursElement, minutesElement, secondsElement, initialDays, initialHours, initialMinutes, initialSeconds) {
    let days = initialDays;
    let hours = initialHours;
    let minutes = initialMinutes;
    let seconds = initialSeconds;

    setInterval(() => {
        seconds--;

        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }

        if (minutes < 0) {
            minutes = 59;
            hours--;
        }

        if (hours < 0) {
            hours = 23;
            days--;
        }

        
        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }, 1000);
}


startCountdown(
    document.getElementById("days1"),
    document.getElementById("hours1"),
    document.getElementById("minutes1"),
    document.getElementById("seconds1"),
    24, 6, 44, 15 
);

startCountdown(
    document.getElementById("days2"),
    document.getElementById("hours2"),
    document.getElementById("minutes2"),
    document.getElementById("seconds2"),
    24, 6, 44, 15 
);

startCountdown(
    document.getElementById("days3"),
    document.getElementById("hours3"),
    document.getElementById("minutes3"),
    document.getElementById("seconds3"),
    24, 6, 44, 15 
);

        togglebtn = document.querySelector('.toggle-btn');
        togglebtn.onclick = function() {
            mainNav = document.querySelector('.main-nav');
            mainNav.classList.toggle('active');
        }
            
        toggleBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

       

    
       