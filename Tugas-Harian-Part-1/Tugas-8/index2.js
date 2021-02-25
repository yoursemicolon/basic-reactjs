var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise

var read = 4
function execute(read) {
    readBooksPromise(read).then(function(newRead) {
        if(newRead != 0) {
            execute(newRead)
        }
    }).catch(function(err) {
        console.log(err)
    })
}

execute(read)