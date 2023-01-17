const carousel = document.getElementById('carousel');
const gallery = document.getElementById('gallery');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const data = document.querySelectorAll('#gallery img');

let currentActiveIndex = 0;
data[currentActiveIndex].classList.add('active');

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

next.addEventListener('click',
    function() {
        // Rimuovo la classe active
        data[currentActiveIndex].classList.remove('active');

        // Incrementiamo per cambiare immagine
        currentActiveIndex++;

        if(currentActiveIndex == images.length) {
            currentActiveIndex = 0;
        }

        // Assegno la classe active alla foto successiva
        data[currentActiveIndex].classList.add('active');
    }
);