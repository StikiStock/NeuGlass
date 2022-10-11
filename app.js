const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('shown');
        } else {
            entry.target.classList.remove('shown')
        }
    })
});

let x, i;
x = document.querySelectorAll(".blogimg");
for (i = 0; i < x.length; i++) {
    x[i].classList.add('animated');
}

const animated = document.querySelectorAll('.animated');
animated.forEach((el) => observer.observe(el));


let showMenu = () => {
    document.querySelector('.Arrow').classList.toggle('rotate-[270deg]')
    document.querySelector('.Arrow').classList.toggle('rotate-[90deg]')
    document.querySelector('.Menu').classList.toggle('hidden')
}