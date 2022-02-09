
//h2 / h4
const h2 = document.createElement("h2")
h2.innerHTML = "Torre de Hanoi"

document.body.appendChild(h2)

const h4 = document.createElement("h4")

h4.innerHTML = "Escolha a dificuldade"

document.body.appendChild(h4) 



//h2 / h4


 //hanoi
const hanoi = document.createElement("section")

hanoi.classList.add('hanoi')

document.body.appendChild(hanoi)


//hanoi


//medidor de dificuldade 
//colocar 3 eventbutton para escolher a quantidade de disks 4 a 6 
//BUTTON
let dificuldade = 0
for(let i = 0; i < 3; i++){

    

    const niveis_de_Dificuldade = ['fácil','médio','difícil']

    let button = document.createElement("button")

    button.classList.add('dificuldade')

    button.innerText = niveis_de_Dificuldade[i]

    hanoi.appendChild(button)

}
const buttons = document.getElementsByClassName('dificuldade')



buttons[0].addEventListener("click", () => {
    
    if(dificuldade !== 5){
    dificuldade = 5
    return disk()
    
}

    
})
buttons[1].addEventListener("click", () => {
    if(dificuldade !== 6){
        dificuldade = 6
    return disk()
    }
})
buttons[2].addEventListener("click", () => {

    if(dificuldade !== 7){
        dificuldade = 7
    return disk()
    }
})



//button


//disk






function disk(){

    towers[0].innerHTML = ""
    towers[1].innerHTML = ""
    towers[2].innerHTML = ""
    
    
for(let i = 1; i < dificuldade; i++){

    let disk = document.createElement("div")
    
    disk.classList.add('disk' + i)

   
    towers[0].appendChild(disk)

    
}

}



//disk


//TOWER
//torres onde vai ficar os discos



for(let i = 0; i < 3; i++){

    let tower = document.createElement("div")
    
    tower.classList.add('tower')

    hanoi.appendChild(tower)

}

const towers = document.getElementsByClassName('tower')

let count = 0

let torreAtual = 0

let diskAtual = 0

let torreAnterior = 0

let jogada = true

towers[0].addEventListener("click",(event) =>{
  
    if(towers[0].childElementCount > 0){   
        
        torreAnterior = towers[0].lastElementChild.clientWidth
       
    }

    if(torreAnterior >= torreAtual && diskAtual !== 0 && jogada === false){

       
        towers[0].appendChild(diskAtual)
    

        torreAtual = 0
    
        diskAtual = 0
    
        torreAnterior = 0
            
        jogada = true

    }

    else if (event.target.className.includes("tower")&& jogada === true){
    
        torreAtual = event.target.lastElementChild.clientWidth

        jogada = false

        if(torreAtual > 0){
        
            
            diskAtual = towers[0].lastElementChild
            
            
        }
  
    }
    

    count++

})

    
towers[1].addEventListener("click",(event) =>{

   
    if(towers[1].childElementCount > 0){   
       
        torreAnterior = towers[1].lastElementChild.clientWidth
        
    }


    if( torreAnterior >= torreAtual && diskAtual !== 0   && jogada === false){
    
        towers[1].appendChild(diskAtual)

        torreAtual = 0

        diskAtual = 0

        torreAnterior = 0
        
        jogada = true

    }    


    else if (event.target.className.includes("tower") && jogada === true){
    
        torreAtual = event.target.lastElementChild.clientWidth

        jogada = false

        if(torreAtual > 0){

        diskAtual = towers[1].lastElementChild

        }   

    }
   
    
    count++

})

towers[2].addEventListener("click",(event) =>{
    
    if(towers[2].childElementCount > 0){   

        torreAnterior = towers[2].lastElementChild.clientWidth
       
    }
    
    if(torreAnterior >= torreAtual && diskAtual !== 0 && jogada === false ){
    
        towers[2].appendChild(diskAtual)
        
        torreAtual = 0
    
        diskAtual = 0

        torreAnterior = 0

        jogada = true

    }


    else if (event.target.className.includes("tower" )&& jogada === true){
    
        torreAtual = event.target.lastElementChild.clientWidth
        
        jogada = false

        if(torreAtual > 0){

            diskAtual = towers[2].lastElementChild

            
        }

    }
    
    count++

    if(towers[2].childElementCount === dificuldade - 1){
       
        venceu.style.display = "block"

    }

})




//TOWER

//Vencer e perder




const venceu = document.createElement("h3")

venceu.innerText = "Parabens vc venceu"

venceu.classList.add("fimDeJogo")

document.body.appendChild(venceu)






//Vencer e perder

