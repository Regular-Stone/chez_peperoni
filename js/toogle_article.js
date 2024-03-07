let pizza_constructor = document.querySelector('.pizza-constructor');
let pizza_classic = document.querySelector('.pizza-classic');
let all_articles = document.querySelectorAll('.main-content__heading--toggle-icon');
let footer = document.querySelector('.footer');


all_articles.forEach((article, index) => {
    article.addEventListener('click', () => {
        if(index === 0){
            all_articles[1].classList.add('close');
            article.classList.toggle('close');
            pizza_constructor.classList.toggle('hidden');
            pizza_classic.classList.add('hidden');
            if(all_articles[0].classList.contains('close') && all_articles[1].classList.contains('close')){
                body.style.height = "100vh"
            }else {
                body.style.height = "auto";
            }
            
            if(all_articles[0].classList.contains('close') && all_articles[1].classList.contains('close')){
                footer.style.paddingTop = "59vh";
            } else {
                footer.style.paddingTop = "0%";
            }
            
        } else {
            all_articles[0].classList.add('close');
            article.classList.toggle('close');
            pizza_classic.classList.toggle('hidden');
            pizza_constructor.classList.add('hidden');
            if(all_articles[0].classList.contains('close') && all_articles[1].classList.contains('close')){
                body.style.height = "100vh"
            }else {
                body.style.height = "auto";
            }
            
            if(all_articles[0].classList.contains('close') && all_articles[1].classList.contains('close')){
                footer.style.paddingTop = "59vh";
            } else {
                footer.style.paddingTop = "0%";
            }
        }
    });
});

let body = document.querySelector('body');

if(all_articles[0].classList.contains('close') && all_articles[1].classList.contains('close')){
    body.style.height = "100vh"
}else {
    body.style.height = "auto";
}

if(all_articles[0].classList.contains('close') && all_articles[1].classList.contains('close')){
    footer.style.paddingTop = "59vh";
} else {
    footer.style.paddingTop = "0%";
}