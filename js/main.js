// Hero Images //
const hero = document.getElementById('hero');
const textDiv = document.getElementById('type-container');
const dotsDiv = document.getElementById('dots');







heroImages.forEach(img => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    
    
    dotsDiv.appendChild(dot);
});





const dots = document.querySelectorAll('.dot');
let index = 0;
setInterval(() => {
    textDiv.innerHTML = '';



    const imgElem = document.createElement('img');
    const type = document.createElement('h1');


    
    type.textContent = heroImages[index].type;
    type.style.color = heroImages[index].color;
    imgElem.src = heroImages[index].source;




    dots.forEach((dot) => {
        dot.style.width = '.5rem';
    });
    dots[index].style.width = '2rem';



    index += 1;
    if(index > heroImages.length - 1){
        /* imgElem.src = 'https://m.media-amazon.com/images/M/MV5BODY4OWM5M2UtM2Y1Yi00YjAyLTlhMDktMDkzZjFmMjI5MmI5XkEyXkFqcGdeQXVyMTA1NjQyNjkw._V1_SX300.jpg'; */
        index = 0;
    }

    textDiv.appendChild(type);
    hero.appendChild(imgElem);
}, 3000);

setTimeout(() => {
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
        });
    
    });
}, 0)

