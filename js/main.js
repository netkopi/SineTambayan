const heroImages = [
    {
        source: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
        type: 'Movie',
        id: ''
    },
    {
        source: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_SX300.jpg',
        type: 'Comedy',
        id: ''
    },
    {
        source: 'https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg',
        type: 'Movie',
        id: ''
    },
    {
        source: '',
        type: '',
        id: ''
    },
]



// Hero Images //
const hero = document.getElementById('hero');
const dotsDiv = document.getElementById('dots');

heroImages.forEach(img => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    
    dotsDiv.appendChild(dot);
});


const dots = document.querySelectorAll('.dot');



let index = 0;
setInterval(() => {
    const imgElem = document.createElement('img');
    imgElem.style.position = 'absolute';
    imgElem.style.animationName = 'fadein';

    imgElem.src = heroImages[index].source;


    dots.forEach(dot => {
        dot.style.width = '.5rem';

    });
    dots[index].style.width = '2rem';


    index += 1;
    if(index > heroImages.length - 1){
        imgElem.src = 'https://m.media-amazon.com/images/M/MV5BODY4OWM5M2UtM2Y1Yi00YjAyLTlhMDktMDkzZjFmMjI5MmI5XkEyXkFqcGdeQXVyMTA1NjQyNjkw._V1_SX300.jpg';
        index = 0;
    }
    hero.appendChild(imgElem);
}, 3000);