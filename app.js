const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('shown');
        } else {
            entry.target.classList.remove('shown')
        }
    })
});


const animated = document.querySelectorAll('.animated');
animated.forEach((el) => observer.observe(el));