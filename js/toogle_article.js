let pizza_constructor = document.querySelector('.pizza-constructor');
let pizza_classic = document.querySelector('.pizza-classic');
let all_articles = document.querySelectorAll('.main-content__heading--toggle-icon');


all_articles.forEach((article, index) => {
    article.addEventListener('click', () => {
        if(index === 0){
            all_articles[1].classList.add('close');
            article.classList.toggle('close');
            pizza_constructor.classList.toggle('hidden');
            pizza_classic.classList.add('hidden');
        } else {
            all_articles[0].classList.add('close');
            article.classList.toggle('close');
            pizza_classic.classList.toggle('hidden');
            pizza_constructor.classList.add('hidden');
        }
    });
});

let body = document.querySelector('body');
for(let i = 0; i < all_articles.length; i++){
    all_articles[i].classList.contains('close') ? body.style.height = "100vh" : body.style.height = "auto";
}