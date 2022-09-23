

let formular = document.querySelector("#formular")
let list = checknewuser()

formular.addEventListener("submit", function(e){

    list = checknewuser()

    e.preventDefault()
    let objekt = {
        id: uuidv4(),
        name: e.target.elements.jmeno.value,
        adult: e.target.elements.adultak.checked
    }

    list.push(objekt)
    
    e.target.elements.jmeno.value = ""
    

    localStorage.setItem("users", JSON.stringify(list))
})

document.querySelector("#vypis").addEventListener("click", function(e){
    document.querySelector("#list").innerHTML = ""
    let list = JSON.parse(localStorage.getItem("users"))

    if (list !== null) {
        list.forEach(oneobj => {
            let newD = document.createElement("div")
                document.querySelector("#list").appendChild(newD)

            let newCheck = document.createElement("input")

                newCheck.type = "submit"
                newCheck.value = "vymaž"
                newCheck.name = oneobj.id
                newCheck.className = "btn btn-primary"
                
                
                newD.appendChild(newCheck)

                newCheck.addEventListener("click", function(){
                        console.log(list)
                        let index = 0
                        list.forEach(objct => {
                            
                            if (newCheck.name === objct.id){
                                
                                list.splice(index,1)
                                
                                localStorage.setItem("users", JSON.stringify(list))
                                document.querySelector("#list").innerHTML = ""
                                rekurzeNEWelement()
                            }
                            index++
                            console.log(index)
                         });
                         console.log(list)
                })

            let newA = document.createElement("a")
                newA.innerHTML = oneobj.name
                newA.setAttribute("href", `edit.html#${oneobj.id}`)
                if (oneobj.adult === true){
                    newA.classList.add("dospely")
                } else {
                    newA.classList.add("dite")
                }               
                newD.appendChild(newA)


            });
   
        } 
          
  

})