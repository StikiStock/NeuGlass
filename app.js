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
    document.querySelector('.Menu').classList.toggle('hidden')
}


let tartib = 0;

const Card = document.querySelector('.Card');
const Arrow = document.querySelector('.Arrow');
const Menu = document.querySelector('.Menu');

const cardFlip = () => {

  const first = Card.getBoundingClientRect();

  showMenu();

  const last = Card.getBoundingClientRect();


  const deltaX = first.left - last.left;
  const deltaY = first.top - last.top;
  const deltaW = first.width / last.width;
  const deltaH = first.height / last.height;


  Card.animate([{
  transformOrigin: 'top left',
  transform: `
    translate(${deltaX}px, ${deltaY}px)
    scale(${deltaW}, ${deltaH})
    `
  }, {
    transformOrigin: 'top left',
    transform: 'none'
  }], {
    duration: 300,
    easing: 'ease-in-out',
    fill: 'both'
  });

  Menu.animate([{
    opacity: '0'
  }, {
    opacity: '1'
  }], {
    duration: 300,
    easing: 'ease-in',
    fill: 'both'
  })

  tartib++

  if (tartib%2 == 0) {
    Arrow.animate([{
      transform: 'rotate(270deg)' 
    }], {
      duration: 300,
      easing: 'ease-in-out',
      fill: 'both'
    });
  }

  else if (tartib%2 == 1) {
    Arrow.animate([{
      transform: 'rotate(90deg)' 
    }], {
      duration: 300,
      easing: 'ease-in-out',
      fill: 'both'
    });
  }

}