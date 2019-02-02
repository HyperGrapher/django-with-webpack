const name = document.getElementById('name')
const counter = document.getElementById('counter')

let count = 0

name.innerText = 'Burak norma'

setInterval(() => counter.innerText = ++count, 1000)
