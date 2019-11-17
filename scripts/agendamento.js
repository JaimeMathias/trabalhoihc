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
input[7].addEventListener('click', storage);
const selecionar = document.querySelectorAll('button');
selecionar[0].addEventListener('click', storage);
selecionar[1].addEventListener('click', storage);
selecionar[2].addEventListener('click', storage);

function storage() {
    for (var i = 0; i < 7; i++) {
        window.sessionStorage.setItem('item' + i, input[i].value);
    }
}