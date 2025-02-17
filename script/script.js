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
