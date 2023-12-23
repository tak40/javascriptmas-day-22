/** @format */

let people = JSON.parse(localStorage.getItem('peopleList')) || []

const inputFieldEl = document.getElementById('input-field')
const addButtonEl = document.getElementById('add-button')
const peopleListEl = document.getElementById('people-list')

addButtonEl.addEventListener('click', function () {
    let inputValue = inputFieldEl.value

    if (inputValue && !people.includes(inputValue)) {
        people.push(inputValue)

        localStorage.setItem('peopleList', JSON.stringify(people))

        clearInputFieldEl()

        renderList(people)
    } else {
        alert('Please enter a unique name or a non-empty value.')
    }
})

function renderList(array) {
    clearPeopleListEl()

    for (let i = 0; i < array.length; i++) {
        let currentPerson = array[i]

        appendPersonToPeopleListEl(currentPerson)
    }
}

function clearPeopleListEl() {
    peopleListEl.innerHTML = ''
}

function clearInputFieldEl() {
    inputFieldEl.value = ''
}

function appendPersonToPeopleListEl(person) {
    let newEl = document.createElement('li')

    newEl.textContent = person

    newEl.addEventListener('dblclick', function () {
        let index = people.indexOf(person)

        if (index > -1) {
            people.splice(index, 1)
        }

        localStorage.setItem('peopleList', JSON.stringify(people))

        renderList(people)

        replaceImageWithGif()
    })

    peopleListEl.append(newEl)
}

function replaceImageWithGif() {
    let imgEl = document.querySelector('img')
    if (imgEl) {
        imgEl.src = 'https://media.giphy.com/media/hZj44bR9FVI3K/giphy.gif'
    }
}

renderList(people)