const carousel = document.getElementById('carousel');
const gallery = document.getElementById('gallery');
const thumbails = document.getElementById('thumbnails');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const images = [
    {
        image: 'img/1.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/2.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/3.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/4.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/5.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(images);

for(let i = 0; i < images.length; i++) {
    let currentImage = images[i];

    const currentCard = 
    `
        <img src="${currentImage.image}">
        <h3>${currentImage.title}</h3>
        <p>${currentImage.text}</p>
    `

    const thumb =
    `
        <img src="${currentImage.image}">
    `

    gallery.innerHTML += currentCard;
    thumbails.innerHTML += thumb;
}

const data = document.querySelectorAll('#gallery img');
const title = document.querySelectorAll('#gallery h3');
const paragraph = document.querySelectorAll('#gallery p');

let currentActiveIndex = 0;

data[currentActiveIndex].classList.add('active');
title[currentActiveIndex].classList.add('active');
paragraph[currentActiveIndex].classList.add('active');

next.addEventListener('click',
    function() {
        // Rimuovo la classe active
        data[currentActiveIndex].classList.remove('active');
        title[currentActiveIndex].classList.remove('active');
        paragraph[currentActiveIndex].classList.remove('active');

        //Incremento per cambiare immagine
        currentActiveIndex++;

        if (currentActiveIndex === data.length) {
            currentActiveIndex = 0;
        }
        
        // Assegno la classe active alla foto successiva
        data[currentActiveIndex].classList.add('active');
        title[currentActiveIndex].classList.add('active');
        paragraph[currentActiveIndex].classList.add('active');
    }
);

prev.addEventListener('click',
    function() {
        // Rimuovo la classe active
        data[currentActiveIndex].classList.remove('active');
        title[currentActiveIndex].classList.remove('active');
        paragraph[currentActiveIndex].classList.remove('active');

        //Decremento per cambiare immagine
        currentActiveIndex--;

        if (currentActiveIndex < 0) {
            currentActiveIndex = 4;
        }
        
        // Assegno la classe active alla foto precedente
        data[currentActiveIndex].classList.add('active');
        title[currentActiveIndex].classList.add('active');
        paragraph[currentActiveIndex].classList.add('active');
    }
);