// 26-MASALA
// function tubmi(a) {
//     let counter = 0;
//     for (let i = 1; i <= a; i++) {
//         if (a % i == 0) {
//             counter += 1;
//         }
//     }
//     if (counter <= 2) {
//         console.log("true-tub son");
//     } else console.log("false-tub son emas");
// }

// tubmi(7);
// 27-MASALA
// function tengMi(x, y) {
//     if (x === y) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }
// tengMi(1, true);
// tengMi(0, "0");
// tengMi(1, 1);
// 28-Masala
// function booleanToString(bool) {
//     return bool.toString();
// }
// console.log(booleanToString(true));
// 29-MASALA
// const arrow = (a) => {
//     return a;
// };
// console.log(arrow(3));
// 30-MASALA
// function frameSoni(minut, frame) {
//     return minut * 60 * frame;
// }
// console.log(frameSoni(1, 1));
// console.log(frameSoni(10, 1));
// console.log(frameSoni(10, 25));
// 31-MASALA
// function calc(str) {
//     return eval(str);
// }
// console.log(calc("3+4"));
// console.log(calc("45-15"));
// 32-MASALA
// function teng10(a, b) {
//     return a === 10 || b === 10 || a + b === 10;
// }

// console.log(teng10(9, 10));
// console.log(teng10(9, 9));
// 33-MASALA
// function litrMasofa(litr) {
//     return litr * 10;
// }
// console.log(litrMasofa(15));
// console.log(litrMasofa(23.5));
// 34-MASALA
// function fun(a, b) {
//     return Math.max(a, b);
// }
// console.log(fun(3, 7));
// console.log(fun(-1, 0));
// console.log(fun(1000, 400));
// 35-MASALA. Funksiya 2ta argument berilsa, funksiya anashu 2ta argumentdan iborat massiv qaytarsin.

// function mas(a, b) {
//     let newMas = [];
//     newMas.push(a, b);
//     console.log(newMas);
// }
// mas(1, 4);
// 36-MASALA. Funksiyaga 2ta argument sifatida string ko’rinishidagi ma’lumotlar beriladi. Agar ushbu ikkala stringdagi belgilar soni bir-birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks hold yolg’on.

// function tengStrings(str1, str2) {
//     return str1.length == str2.length;
// }
// console.log(tengStrings("AB", "CD"));
// console.log(tengStrings("ABC", "CD"));
// console.log(tengStrings("beautiful", "day"));

// 37-MASALA.Shunday funksiya yasangki, unga string argument qilib beriladi, agar ushbu string bo’sh bo’lsa funksiya true qaytaradi, aks holda false.

// function boshStr(str) {
//     return str === "";
// }
// console.log(boshStr(""));
// console.log(boshStr("hello"));

// 38-MASALA.Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 5ga bo’linsa, funksiya true qaytarsin, aks holda false.

// function bolinsin5(son) {
//     return son % 5 == 0;
// }
// console.log(bolinsin5(5));
// console.log(bolinsin5(-55));
// console.log(bolinsin5(37));

// 39-MASALA.Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 100ga bo’linsa, funksiya true qaytarsin, aks holda false.

// function bolinsin100(son) {
//     return son % 100 == 0;
// }
// console.log(bolinsin100(1));
// console.log(bolinsin100(1000));
// console.log(bolinsin100(100));

// 40-MASALA.???

// 41-MASALA.Funksiya 2ta argument qabul qiladi. Birinchi argument ikkinchi argumentdan katta emas. Agar birinchi argumentni ikkinchisiga bo’linsa, funksiya true qaytaradi aks holda false.

// function bolinsin(x, y) {
//     return x % y == 0;
// }
// console.log(bolinsin(98, 7));
// console.log(bolinsin(85, 4));

// 42 - MASALA.Funksiyaga raqam string ko’ rinishida berilsa, funksiya ushbu ma’ lumotni yana raqam ma’ lumot turi ko’ rinishida qaytarib bersin.

// function raqam(str) {
//     return Number(str);
// }
// console.log(raqam("23"));
// console.log(raqam("1000"));

// 43-MASALA.To’rtburchakning yuzini hisoblaydigan funksiya yasang. Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri turtburchak) tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak, agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin.

// function tortYuzi(a, b) {
//     if (a <= 0 || b <= 0) {
//         return -1;
//     }
//     return a * b;
// }
// console.log(tortYuzi(3, 4));
// console.log(tortYuzi(-3, 4));

// 44-MASALA.Funksiyaga ism va familiya argument qilib berilsa, funksiya “ism, familiya” formatdagi string qaytarsin.

// function ismFam(ism, familiya) {
//     return `${ism}, ${familiya}`;
// }
// console.log(ismFam("John", "Robert"));

// 45-MASALA. Quyidaga namunani kuzatgan holda funksiya yasang.
// Namuna:
// bug(true) ➞ "sad days"
// bug(false) ➞ "it's a good day"

// function a(day) {
//     if (day) {
//         return "sad days";
//     } else {
//         return "it's a good day";
//     }
// }
// console.log(a(true));
// console.log(a(false));

// 46-MASALA.???
// 47-MASALA. ???
// 48-MASALA.Funksiya son qabul qilsa, ushbu sonning negativini qaytarsin.

// function negativ(son) {
//     if (son > 0) {
//         return son * -1;
//     } else if (son < 0) {
//         return son;
//     } else {
//         return 0;
//     }
// }
// console.log(negativ(4));
// console.log(negativ(-4));
// console.log(negativ(0));

// 49-MASALA. Massivni elementlarini o’rnin almashtiradigan funksiya yasang. Reverse metodi siz ham urinib ko’ring.

// function almash(arr) {
//     return arr.reverse();
// }
// console.log(almash([1, 2, 3]));

// 50-MASALA. Kinoteatrga bolalar kino ko’rgani kirmoqchi bunda 2ta talab mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa funksiya true qaytarsin aks holda false.

// function kinogaKirish(yosh, otaOna) {
//     if (yosh > 15 && otaOna == true) {
//         return "true";
//     } else {
//         return "false";
//     }
// }
// console.log(kinogaKirish(14, true));

// 51-MASALA. Quyidagi namunalarda kamchilik bor funksiya aslida har bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri yasang.

// function oshir1ga(arr) {
//     return arr.map((element) => element + 1);
// }
// console.log(oshir1ga([2, 3, 4]));
// console.log(oshir1ga([2, 4, 6, 8]));
// 52-MASALA ???
// 53-MASALA ???

// 54-MASALA.Funksiya string qabul qiladi. Agar ushbu stringning uzunligi. juft bo’lsa funksiya true qaytarsin, aks holda false.

// function sozUzunligi(str) {
//     return str.length % 2 == 0;
// }
// console.log(sozUzunligi("apples"));
// console.log(sozUzunligi("pears"));

// 55-MASALA.Funksiya 2ta argument qabul qiladi. Ikkala argument ham son, funksiya 1-sonni 2-songa darajaga ko’tarilgan qiymatni qaytarsin.

// function daraja(x, y) {
//     return x ** y;
// }
// console.log(daraja(5, 5));
// console.log(daraja(3, 3));