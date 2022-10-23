// Milestone 0:
// Come sempre focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
console.log("ok");

//array
const images = [
    {

        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {

        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const contenitore = document.getElementById("container");

let imagine = document.getElementById('img');
let titolo=document.getElementById('titolo');
let desc=document.getElementById('desc');
titolo.textContent=images[0].title;
desc.textContent=images[0].description;

imagine.src = images[0].url;

const little = document.getElementById("piccole");
addElementClassHTML('div', 'row', little);
imgPiccole();

const imgPiccola = document.getElementsByClassName("imgpiccole");


let cont = 0;
for (var i = 0; i < imgPiccola.length; i++) {
    imgPiccola[i].addEventListener('click', function (e) {
        console.log(e.target.getAttribute("id"));
        cont = e.target.id;
        imagine.src = images[e.target.id].url;
        titolo.textContent=images[cont].title;
        desc.textContent=images[cont].description;
       
        e.target.classList.add("effect-overlay");
        e.target.classList.remove("effect-overlay");

    }, false);

}
//bottone che va indietro

const btnA = document.getElementById('avanti');
btnA.addEventListener('click', function () {
    if (cont == 4) {
        cont = 0;
    } else {
        cont++;
    }

    imagine.src = images[cont].url;
    titolo.textContent=images[cont].title;
     desc.textContent=images[cont].description;

    imgPiccola[cont].classList.add("effect-overlay");
    imgPiccola[cont].classList.remove("effect-overlay");
    
}, false);
//bottone che va avanti 
const btnB = document.getElementById('indietro');
btnB.addEventListener('click', function () {
    if (cont == 0) {
        cont = 4;
    } else {
        cont--;
    }

    imagine.src = images[cont].url;
    titolo.textContent=images[cont].title;
    desc.textContent=images[cont].description;
    imgPiccola[cont].classList.add("effect-overlay");
    imgPiccola[cont].classList.remove("effect-overlay");
}, false);
//funzione che va avanti da sola
let avantiBtn=document.getElementById('avantiBtn');
let btnAvantiTime;
avantiBtn.addEventListener('click',function(){
    btnAvantiTime=  setInterval(function () {
                if (cont == 0) {
                    cont = 4;
                } else {
                    cont--;
                }
        
                imagine.src = images[cont].url;
                titolo.textContent=images[cont].title;
                desc.textContent=images[cont].description;
        
                imgPiccola[cont].classList.add("effect-overlay");
                imgPiccola[cont].classList.remove("effect-overlay");
                
                avantiBtn.classList.add("pointer-none")
        
            }
        
        
                , 2000)});
        
 
let  indietroBtn=document.getElementById('indietroBtn');
let btnIndietroTime;
indietroBtn.addEventListener('click',function(){
    btnIndietroTime=  setInterval(function () {
                if (cont == 4) {
                    cont = 0;
                } else {
                    cont++;
                }
        
                imagine.src = images[cont].url;
                titolo.textContent=images[cont].title;
                desc.textContent=images[cont].description;
        
                imgPiccola[cont].classList.add("effect-overlay");
                imgPiccola[cont].classList.remove("effect-overlay");
                
                indietroBtn.classList.add("pointer-none")
        
            }
        
        
                , 2000)});




// const indietroSolo = document.getElementById("indietroBtn");
// let indietro;
// avantiSolo.addEventListener('click', function () {
//     indietro = setInterval(function () {
//         if (cont == 4) {
//             cont = 0;
//         } else {
//             cont++;
//         }

//         imagine.src = images[cont].url;
//         titolo.textContent=images[cont].title;
//         desc.textContent=images[cont].description;

//         imgPiccola[cont].classList.add("effect-overlay");
//         imgPiccola[cont].classList.remove("effect-overlay");
//         avantiSolo.classList.add("pointer-none")

//     }


//         , 2000)
// });
//stop
const stoppe = document.getElementById("stop");
stoppe.addEventListener('click', function () {
    clearInterval(btnAvantiTime);
    avantiBtn.classList.remove("pointer-none")
    clearInterval(btnIndietroTime);
})

