// // Задача 1. Вывести в консоли:

// let laptops = [
//     {
//         mark : "Acer",
//         price : 25000
//     },
//     {
//         mark : "Apple",
//         price : 37000
//     },
//     {
//         mark : "Asus",
//         price : 125500,
//     },
//     {
//         mark : "HP",
//         price : 42000
//     },
//     {
//         mark : "Samsung",
//         price : 52000
//     }
// ]

// // а) все ноутбуки. лучше с разметкой HTML

// for (let i = 0; i < laptops.length; i++) {
// console.log(
//     `<div>
//     <p>${laptops[i].mark}</p>
//     <p>${laptops[i].price}</p>
//     </div>`
// )
// }

// // б) все ноутбуки, цена которых больше 40000.

// for (let i = 0; i < laptops.length; i++) {
//     if (laptops[i].price > 40000) {
//         console.log(laptops[i].mark + " - price " + laptops[i].price);
//     }
// }

// // в) Посчитать сумму цен всех ноутбуков. Итого.

// let sum = 0
// for (let i = 0; i < laptops.length; i++) {
//     sum += laptops[i].price
// }
// console.log(sum);

// // Задача.2

// let laptopsSecond = [
//   {
//     mark: "Acer",
//     category: ["laptop", "tech"],
//     price: 25000,
//   },
//   {
//     mark: "Apple",
//     category: ["notebook", "tech"],
//     price: 37000,
//   },
//   {
//     mark: "Asus",
//     category: ["computer", "premium"],
//     price: 125500,
//   },
//   {
//     mark: "HP",
//     category: ["computer", "tech"],
//     price: 42000,
//   },
//   {
//     mark: "Samsung",
//     category: ["notebook", "premium"],
//     price: 52000,
//   },
// ];

// а) Вывести все ноутбуки, у которых есть категория "laptop"

// for (let i = 0; i < laptopsSecond.length; i++) {
//   if (laptopsSecond[i].category[i] == "laptop") {
//     console.log(laptopsSecond[i].mark + " " + laptopsSecond[i].price);
//   }
// }

// б) Вывести все ноутбуки, у которых категория "premium"

// for (let i = 0; i < laptopsSecond.length; i++) {
//     if (laptopsSecond[i].category[1] == "premium") {
//       console.log(laptopsSecond[i].mark + " " + laptopsSecond[i].price);
//     }
//   }

// в) Вывести все ноутбуки, у которых категория "tech"

// for (let i = 0; i < laptopsSecond.length; i++) {
//     if (laptopsSecond[i].category[1] == "tech") {
//       console.log(laptopsSecond[i].mark + " " + laptopsSecond[i].price);
//     }
//   }

// Задача 3.

// Запрашивать у пользователя Марку и Цену ноутбука три раза.
// Марку и цену ноутбука объединять в объект и добавлять(push) в массив laptops=[]-пустой
// Итого будет массив из трех объектов.

// let laptops = [];

// for (let i = 0; i < 3; i++) {
//     let mark = prompt("mark");
//     let price = +prompt("price");

//     laptops.push({mark, price})
// }
// console.log(laptops);

// Задача 4.
// У пользователя с prompta запрашивать марку/цену. // По его ответу в консоли ввыводить ноутбуки с разметкой.

// let laptopsThird = [
//   {
//     mark: "Acer",
//     category: ["laptop", "tech"],
//     price: 25000,
//   },
//   {
//     mark: "Apple",
//     category: ["notebook", "tech"],
//     price: 37000,
//   },
//   {
//     mark: "Asus",
//     category: ["computer", "premium"],
//     price: 125500,
//   },
//   {
//     mark: "HP",
//     category: ["computer", "tech"],
//     price: 42000,
//   },
//   {
//     mark: "Samsung",
//     category: ["notebook", "premium"],
//     price: 52000,
//   },
// ];

// let ymark = prompt("mark");
// let yprice = +prompt("price");

// for (let i = 0; i < laptopsThird.length; i++) {
//      if (laptopsThird[i].mark == ymark && laptopsThird[i].price <= yprice) {
//            console.log(`
//         <div>
//         <p>${laptopsThird[i].mark}</p>
//         <p>${laptopsThird[i].category}</p>
//         <p>${laptopsThird[i].price}</p>
//         </div>
//         `);
    
//     }
// }


// Какую марку вы бы хотели? -Acer. Выводим хар-ки Acer

// let ymark = prompt("mark");

// for (let i = 0; i < laptopsThird.length; i++) {
//     if (laptopsThird[i].mark == ymark) {
//           console.log(`
//        <div>
//        <p>${laptopsThird[i].mark}</p>
//        <p>${laptopsThird[i].category}</p>
//        <p>${laptopsThird[i].price}</p>
//        </div>
//        `);
   
//    } 
// }

// На какую цену вы рассчитываете? -50000. Выводить все ноутбуки, которые удовл-т(меньше) этой цене

// let yprice = +prompt("your desired price");

// for (let i = 0; i < laptopsThird.length; i++) {
//      if (laptopsThird[i].price <= yprice) {
//            console.log(`
//         <div>
//         <p>${laptopsThird[i].mark}</p>
//         <p>${laptopsThird[i].category}</p>
//         <p>${laptopsThird[i].price}</p>
//         </div>
//         `);
    
//     }
// }