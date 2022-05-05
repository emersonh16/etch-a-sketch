const container = document.querySelector('#container');

document.getElementById("mybtn").addEventListener("click", generateGrid);

function generateGrid(){
    for (let i=0; i < 256; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.textContent = 'This is the glorious text-content!';
        container.appendChild(box);
    }
}


