let images = [
    'url("./images/station-gas.jpg")',
    'url("./images/forest-surrounded-fog.jpeg")',
    'url("./images/nyc-street.jpeg")',
    'url("./images/woman-fest-up.jpeg")',
    'url("./images/nyc-buildings.jpeg")',
];

let num = 0;
let carousel = document.getElementById('advert');

let next = () => {
    num++;
    if (num > images.length - 1) {
        num = 0;
    }
    carousel.style.backgroundImage = images[num];
};
// images.removeEventListener('mouseover', next);

let prev = () => {
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    carousel.style.backgroundImage = images[num];
};
