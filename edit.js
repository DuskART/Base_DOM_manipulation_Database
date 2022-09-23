let myFORMedit = document.querySelector(".upravak")


let list = localStorage.getItem("users")
let listJSN = JSON.parse(list)







let jedenOBJ = listJSN.filter(function(o){
   return ("#" + o.id) === location.hash
})

let poradiINDEX = listJSN.findIndex(obje => {
   return obje.id === jedenOBJ[0].id
})






let ostatniOBJ = listJSN.filter(function(o){
   return ("#" + o.id) !== location.hash
})



let okno = document.querySelector(".editacek") 
okno.value = jedenOBJ[0].name


myFORMedit.addEventListener("submit", function(e){
   e.preventDefault()
   jedenOBJ[0].name = e.target.elements.editace.value
   console.log(jedenOBJ)
   console.log(ostatniOBJ)


   let arrayCON = jedenOBJ.concat(ostatniOBJ)
   let arrayCONS = JSON.stringify(arrayCON)
   localStorage.setItem("users", arrayCONS)



})
console.log(poradiINDEX)
