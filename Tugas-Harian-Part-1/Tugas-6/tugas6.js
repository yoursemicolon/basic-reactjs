// soal 1
let calculateArea = (radius) => {
    if(radius % 7 === 0) {
        return radius * radius * 22/7
    } else {
        return radius * radius * Math.PI
    }
}

let calculateCircumference = (radius) => {
    if(radius % 7 === 0) {
        return 2 * radius * 22/7
    } else {
        return 2 * radius * Math.PI
    }
}

let radius = 7
console.log(calculateArea(radius))
console.log(calculateCircumference(radius))
console.log()

// soal 2
let kalimat = ""

const tambahKata = (kata) => kalimat += ` ${kata}`

tambahKata('saya')
tambahKata('adalah')
tambahKata('seorang')
tambahKata('frontend')
tambahKata('developer')

console.log(kalimat)
console.log();

// soal 3
const newFunction = (firstName, lastName) => {
    return {
    firstName,
    lastName,
    fullName: () => console.log(`${firstName} ${lastName}`)
    }
}

//Driver Code 
newFunction("William", "Imoh").fullName()
console.log();

// soal 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject

// Driver code
console.log(firstName, lastName, destination, occupation, spell)
console.log();

// soal 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

let combined = [west, east]

//Driver Code
console.log(combined)