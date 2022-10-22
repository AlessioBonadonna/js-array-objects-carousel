function addElementClassHTML(tagElement, className, fatherElement){
    const tag = document.createElement(tagElement);
    tag.className = className;
    fatherElement.append(tag);
    return tag;
}

function imgPiccole() {
    let contatore=0;
    for(let value of images) {
        const col = document.createElement('div');
         col.className = 'col';
      
        for(let key in value) {
            console.log(key);
            col.innerHTML = `
            
            <img  class="imgpiccole"  id="${contatore}" src="${value.url}" alt="${value.url}">
            `
            
            col.style='width:200px; height:150px;';
            document.querySelector('.row').append(col);
           
        } contatore++;
        console.log(contatore);
    }
}


