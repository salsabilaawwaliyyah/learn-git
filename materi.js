// ========================
// 1. Variabel dan Tipe Data
// ========================

// Deklarasi variabel menggunakan 'let' (dapat diubah) dan 'const' (konstan)
let nama = "Ali"; // String
const umur = 25; // Number
let isStudent = true; // Boolean
let alamat; // Undefined

console.log("Nama:", nama);
console.log("Umur:", umur);
console.log("Apakah Mahasiswa:", isStudent);
console.log("Alamat:", alamat);

// ========================
// 2. Operator
// ========================

let a = 10;
let b = 5;

let penjumlahan = a + b; // Operator penjumlahan
let pengurangan = a - b; // Operator pengurangan
let perkalian = a * b; // Operator perkalian
let pembagian = a / b; // Operator pembagian
let modulus = a % b; // Operator modulus (sisa bagi)

console.log("Penjumlahan:", penjumlahan);
console.log("Pengurangan:", pengurangan);
console.log("Perkalian:", perkalian);
console.log("Pembagian:", pembagian);
console.log("Modulus:", modulus);

// ========================
// 3. Kondisional
// ========================

if (umur > 18) {
  console.log("Anda sudah dewasa.");
} else {
  console.log("Anda masih di bawah umur.");
}

// ========================
// 4. Fungsi
// ========================

function sapaan(nama) {
  return "Halo, " + nama + "!";
}

console.log(sapaan("Budi"));

// Fungsi dengan parameter dan return value
function hitungLuasPersegi(panjang, lebar) {
  return panjang * lebar;
}

let luas = hitungLuasPersegi(5, 4);
console.log("Luas Persegi:", luas);

// ========================
// 5. Looping
// ========================

// Looping menggunakan for
for (let i = 0; i < 5; i++) {
  console.log("Perulangan for ke-", i);
}

// Looping menggunakan while
let j = 0;
while (j < 5) {
  console.log("Perulangan while ke-", j);
  j++;
}

// ========================
// 6. Array
// ========================

let buah = ["apel", "pisang", "mangga"];

// Menampilkan elemen array
console.log("Buah ke-1:", buah[0]);
console.log("Buah ke-2:", buah[1]);
console.log("Buah ke-3:", buah[2]);

// Menambahkan elemen ke array
buah.push("jeruk");
console.log("Setelah push:", buah);

// Menghapus elemen terakhir dari array
buah.pop();
console.log("Setelah pop:", buah);

// Looping melalui array
for (let i = 0; i < buah.length; i++) {
  console.log("Buah:", buah[i]);
}

// ========================
// 7. Objek
// ========================

let mahasiswa = {
  nama: "Siti",
  umur: 22,
  jurusan: "Teknik Informatika",
  perkenalan: function () {
    return "Halo, nama saya " + this.nama;
  },
};

// Mengakses properti objek
console.log("Nama Mahasiswa:", mahasiswa.nama);
console.log("Umur Mahasiswa:", mahasiswa.umur);
console.log(mahasiswa.perkenalan());

// ========================
// 8. DOM Manipulation (Basic)
// ========================

// Membuat elemen baru di DOM
let paragrafBaru = document.createElement("p");
paragrafBaru.textContent = "Ini adalah paragraf yang ditambahkan dengan JavaScript.";
document.body.appendChild(paragrafBaru);

// Mengubah teks elemen dengan id tertentu
document.getElementById("judul").textContent = "Judul Baru";

// ========================
// 9. Event Handling
// ========================

// Menambahkan event listener untuk menangani klik tombol
document.getElementById("tombol").addEventListener("click", function () {
  alert("Tombol diklik!");
});

// ========================
// 10. Asynchronous JavaScript
// ========================

// Fungsi setTimeout
setTimeout(function () {
  console.log("Ini akan tampil setelah 2 detik");
}, 2000);

// Fungsi Fetch API (mengambil data dari server)
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log("Data dari API:", data))
  .catch((error) => console.error("Terjadi kesalahan:", error));
