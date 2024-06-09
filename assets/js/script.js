
// area onde vai preencher as informações
let areas = {
    a: null,
    b: null,
    c: null
}



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



document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral)

// Functions Item
function dragStart(e) {
    e.currentTarget.classList.add('dragging');
}


function dragEnd(e){
    e.currentTarget.classList.remove('dragging');

}


// Functions Area
function dragOver (e) {// só funciona quando nao tem nenhum item dentro onde quer soltar
    if (e.currentTarget.querySelector('.item') === null){

    e.preventDefault();
            // adicionar  a classe hover 
    e.currentTarget.classList.add('hover');
    }
};

function dragLeave (e){
    // quando eu sair irá tirar a classe do item 
    e.currentTarget.classList.remove('hover');

};

function drop (e) {
    // quando der o drop remover o hover
    e.currentTarget.classList.remove('hover');



    if (e.currentTarget.querySelector('.item') === null){
            // appendChild para adicionar um elemento dentro do item
            let dragItem = document.querySelector('.item.dragging');

        e.currentTarget.appendChild(dragItem);
        updateAreas();
    }
}


// functions neutral area


function dragOverNeutral (e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
};

function dragLeaveNeutral (e) {
    e.currentTarget.classList.remove('hover')
};


function dropNeutral (e) {
    e.currentTarget.classList.remove('hover');

    // Processo de drop 
    let dragItem = document.querySelector('.item.dragging');// aqui ele pega o item

        e.currentTarget.appendChild(dragItem);// aqui ele adiona no neutralarea
        updateAreas();
};


// Logic Functions

function updateAreas () {
    document.querySelectorAll('.area').forEach(area => {
        // pegar o noem da area
        let name = area.getAttribute('data-name');

        if (area.querySelector('.item') !== null){
            areas[name] = area.querySelector('.item').innerHTML;

        }else {
            areas [name] = null;
        }
    });
    // verificação 
    if (areas.a === '1' && areas.b === '2' && areas.c === '3' ){
        // acontecendo isso trocamos a classe abaixo
        document.querySelector('.areas').classList.add('correct');
    } else {
        document.querySelector('.areas').classList.remove('correct');

    }

}