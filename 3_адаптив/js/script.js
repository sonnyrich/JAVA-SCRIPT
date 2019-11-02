// let p = new Promise((resolve, reject) => {
//     var url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e2c01b015b375681951ef2536440f652';

//     var request = new XMLHttpRequest(); //XHR

//     request.open('GET', url, true);

//     request.onload = function() {
//         if (this.status >= 200 && this.status < 400) {
//             // Success!

//             var data = JSON.parse(this.response);
//             // console.log(data)
//             resolve(data)
//         } else {
//             // We reached our target server, but it returned an error
//             reject(error)
//         }
//     };

//     request.onerror = function() {
//         // There was a connection error of some sort
//     };

//     request.send();
// })

// p.then((data) => {
// console.log('films:', data)
// }).catch(error) => {
// console.log('Нет фильмов')
// })






































//Домашнее задание)))

// let film =[
//     ['10:00', 'Человек паук', 2],
//     ['10:00', 'Человек паук', 2],
//     ['12:00', 'Собачья жизнь 2', 2],
//     ['14:00', 'Люди в черном Интернешнл 4', 1],
// ]

// let ganars = ['фантастика', 'боевик', 'приключения']

// for(let i = 0 filsadsa)

// if (film)   

// films[2]

//     ganars [films[i]]

//     let element_start_film_1 = document.getElementById('start_film_1')
//     element_start_film_1.innerHTML = film[0]

//     let element_start_film_1 = document.getElementById('name_film_1')
//     element_name_film_1.innerHTML = name_film_1film[1]

//     let element_start_film_1 = document.getElementById('ganar_film_1')
//     element_ganar_film_1.innerHTML = film[2]
//................................

// // Шаблонные строки

// function greet(name) {
//     console.log('Hello' + name)
// }

// greet('Tor')

// function createEmail(to, from, subject, message) {
//     console.log(`

// to: ${to}
// from:${from}
// subject:${subject}
// message:${message}
// `)

// }
// createEmail('Lokki', 'Tor', 'Hi brother', 'Give me Hummer')

// function add(x, y) {
//     console.log(`${x} + ${y} - ${x-y}`)
// }
// add(7, 5)

// //Тегирование

// let name = 'Tor'
// console.log(`Hello${name}`)

// function upperName(Literals, value) {
//     console.log(Literals, value)
//     return Literals[0] + value.toUpperCase()
// }

// //Деструктуризация

// // let heroes = ['Lokki', 'Tor', 'Hulk', 'Iron Man']
// //     //получить каждый элемент отдельно МАССИВА
// // let Lokki = heroes[0]
// // let tor = heroes[1]
// // let hulk = heroes[2]
// // let ironman = heroes[3]

// // console.log(Lokki, Tot, hulk, ironman)

// let scores = [3, 4, [5, 6]]
// let [low, mid, high] = scores

// console.log(low, mid, high)
//     // rest массив остаточных параметров


// // function computeScore([low, mid]) {
// //     console.log(low, mid)

// // }
// // computeScore([3, 4])

// // function gerScore() {
// //     return [3, 4, 5, 6]
// // }
// //     let scores = getScore()
// //     console.log(scores)

// let yes = 'yes';
// let no = 'no';

// [yes, no] = [no, yes]

// console.log('Yes is', yes)
// console.log('No is', no)

// let person = {
//     name: 'Tor',
//     weapon: 'Hummer'
// }

// let { name, weapon } = person


// console.log(name, weapon)