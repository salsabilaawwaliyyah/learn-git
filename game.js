// //Buatlah sebuah game tebak nilai menggunakan bilangan random, dan outputnya adalah berapa kali perulangan dapat menemukan nilai yang dimaksud

// const targetNumber = Math.floor(Math.random() * 100) + 1;

// // Variabel untuk menyimpan jumlah percobaan
// let attempts = 0;
// let guess = 0;

// // Loop hingga tebakan benar
// while (guess !== targetNumber) {
//     // Buat tebakan random
//     guess = Math.floor(Math.random() * 100) + 1;
//     attempts++;
// }

// console.log(`Tebakan berhasil setelah ${attempts} kali percobaan. Angka yang ditebak adalah ${targetNumber}.`);








// Gunakan nilai random untuk mendapatkan 10 bilangan array
// Tentukan total, rata rata, min, max
// Jangan gunakan function bawaan dari javascript, buatlah 
// algoritma sendiri untuk menentukan total, rata rata, min dan max

// let numbers = [];
// for (let i = 0; i < 10; i++) {
//     numbers.push(Math.floor(Math.random() * 100) + 1);
// }

// console.log("Array of random numbers:", numbers);

// // Inisialisasi variabel untuk total, min, dan max
// let total = 0;
// let min = numbers[0];
// let max = numbers[0];

// // Menghitung total, min, dan max
// for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i]; // Menambahkan setiap angka ke total
    
//     // Menentukan nilai minimum
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }

//     // Menentukan nilai maksimum
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }

// // Menghitung rata-rata
// let average = total / numbers.length;

// // Menampilkan hasil
// console.log("Total:", total);
// console.log("Average:", average);
// console.log("Minimum:", min);
// console.log("Maximum:", max);

//------------------------------------------------------------------------


function generateRandomArray(length, max) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * max) + 1);
    }
    return array;
}

// Fungsi untuk menghitung total
function calculateTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

// Fungsi untuk menghitung rata-rata
function calculateAverage(array) {
    let total = calculateTotal(array);
    return total / array.length;
}

// Fungsi untuk menemukan nilai minimum
function findMin(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

// Fungsi untuk menemukan nilai maksimum
function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// Menggunakan fungsi-fungsi di atas
let numbers = generateRandomArray(10, 100);
console.log("Array of random numbers:", numbers);

let total = calculateTotal(numbers);
let average = calculateAverage(numbers);
let min = findMin(numbers);
let max = findMax(numbers);

console.log("Total:", total);
console.log("Average:", average);
console.log("Minimum:", min);
console.log("Maximum:", max);







