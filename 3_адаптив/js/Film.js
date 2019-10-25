films = [
    film1 = {
        name: 'Человек паук',
        start: '12:00',
        ganar: [0, 1],
        hire: false,
        new: true,
        description: 'Lorem ipsum dolor sit amet consectetur',

    },
    film2 = {
        name: 'Собачья жизнь',
        start: '16:00',
        ganar: [2, 3, 4],
        hire: false,
        new: true,
        description: 'Lorem ipsum dolor sit amet consectetur',
    },

    film3 = {
        name: 'История игрушек 4',
        start: [2, 4, 5],
        hire: false,
        new: true,
        description: 'Lorem ipsum dolor sit amet consectetur',
    },

    film4 = {
        name: 'Люди в черном Интернешнл',
        start: '19:00',
        ganar: [0, 1, 4],
        hire: false,
        new: true,
        description: 'Lorem ipsum dolor sit amet consectetur',
    },
]

const ganars = [
    'Фантастика',
    'Боевик',
    'Фэнтези',
    'Драма',
    'Комедия',
    'Мультфильм',
]

console.log('ganars', ganars)

console.log('films', films)

let filmsHire = []

let filmsNew = []

for (let i = 0; i < films.length; i++) {
    if (films[i].hire === true) {
        filmsHire.push(films[i])
    }

    if (films[i].hire === false && films[i].new === true)
        filmsNew.push(films[i])
}
// console.log('Для секции Выберете фильм', filmsHire)
// console.log('Для секции Новинки слайдер', filmsNew)

const film = {
    getName: function() {
        return this.name
    },
    getStart: function() {
        return this.start
    },
    getGanar: function() {
        const ganarsFilm = this.ganar
        let arrGanars = []
        for (let i = 0; i < ganarsFilm; i++) {

            arrGanars.push(ganars[ganarsFilm[i]])
        }
        let strGanars = arrGanars.join(', ')
        return strGanars
            // console.log('Жанры фильмов', strGanars)
    }
}
let orderForm = document.getElementById('orderForm')
let closeOrderForm = document.getElementById('closeOrderForm')
closeOrderForm.onclick = function() {
    orderForm.style.display = 'none'
}
for (let i = 0; i < filmsHire.length; i++) {
    const filmName = film.getName.bind(filmsHire[i])()
    const filmStart = film.getStart.bind(filmsHire[i])()
    const filmGanar = film.getGanar.bind(filmsHire[i])()
    let filmsHireHTML = document.getElementById('filmsHire')


    let filmHTML = `
    
        <td>
        <input type = "checkbox" class = "block03__checkbox" id = "block03__checkbox1" ></input>
        <label for = "block03__checkbox1">
        <i class = "icon icon-check" title = "check"></i></label> 
    </td>
    <td id = "start_film_${1}">${filmName}</td> 
    <td id = "name_film_${1}">${filmStart}</td> 
    <td id = "ganar_film_${1}">${filmGanar}</td>
 `

    let tr = document.createElement("tr")
    tr.className = 'strFilmHire'
    tr.innerHTML = filmHTML

    tr.onclick = function() {
        orderForm.style.display = 'block'
    
let orderFilmName = document.getElementById('orderFilmsName')
let orderFilmStart = document.getElementById('orderFilmStart')
let orderFilmGanar = document.getElementById('orderFilmGanar')

orderFilmName.innerHTML = filmName
orderFilmStart.innerHTML = filmStart
orderFilmGanar.innerHTML = filmGanar

        console.log(this)
    }
    filmsHireHTML.appendChild(tr)   
    console.log(tr)
}


// const listFilms = document.querySelectorAll('.strfilmsHire')
// console.log('listFilms', listFilms)















const ganar_1 = 'фантастика'
const ganar_2 = 'боевик'
const ganar_3 = 'приключения'
const ganar_4 = 'фэнтези'
const ganar_5 = 'драма'
const ganar_6 = 'комедия'
const ganar_7 = 'мультфильм'

let start_film_1 = '10:00'
let start_film_2 = '12:00'
let start_film_3 = '14:00'
let start_film_4 = '16:00'

let name_film_1 = 'Человек-паук'
let name_film_2 = 'Собачья жизнь 2'
let name_film_3 = 'История игрушек 4'
let name_film_4 = 'Люди в черном Интернешнл'

name_film_1 = 'Человек паук'
name_film_2 = 'Собачья жизнь 2'
name_film_3 = 'История игрушек 4'
name_film_4 = 'Люди в черном Интернешнл'

// console.log('фильм 1', 'name_film_1')
// console.log('фильм 2', 'name_film_2')
// console.log('фильм 3', 'name_film_3')
// console.log('фильм 4', 'name_film_4')

let ganar_film_1 = ganar_1 + ', ' + ganar_2 + ', ' + ganar_3
let ganar_film_2 = ganar_4 + ', ' + ganar_5 + ', ' + ganar_6
let ganar_film_3 = ganar_4 + ', ' + ganar_6 + ', ' + ganar_7
let ganar_film_4 = ganar_1 + ', ' + ganar_2 + ', ' + ganar_6


let element_start_film_1 = document.getElementById('start_film_1')
let element_name_film_1 = document.getElementById('name_film_1')
let element_ganar_film_1 = document.getElementById('ganar_film_1')

let element_start_film_2 = document.getElementById('start_film_2')
let element_name_film_2 = document.getElementById('name_film_2')
let element_ganar_film_2 = document.getElementById('ganar_film_2')

let element_start_film_3 = document.getElementById('start_film_3')
let element_name_film_3 = document.getElementById('name_film_3')
let element_ganar_film_3 = document.getElementById('ganar_film_3')

let element_start_film_4 = document.getElementById('start_film_4')
let element_name_film_4 = document.getElementById('name_film_4')
let element_ganar_film_4 = document.getElementById('ganar_film_4')

element_start_film_1.innerHTML = start_film_1
element_name_film_1.innerHTML = name_film_1
element_ganar_film_1.innerHTML = ganar_film_1

element_start_film_2.innerHTML = start_film_2
element_name_film_2.innerHTML = name_film_2
element_ganar_film_2.innerHTML = ganar_film_2

element_start_film_3.innerHTML = start_film_3
element_name_film_3.innerHTML = name_film_3
element_ganar_film_3.innerHTML = ganar_film_3

element_start_film_4.innerHTML = start_film_4
element_name_film_4.innerHTML = name_film_4
element_ganar_film_4.innerHTML = ganar_film_4

// console.log('element_start_film_1', element_ganar_film_1)
// console.log('element_start_film_2', element_ganar_film_2)
// console.log('element_start_film_3', element_ganar_film_3)
// console.log('element_start_film_4', element_ganar_film_4)





// let tr = document.createElementNS("tr")
// tr.className = 'strFilmHire'
// tr.innerHTML = filmHTML
// tr.onclick = function() {

//     let orderForm = document.getElementById('orderForm')

//     orderForm.onclick = function() {
//         orderForm.style.display = 'block'
//         let orderFilmName = document.getElementById('orderFilmName')
//         let orderFilmStart = document.getElementById('orderFilmStart')
//         let orderFilmGanar = document.getElementById('orderFilmGanar')
//         orderFilmName.innerHTML = filmName
//         orderFilmNStart.innerHTML = filmStart
//         orderFilmGanar.innerHTML = filmGanar


//         console.log(this)

//     }
//     filmsHireHTML.appenChild(tr)

// }

// let sendOrder = document.getElementById('sendOrder')
// sendOrder.onclick = function() {

// }

// // const listFilms = document.querySelectorAll('.strfilmsHire')
// // console.log('listFilms', listFilms)