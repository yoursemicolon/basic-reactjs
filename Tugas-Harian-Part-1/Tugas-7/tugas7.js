// soal 1
// release 0
class Animal {
    constructor(name, legs = 4, cold_blooded = false) {
        this.name = name
        this.legs = legs
        this.cold_blooded = cold_blooded
    }
    get animalName() {
        return this.name
    }
    set animalName(name) {
        this.name = name
    }
    get animalLegs() {
        return this.legs
    }
    set animalLegs(legs) {
        this.legs = legs
    }
    get animalColdBlooded() {
        return this.cold_blooded
    }
    set animalColdBlooded(cold_blooded) {
        this.cold_blooded = cold_blooded
    }
    
}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

sheep.animalLegs = 3
console.log(sheep.legs)

// // release 2
class Frog extends Animal {
    constructor(name, legs = 4, cold_blooded = false, yell) {
        super(name, legs = 4, cold_blooded = false)
        this.yell = yell
    }
    yell() {
        
    }
}

class Ape extends Animal {
    constructor(name, legs = 4, cold_blooded = false, jump) {
        super(name, legs = 4, cold_blooded = false)
        this.jump = jump
    }
    jump() {
        return "hop hop"
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"

var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

// // soal 2 
// class Clock {
    
//     constructor({template}) {
//         this.template = template
//         this.timer = null
//     }
    
//     render() {
//         var date = new Date();

//         var hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
    
//         var mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
    
//         var secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
    
//         var output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
    
//         console.log(output);
//     }

//     stop() {
//         clearInterval(this.timer)
//     }

//     start() {
//         this.render()
//         this.timer = setInterval(this.render.bind(this), 1000)
//     }
// }

// var clock = new Clock({template: 'h:m:s'});
// clock.start();  