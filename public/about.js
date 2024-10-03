const header = document.querySelector('header');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');
const container4 = document.querySelector('.container4');
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
            contentContainer7.classList.remove('visible');
            contentContainer8.classList.remove('visible');
        }
    });
}, {
    root: null,
    threshold: 0.7 
});


observerContainer2.observe(container2);
observerContainer3.observe(container3);
observerContainer4.observe(container4);
observerContentContainer7.observe(contentContainer7);
observerContentContainer8.observe(contentContainer8);


resetObserver.observe(header);


document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('.counter');
  const options = {
    root: null, 
    threshold: 0.5 
  };


  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounter(entry.target); 
      } else {
        resetCounter(entry.target); 
      }
    });
  }, options);

  
  function startCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const increment = target / 100; 
    let current = 0;

    
    function updateCounter() {
      if (current < target) {
        current += increment;
        counter.innerText = Math.ceil(current);
        setTimeout(updateCounter, 20); 
      } else {
        counter.innerText = target >= 1000 ? `${Math.floor(target / 1000)}k+` : target; 
      }
    }

    updateCounter();
  }

 
  function resetCounter(counter) {
    counter.innerText = '0'; 
  }

  
  counters.forEach(counter => observer.observe(counter));
});

document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter2');
    const options = {
      root: null, 
      threshold: 0.5, 
    };
  
   
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounter(entry.target);
        } else {
          resetCounter(entry.target); 
        }
      });
    }, options);
  
   
    function startCounter(counter) {
      const target = +counter.getAttribute('data-target');
      const increment = target / 100; 
      let current = 0;
      const unit = counter.getAttribute('data-unit') || ''; 
      const format = counter.getAttribute('data-format') || ''; 
  
      
      function updateCounter() {
        if (current < target) {
          current += increment;
  
          
          if (format === 'K') {
            counter.innerText = `${(current / 1000).toFixed(1)}K+`; 
          } else if (format === 'M') {
            counter.innerText = `${(current / 1000000).toFixed(1)}M+`; 
          } else if (unit === '%') {
            counter.innerText = `${current.toFixed(1)}%`; 
          } else if (unit === '$') {
            counter.innerText = `$${(current / 1000000).toFixed(1)}M+`; 
          } else {
            counter.innerText = Math.ceil(current);
          }
  
          setTimeout(updateCounter, 20); 
        } else {
          
          if (format === 'K') {
            counter.innerText = '3.2K+'; 
          } else if (format === 'M') {
            counter.innerText = '4.2M+'; 
          } else if (unit === '%') {
            counter.innerText = `${target}%`;
          } else if (unit === '$') {
            counter.innerText = `$${(target / 1000000).toFixed(1)}M+`;
          } else {
            counter.innerText = target;
          }
        }
      }
  
      updateCounter();
    }
  
    
    function resetCounter(counter) {
      const unit = counter.getAttribute('data-unit') || ''; 
      if (unit === '%') {
        counter.innerText = '0%';
      } else if (unit === '$') {
        counter.innerText = '$0';
      } else {
        counter.innerText = '0';
      }
    }
  
    
    counters.forEach((counter) => observer.observe(counter));
  });

  togglebtn = document.querySelector('.toggle-btn');
  togglebtn.onclick = function() {
      mainNav = document.querySelector('.main-nav');
      mainNav.classList.toggle('active');
  }
      
  toggleBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
  });
  