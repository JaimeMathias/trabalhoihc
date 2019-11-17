const nav = document.getElementById('nav');
const menu = document.getElementById('menu');

menu.addEventListener('click', (e) => {
    if (nav.hasAttribute('style')) {
        nav.toggleAttribute('style');
    }
    else {
        nav.setAttribute('style', 'display: none;');
    }
    e.preventDefault();
});

const input = document.querySelectorAll('input');
// const val = document.querySelector('input');
// const btn = document.getElementById('selecionar');

// val.addEventListener('blur', validar);
// // input.addEventListener('blur', validar);

// function validar() {
//     console.log('eai');
//     input.forEach(function(element, index) {
//         if (element.length == 3) { 
//             console.log('ola');
//         }
//     });
// }

// input.forEach(addEventListener('blur', storage));
const selecionar = document.querySelectorAll('button');
input[7].addEventListener('click', storage);
selecionar[0].addEventListener('click', storage);
selecionar[1].addEventListener('click', storage);
selecionar[2].addEventListener('click', storage);

function storage() {
    for (var i = 0; i < 7; i++) {
        window.sessionStorage.setItem('item' + i, input[i].value);
    }
}

input[7].addEventListener('click', () => {
    window.sessionStorage.setItem('medico', 'derek');
});

selecionar[0].addEventListener('click', () => {
    window.sessionStorage.setItem('medico', 'drauzio');
});

selecionar[1].addEventListener('click', () => {
    window.sessionStorage.setItem('medico', 'fernando');
});

selecionar[2].addEventListener('click', () => {
    window.sessionStorage.setItem('medico', 'neymar');
});



const seta = document.getElementById('seta');
const setaesquerda = document.getElementById('setaesquerda');
const scroll = document.getElementById('scroll');

seta.addEventListener('click', (e) => {
    scroll.scrollLeft += 300;
    e.preventDefault();
});

setaesquerda.addEventListener('click', (e) => {
    scroll.scrollLeft -= 300;
    e.preventDefault();
});