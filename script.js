const container = document.querySelector('.container');
const width = document.querySelector('#grid-width');
const reset = document.querySelector('#reset');
const gray = document.querySelector('#gray');
const colour = document.querySelector('#colour');
const label = document.querySelector('label');



function startEtch() {
    const gridwidth = width.value;
    const gridarea = gridwidth * gridwidth
    label.innerText = `${width.value} x ${width.value}`;
    for (let i = 0; i < gridarea; i++) {
        const divs = document.createElement('div');
        divs.className = 'box';
        container.appendChild(divs)
        container.style.display = 'grid';
        container.style.gridTemplateColumns = `repeat(${gridwidth}, 1fr)`;


    }

}

startEtch();

width.addEventListener('change', createGrid)

function createGrid(e) {
    const gridwidth = e.target.value;
    const gridarea = gridwidth * gridwidth
    container.innerHTML = '';
    label.innerText = `${e.target.value} x ${e.target.value}`;
    for (let i = 0; i < gridarea; i++) {
        const divs = document.createElement('div');
        divs.className = 'box';
        container.appendChild(divs)
        container.style.display = 'grid';
        container.style.gridTemplateColumns = `repeat(${gridwidth}, 1fr)`;


    }

}

reset.addEventListener('click', () => window.location.reload());

container.addEventListener('mouseover', blackSketch)

function blackSketch(e) {
    e.target.style.backgroundColor = 'black';
}

gray.addEventListener('click', blackSketch1);

function blackSketch1(e) {
    container.addEventListener('mouseover', blackSketch)
    
    function blackSketch(e) {
    e.target.style.backgroundColor = 'darkgray';
}
    
}

colour.addEventListener('click', colourSketch);

function colourSketch(e) {
    container.addEventListener('mouseover', blackSketch)
    
    function blackSketch(e) {
        const colour1 = Math.floor(Math.random()*256)
        const colour2 = Math.floor(Math.random()*256)
        const colour3 = Math.floor(Math.random()*256)
        e.target.style.backgroundColor = `rgb(${colour1}, ${colour2}, ${colour3})`;
}
    
}




