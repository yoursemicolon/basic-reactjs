// soal 1
console.log("------SOAL 1------");

function halo() {
    return "Halo Sanbers";
}

console.log(halo());
console.log();

// soal 2
console.log("------SOAL 2------");

function kalikan(num1, num2) {
    return num1 * num2;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);
console.log();

// soal 3
console.log("------SOAL 3------");

function introduce(name, age, address, hobby) {
    return "Nama saya " + name + ", umur saya " + age + ", alamat saya di Jalan belum jadi, dan saya punya hobby " + hobby;
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);
console.log();

// soal 4
console.log("------SOAL 4------");

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];

var objDaftarPeserta = {};
objDaftarPeserta.nama = arrayDaftarPeserta[0];
objDaftarPeserta.jenisKelamin = arrayDaftarPeserta[1];
objDaftarPeserta.hobi = arrayDaftarPeserta[2];
objDaftarPeserta.tahunLahir = arrayDaftarPeserta[3];

console.log(objDaftarPeserta);
console.log();

// soal 5
console.log("------SOAL 5------");

var daftarBuah = [];
var addData = {};

// data 1
addData.nama = 'strawberry';
addData.warna = 'merah';
addData.adaBijinya = false;
addData.harga = 9000;
daftarBuah.push(addData);

// data 2
addData.nama = 'jeruk';
addData.warna = 'oranye';
addData.adaBijinya = true;
addData.harga = 8000;
daftarBuah.push(addData);

// data 3
addData.nama = 'Semangka';
addData.warna = 'Hijau & Merah';
addData.adaBijinya = true;
addData.harga = 10000;
daftarBuah.push(addData);

// data 4
addData.nama = 'Pisang';
addData.warna = 'Kuning';
addData.adaBijinya = false;
addData.harga = 5000;
daftarBuah.push(addData);

console.log(daftarBuah[0]);
console.log();

// soal 6
console.log("------SOAL 6------");

function addDataFilm(nama, durasi, genre, tahun) {
    var data = {};
    data.nama = nama;
    data.durasi = durasi;
    data.genre = genre;
    data.tahun = tahun;
    dataFilm.push(data);
}

var dataFilm = [];

addDataFilm('LOTR', '2 jam', 'action', '1999');
addDataFilm('avenger', '2 jam', 'action', '2019');
addDataFilm('spiderman', '2 jam', 'action', '2004');
addDataFilm('juon', '2 jam', 'horror', '2004');

console.log(dataFilm);