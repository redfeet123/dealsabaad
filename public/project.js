const header = document.querySelector('header');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');
const container4 = document.querySelector('.container4');
const headdeal = document.querySelector('.headdeal');
const container6 = document.querySelector('.container6');
const contentContainer7 = document.querySelector('.content-container7');
const contentContainer8 = document.querySelector('.content-container8');


function addVisibility(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); 
        }
    });
}


const observerContainer2 = new IntersectionObserver(addVisibility, {
    root: null,
    threshold: 0.5,
    rootMargin: '0px'
});

const observerContainer3 = new IntersectionObserver(addVisibility, {
    root: null,
    threshold: 0.5
});


const observerContainer4 = new IntersectionObserver(addVisibility, {
    root: null,
    threshold: 0.5
});


const observerHeaddeal = new IntersectionObserver(addVisibility, {
    root: null,
    threshold: 0.5
});


const observerContainer6 = new IntersectionObserver(addVisibility, {
    root: null,
    threshold: 0.5
});


const observerContentContainer7 = new IntersectionObserver(addVisibility, {
    root: null,
    threshold: 0.5
});


const observerContentContainer8 = new IntersectionObserver(addVisibility, {
    root: null,
    threshold: 0.5
});


const resetObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            container2.classList.remove('visible');
            container3.classList.remove('visible');
            container4.classList.remove('visible');
            headdeal.classList.remove('visible');
            container6.classList.remove('visible');
            contentContainer7.classList.remove('visible');
            contentContainer8.classList.remove('visible');
        }
    });
}, {
    root: null,
    threshold: 0.7 
});

// Start observing the elements
observerContainer2.observe(container2);
observerContainer3.observe(container3);
observerContainer4.observe(container4);
observerHeaddeal.observe(headdeal);
observerContainer6.observe(container6);
observerContentContainer7.observe(contentContainer7);
observerContentContainer8.observe(contentContainer8);


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


    
       