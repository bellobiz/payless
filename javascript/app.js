'use strict';

class Dog {
    constructor(name, legs, eyes, dogSkin) {
        this._name = name;
        this._legs = legs;
        this._eyes = eyes;
        this._dogSkin = dogSkin;
    }
    get getPet() {
        return `My dog name is ${this._name}. He has ${this._eyes} eyes and ${this._legs} legs. He also has a ${this._dogSkin} skin`;
    }
}

const dog = new Dog('Husky', 4, 2, 'black');
console.log(dog.getPet);

class Cat extends Dog {
    constructor(name, legs, eyes, catSkin) {
        super(name, legs, eyes);
        this._catSkin = catSkin;
    }
    get getPet() {
        return `My cat name is ${this._name}. He has ${this._eyes} eyes and ${this._legs} legs. He also has a ${this._catSkin} skin`;
    }
    static getnerateCatNames() {
        const names = ['Crish', 'Poppy', 'Poy', 'Husky', 'Doggy'];
        let randomNames = Math.floor(Math.random() * names.length);
        return `I also call the cat ${names[randomNames]}`
    }
}

const cat = new Cat('Hush', 4, 2, 'white');
console.log(cat.getPet);
console.log(Cat.getnerateCatNames())