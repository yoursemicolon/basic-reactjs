// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(kataPertama + " " + kataKedua + " " + kataKetiga.charAt(0).toUpperCase() + kataKetiga.slice(1) + " " + kataKeempat.toUpperCase());
console.log();

// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

console.log(parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat));
console.log();

// soal 3
var kalimat = 'wah javascript itu keren sekali';

var string1 = kalimat.substring(0, 3);
var string2 = kalimat.substring(4, 14);
var string3 = kalimat.substring(15, 18);
var string4 = kalimat.substring(19, 24);
var string5 = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + string1);
console.log('Kata Kedua: ' + string2);
console.log('Kata Ketiga: ' + string3);
console.log('Kata Keempat: ' + string4);
console.log('Kata Kelima: ' + string5);
console.log();

// soal 4
var nilai = 78;

if(nilai >= 80) {
    console.log('A');
} else if(nilai >= 70) {
    console.log('B');
} else if(nilai >= 60 && nilai < 70) {
    console.log('C');
} else if(nilai >= 50 && nilai < 60) {
    console.log('D');
} else {
    console.log('E');
}
console.log();

// soal 5
var tanggal = 3;
var bulan = 12;
var tahun = 2000;

var stringBulan = "";

switch(bulan) {
    case 1: 
        stringBulan = 'Januari';
        break;
    case 2: 
        stringBulan = 'Februari';
        break;
    case 3: 
        stringBulan = 'Maret';
        break;
    case 4: 
        stringBulan = 'April';
        break;
    case 5: 
        stringBulan = 'Mei';
        break;
    case 6: 
        stringBulan = 'Juni';
        break;
    case 7: 
        stringBulan = 'Juli';
        break;
    case 8: 
        stringBulan = 'Agustus';
        break;
    case 9: 
        stringBulan = 'September';
        break;
    case 10:   
        stringBulan = 'Oktober';
        break;
    case 11: 
        stringBulan = 'November';
        break;
    case 12: 
        stringBulan = 'Desember';
        break;
}

console.log(tanggal.toString() + " " + stringBulan + " " + tahun.toString());
// console.log(tanggal + " " + stringBulan + " " + tahun);
