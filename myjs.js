
let container = document.getElementById("container");


function generateGrid(){
    
    for (let i=0; i<256; i++) {
        
        let box = document.createElement('div');
        
        box.classList.add('gridSquare');

        container.appendChild(box);

        box.addEventListener('mouseover', ()=>{
            box.style.backgroundColor= "#00BB00"})

    }
}

window.onload = () => {
    generateGrid()
 }
 







/*const container = document.querySelector('#container');

function generateGrid(){
    for (let i=0; i < 256; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.textContent = 'This is the glorious text-content!';
        container.appendChild(box);
        box.addEventListener('mouseover', function() {
            box.style.backgroundColor = "00BB00";})
        
    }
}



document.querySelector('.my-element').addEventListener('click', event => {
    //handle click
  })

document.querySelector('.box').addEventListener('mouseover', event => {
    box.style.backgroundColor = "#00BB00";})

document.querySelector('.box').addEventListener('onclick', event => {box.style.backgroundColor = "00BB00";})


window.onload = () => {
   generateGrid()
}
*/