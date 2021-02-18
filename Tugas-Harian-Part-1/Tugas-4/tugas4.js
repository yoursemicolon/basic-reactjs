// soal 1
console.log("-----SOAL SATU-----");
console.log("LOOPING PERTAMA");
var i = 0;
while (i < 20) {
    i += 2;
    console.log(i + " - I love coding");
}

console.log("LOOPING KEDUA");
while(i > 0) {
    console.log(i + " - I will become a frontend developer");
    i -= 2;
}
console.log();

// soal 2
console.log("-----SOAL DUA-----");
for(var j = 1; j <= 20; j++) {
    if(j%2 != 0) {
        if(j%3 == 0) {
            console.log(j + " - I Love Coding");
        } else {
            console.log(j + " - Santai");
        }
    } else if(j%2 == 0) {
        console.log(j + " - Berkualitas");
    }
}
console.log();

// Soal 3
console.log("-----SOAL TIGA-----");
var pola = "";

for(var a = 0; a < 7; a++) {
    for(var b = 0; b <= a; b++) {
        pola += "#";
    }
    pola += "\n";
}
console.log(pola);

// soal 4
console.log("-----SOAL EMPAT-----");

var kalimat = "saya sangat senang belajar javascript";
var newKalimat = kalimat.split(" ");
console.log(newKalimat);
console.log();

// soal 5
console.log("-----SOAL LIMA-----");

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

daftarBuah.sort();
var joinDaftarBuah = daftarBuah.join("\n");
console.log(joinDaftarBuah);