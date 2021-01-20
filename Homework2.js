// //Task 1
// let m1 = [3, 4, 9, 0, -1.1];
// console.log(m1);

// //Task 2
// let m2 = ["3", "4", "", "eee", "error"];
// console.log(m2);

// //Task 3
// let m3 = ["feel", 45, !!"-1", 6 > 32, -1.5];
// console.log(m3);

// //Task 4
// let m4 = [];
// m4[0] = 65;
// m4[1] = 34 < 67;
// m4[6] = "I looking for job)";
// m4[7] = "k.kosetska@gmail.com";
// console.log(m4);

// //Task 5
// for (let i = 0; i < 10; i++) {
//   document.write("<div> I can play the piano </div>");
// }

//Task 6
// for (let i = 0; i < 10; i++) {
//   document.write("<div> I can eat " + i + " cookie </div>");
// }

//Task 7
// let i = 0;
// while (i < 20) {
//   i++;
//   document.write("<h1> I conduct orchestra </h1>");
// }

//Task 8
// let i = 0;
// while (i < 20) {
//   i++;
//   document.write(
//     `<h1> I have more then ${i} orchestrants in my orchestra </h1>`
//   );
// }

//Task 9
// let m9 = [3, 4, 9, 0, -1.1, 76, 43, 65, 4.5, 3];
// m9.forEach((element) => {
//   console.log(element);
// });

//Task 10
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

// Task 11
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

// Task 12,13,14
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
// m12.forEach((element) => {
//   if (typeof element == "boolean") {
//     console.log(element);
//   }
// });

// m12.forEach((element) => {
//   if (typeof element == "number") {
//     console.log(element);
//   }
// });

// m12.forEach((element) => {
//   if (typeof element == "string") {
//     console.log(element);
//   }
// });

// Task 15
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

// Task 16

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   document.write(i + "<br>");
// }

// Task 17

// for (let i = 0; i < 100; i++) {
//   console.log(i);
//   document.write(i + "<br>");
// }

// // Task 18

// for (let i = 0; i < 100; i += 2) {
//   console.log(i);
//   document.write(i + "<br>");
// }

// Task 19

// for (let i = 0; i < 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//     document.write(i + "<br>");
//   }
// }

// Task 20

// for (let i = 0; i < 100; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//     document.write(i + "<br>");
//   }
// }

//Task 21

// for (let minute = 0; minute < 2; minute++) {
//   for (let second = 0; second < 60; second++) {
//     console.log(minute, second);
//     document.write(`${minute}:${second} <br>`);
//   }
// }

//Task 22
// for (let hour = 0; hour < 2; hour++) {
//   for (let minute = 0; minute < 60; minute++) {
//     for (let second = 0; second < 60; second++) {
//       console.log(hour, minute, second);
//       document.write(`${hour}:${minute}:${second} <br>`);
//     }
//   }
// }

//Task extra

// let mEx = ["l", "i", "m", "e"];
// let result = "";
// for (const letter of mEx) {
//   result += letter;
// }
// console.log(result);
// document.write(result);
