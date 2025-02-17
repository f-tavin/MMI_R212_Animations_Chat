const eye = document.querySelector('div.eye');

window.setInterval(() => {
    eye.classList.add('eyeClosed');
    window.setTimeout(() => {
        eye.classList.remove('eyeClosed');
    }, 200);
}, 5000);
