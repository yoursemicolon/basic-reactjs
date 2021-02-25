// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

var read = 4;

function execute(read, i = 0) {
    readBooks(read, books[i], function(newRead) {
        read--
        i += 1
        if(read != 0 && i < books.length) {
            execute(newRead, i)
        } else {
            console.log('Waktu habis')
        }
    })
}

execute(10000)