const eye = document.querySelector('div.eye');

window.setInterval(() => {
    eye.classList.add('eyeClosed');
    window.setTimeout(() => {
        eye.classList.remove('eyeClosed');
    }, 200);
}, 5000);

const tail = document.querySelector('div.tail');

window.setInterval(() => {
    tail.classList.add('tailUp');
    window.setTimeout(() => {
        tail.classList.remove('tailUp');
    }, 1000);
}, 7000);

const patounes = document.querySelectorAll('div.hand>div');

window.setInterval(() => {
  patounes.forEach((patoune) => {
    patoune.classList.toggle('handUp');
    patoune.classList.toggle('handDown');
  });
}, 500);

const face = document.querySelector('div.face');

face.addEventListener('mousemove', (evt) => {
  const x = evt.offsetX;
  const y = evt.offsetY;

  if (x < eye.offsetLeft - 5) {
    eye.classList.add('lookLeft');
  } else {
    eye.classList.remove('lookLeft');
  }

  if (x > eye.offsetLeft + 23) {
    eye.classList.add('lookRight');
  } else {
    eye.classList.remove('lookRight');
  }
});

face.addEventListener('mouseleave', (evt) => {
  eye.classList.remove('lookLeft');
  eye.classList.remove('lookRight');
});
