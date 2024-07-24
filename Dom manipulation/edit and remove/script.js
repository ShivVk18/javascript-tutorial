function addLanguage(LangName){
      const li = document.createElement('li');
      li.innerHTML = `${LangName}` //isme puri tree traverse hoti jisse bade projects mai dikkat ayega
      document.querySelector('.language').appendChild(li)
}

addLanguage("python")
addLanguage("typescript")


function addOptiLang(LangName){
   const li = document.createElement('li')
   li.appendChild(document.createTextNode(LangName)) // isme sirf textnodes bna rhe hai no tranversing
   document.querySelector('.language').appendChild(li)
}

addOptiLang("Golang")

//Edit-2

const secondlang = document.querySelector("li:nth-child(2)")
//non optimized way -> secondLand.innerHTML = "MOJO"
//optimizzed
const newli = document.createElement('li')
newli.textContent = "MOJO"
secondlang.replaceWith(newli)


//edit -2
const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = '<li>typescript</li>'


//remove
const  lastLang = document.querySelector("li:last-child")
lastLang.remove()
