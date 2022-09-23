let checknewuser = function(){
    
    let listFromStorage = JSON.parse(localStorage.getItem("users"))
  
    if (listFromStorage !== null) {
        return listFromStorage
    } else {
        return []
    }
}

// funkce z tohoto
// }


let rekurzeNEWelement = function(){
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

            let newspan = document.createElement("span")
                newspan.innerHTML = oneobj.name

                if (oneobj.adult === true){
                    newspan.classList.add("dospely")
                } else {
                    newspan.classList.add("dite")
                }               
                newD.appendChild(newspan)


            });
   
        } 
    }       
