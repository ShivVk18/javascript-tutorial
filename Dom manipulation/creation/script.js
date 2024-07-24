const body = document.querySelector('body')
body.style.backgroundColor = "grey"
body.style.color = "white"


const div = document.createElement('div')

console.log(div)

div.className = "date"
div.id = Math.round(Math.random()*10+2)

div.setAttribute("title","generated title")

div.style.backgroundColor = "green"
div.style.padding = "12px"

// div.innerText = "chai aur code"

const addtext = document.createTextNode("Chai aur code")

const display = div.appendChild(addtext)

document.body.appendChild(div)