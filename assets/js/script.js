let $btn = document.querySelector('#btn');
let $moon_icon = document.querySelector('.bi-moon');
let $sun_icon = document.querySelector('.bi-sun');
let $body = document.querySelector('body');

$btn.addEventListener('click', () => {
    $body.classList.toggle('bg-dark');
    $body.classList.toggle('text-white');

    $moon_icon.classList.toggle('d-none');
    $sun_icon.classList.toggle('d-none');

});