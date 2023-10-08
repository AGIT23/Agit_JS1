//if else
let usia = 16;

if (usia >= 17) {
  keterangan = "Suda legal";
} else {
  keterangan = "Belum legal";
}
console.log("Usia anda dinyatan " + keterangan);


//nested if
let ipk = 4;

if (ipk >= 3.8) {
  predikat = "cumlaude";
} else if (ipk >= 3.5) {
  predikat = "sangat memuaskan";
} else if (ipk >= 3.0) {
  predikat = "memuaskan";
} else if (ipk >= 2.5) {
  predikat = "lulus";
} else {
  predikat = "tidak ada predikat";
}

console.log("Selamat anda lulus dengan predikat " + predikat);



//swhitc case
let ipk = 3.4;

switch (true) {
  case ipk >= 3.75:
    predikat = "Cum Laude";
    break;
  case ipk >= 3.5:
    predikat  = "Sangat Memuaskan";
    break;
  case ipk >= 3.0:
    predikat  = "Memuaskan";
    break;
  case ipk >= 2.5:
    predikat  = "Cukup Memuaskan";
    break;
  default:
    predikat  = "Tidak ada predikat";
}
console.log("Predikat anda adalah " + predikat);


//for statement
let angka = 20;
for (let i = 1; i <= angka; i++) {
  console.log(i);
}


//while
let hitung = 1;

while (hitung <= 20) {
  console.log("Pengulanhan ke-" + hitung);
  hitung++;
}


//do while
let hitung = 1;

do {
  console.log("Pengulangan ke-" + hitung);
  hitung++;
} while (hitung <= 10);


//function
let kali = function (bilangan1, bilangan2) {
  return bilangan1 * bilangan2;
};

let hasil = kali(3.14, 2.19);
console.log("Hasil perkalian adalah " + hasil);
