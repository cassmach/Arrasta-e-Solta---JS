
document.querySelectorAll('.item').forEach(item => {
                // Evento do começo do arrasta
    item.addEventListener('dragstart', dragStart);
            // Evento quando solta 
    item.addEventListener('dragend', dragEnd);
});


document.querySelectorAll('.area').forEach( area =>{
    area.addEventListener('dragover', dragOver); // Evento que roda função quando passa por cima da area
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});



// Functions Item
function dragStart(e) {
    e.currentTarget.classList.add('dragging');
}


function dragEnd(e){
    e.currentTarget.classList.remove('dragging');

}


// Functions Area
function dragOver (e) {
    e.preventDefault();
            // adicionar  a classe hover 
    e.currentTarget.classList.add('hover');
};

function dragLeave (e){
    // quando eu sair irá tirar a classe do item 
    e.currentTarget.classList.remove('hover');

};

function drop (e) {
    // quando der o drop remover o hover
    e.currentTarget.classList.remove('hover');

    let dragItem = document.querySelector('.item.dragging');


    if (e.currentTarget.querySelector('.item') === null){
            // appendChild para adicionar um elemento dentro do item
        e.currentTarget.appendChild(dragItem);
    }
}
