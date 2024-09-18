function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    const dropTarget = event.target;

    
    if (dropTarget.classList.contains('dropbox')) {
    
        if (!dropTarget.hasChildNodes()) {
            
            dropTarget.appendChild(draggedElement);
            draggedElement.style.position = 'absolute';
            draggedElement.style.left = '0';
            draggedElement.style.top = '0';

            
            dropTarget.classList.add('occupied');
        }
    }
}