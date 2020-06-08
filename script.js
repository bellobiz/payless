let images = [
    'url("./images/station-gas.jpg")',
    'url("https://cdn-images-1.medium.com/max/800/1*KG6-nzjAbOQexbcTMOXpCA.jpeg")',
    'url("https://cdn-images-1.medium.com/max/800/1*c3hRnEuoTXLBgUsYViRWkA.jpeg")',
    'url("https://cdn-images-1.medium.com/max/800/1*s1YmgLIBzymaWhJoo1x9BQ.jpeg")',
    'url("https://cdn-images-1.medium.com/max/800/1*ohea0-lSKxfEItLUhyzNSQ.jpeg")',
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
