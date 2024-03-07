let images_carousel = document.querySelectorAll('.home-content__carousel-group__item');
console.log(images_carousel);
let backward = document.querySelector('.backward');
let forward = document.querySelector('.forward');

console.log(backward, forward)

let actual = 0;

forward.addEventListener('click', () => {
    images_carousel[actual].style.left = '-150%';
    actual++;
    images_carousel[actual].style.left = '50%';
});
backward.addEventListener('click', () => {
    images_carousel[actual].style.left = '150%';
    actual--;
    images_carousel[actual].style.left = '50%';
});