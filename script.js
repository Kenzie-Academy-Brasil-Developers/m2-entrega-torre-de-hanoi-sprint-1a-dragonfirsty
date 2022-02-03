
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
    dificuldade = 5
    return disk()
})
buttons[1].addEventListener("click", () => {
    dificuldade = 6
    return disk()
})
buttons[2].addEventListener("click", () => {
    dificuldade = 7
    return disk()
})









//button


//disk
function disk(){

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

//TOWER






