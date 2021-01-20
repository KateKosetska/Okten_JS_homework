// Task 1 --створити масив та вивести його в консоль:
// - з 5 числових значень
// let m1 = [3, 4, 9, 0, -1.1];
// console.log(m1);

// Task 2 - з 5 стічкових значень
// let m2 = ["3", "4", "", "eee", "error"];
// console.log(m2);

// Task 3 - з 5 значень стрічкового, числового та булевого типу
// let m3 = ["feel", 45, !!"-1", 6 > 32, -1.5];
// console.log(m3);

// Task 4 -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let m4 = [];
// m4[0] = 65;
// m4[1] = 34 < 67;
// m4[6] = "I looking for job)";
// m4[7] = "k.kosetska@gmail.com";
// console.log(m4);

// Task 5 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//   document.write("<div> I can play the piano </div>");
// }

//Task 6 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//   document.write("<div> I can eat " + i + " cookie </div>");
// }

//Task 7 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//   i++;
//   document.write("<h1> I conduct orchestra </h1>");
// }

//Task 8 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//   i++;
//   document.write(
//     `<h1> I have more then ${i} orchestrants in my orchestra </h1>`
//   );
// }

//Task 9 - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let m9 = [3, 4, 9, 0, -1.1, 76, 43, 65, 4.5, 3];
// m9.forEach((element) => {
//   console.log(element);
// });

//Task 10 - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let m10 = [
//   "4",
//   "54",
//   "music",
//   "Darth Vader",
//   "З Різдвом!",
//   "",
//   "0.6578",
//   "Путін Хуйло",
//   "Крим = Україна",
//   "Слава Нації!",
// ];
// m10.forEach((element) => {
//   console.log(element);
// });

// Task 11 - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let m11 = [
//   666,
//   "music",
//   58 > 4758,
//   "Darth Vader",
//   "З Різдвом!",
//   true,
//   "0.6578",
//   "Путін Хуйло",
//   "Крим = Україна",
//   "Слава Нації!",
// ];
// m11.forEach((element) => {
//   console.log(element);
// });

// Task 12,13,14 - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// let m12 = [
//   666,
//   "music",
//   58 > 4758,
//   "Darth Vader",
//   "З Різдвом!",
//   true,
//   "0.6578",
//   "Путін Хуйло",
//   "Крим = Україна",
//   "Слава Нації!",
// ];

// За допомогою if та typeof вивести тільки булеві елементи
// m12.forEach((element) => {
//   if (typeof element == "boolean") {
//     console.log(element);
//   }
// });

// За допомогою if та typeof вивести тільки числові елементи
// m12.forEach((element) => {
//   if (typeof element == "number") {
//     console.log(element);
//   }
// });

// За допомогою if та typeof вивести тільки рядкові елементи
// m12.forEach((element) => {
//   if (typeof element == "string") {
//     console.log(element);
//   }
// });

// Task 15 - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let m15 = [];
// m15[0] = 54 > 56 && 76 > 54;
// m15[1] = "vacancies";
// m15[2] = 69;
// m15[3] = true == true;
// m15[4] = 98 <= "gr";
// m15[5] = `Do you have ${m15[1]}?`;
// m15[6] = "For intern...";
// m15[7] = "Yes, I'm asking you!";
// m15[8] = 8675 >= 7584;
// m15[9] = -Infinity;

// for (const element of m15) {
//   console.log(element);
// }

// Task 16 - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   document.write(i + "<br>");
// }

// Task 17 - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//   console.log(i);
//   document.write(i + "<br>");
// }

// Task 18 - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i += 2) {
//   console.log(i);
//   document.write(i + "<br>");
// }

// Task 19 - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//     document.write(i + "<br>");
//   }
// }

// Task 20 - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//     document.write(i + "<br>");
//   }
// }

//Task 21 - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let minute = 0; minute < 2; minute++) {
//   for (let second = 0; second < 60; second++) {
//     console.log(minute, second);
//     document.write(`${minute}:${second} <br>`);
//   }
// }

//Task 22 - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for (let hour = 0; hour < 3; hour++) {
  for (let minute = 0; minute < 60; minute++) {
    for (let second = 0; second < 60; second++) {
      console.log(hour, minute, second);
      document.write(`${hour}:${minute}:${second} <br>`);
      //continue;
      if (hour == 2 && minute == 0 && second == 0) {
        break;
      }
    }

    if (hour == 2 && minute == 0) {
      break;
    }
  }
}

//Task extra - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let mEx = ["l", "i", "m", "e"];
// let result = "";
// for (const letter of mEx) {
//   result += letter;
// }
// console.log(result);
// document.write(result);
