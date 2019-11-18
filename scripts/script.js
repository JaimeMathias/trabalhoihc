const op1 = document.getElementById('estados');
const op2 = document.getElementById('cidades');
const op3 = document.getElementById('especialidades');
var k = 0;
var i;
var novo;
const cidades = ['', 'São Vicente', 'São Paulo', 'Praia Grande'];
const especialidades = ['', 'Oftalmologista', 'Pediatra', 'Psicologo'];


op1.addEventListener('change', (e) => {
    if (op1.value == 'SP') {
        novo = document.createElement('option');
        while (op2.length - 1) {
            op2.remove(0);
        } 
        novo.value = 'Santos';
        novo.text = 'Santos';
        op2.options[0] = novo;
        for (i = 1; i <= 3; i++) {
            novo = document.createElement('option');
            novo.value = novo.text = cidades[i];
            op2.add(novo, op2.options[i]);
        }
        change();
    }
    else if (op1.value == 'Selecionar Estado') {
        while (op2.length - 1) {
            op2.remove(0);
        }
        while (op3.length - 1) {
            op3.remove(0);
        }
        op2.options[0].text = '--';
        op3.options[0].text = '--';
    }
    e.preventDefault();
});

function change() {
    if (op2.value == 'Santos') {
        novo = document.createElement('option');
        while (op3.length - 1) {
            op3.remove(0);
        } 
        novo.value = 'Nutricionista';
        novo.text = 'Nutricionista';
        op3.options[0] = novo;
        for (i = 1; i <= 3; i++) {
            novo = document.createElement('option');
            novo.value = novo.text = especialidades[i];
            op3.add(novo, op3.options[i]);
        }
    }
    else if (op2.value == 'São Vicente') {
        novo = document.createElement('option');
        while (op3.length - 1) {
            op3.remove(0);
        } 
        novo.value = 'Nutricionista';
        novo.text = 'Nutricionista';
        op3.options[0] = novo;
        for (i = 1; i <= 2; i++) {
            novo = document.createElement('option');
            novo.value = novo.text = especialidades[i];
            op3.add(novo, op3.options[i]);
        }
    }
    else if (op2.value == 'Praia Grande') {
        novo = document.createElement('option');
        while (op3.length - 1) {
            op3.remove(0);
        } 
        novo.value = 'Nutricionista';
        novo.text = 'Nutricionista';
        op3.options[0] = novo;
        for (i = 1; i <= 2; i++) {
            novo = document.createElement('option');
            novo.value = novo.text = especialidades[i];
            op3.add(novo, op3.options[i]);
        }
    }
}

op2.addEventListener('change', change);


const btn = document.getElementById('btn');
const ativar = document.getElementById('clinicas');

btn.addEventListener('click', (e) => {
    if (op3.value != '--' && ativar.attributes[0].value == 'clinicas hide') {
        ativar.classList.toggle('hide'); // Se usar o 'clinicas' como tava antes, dava merda quando trocava o display pra flex, ent em q usar uma outra classe só pra isso
    }
    window.sessionStorage.setItem('opcoes0', op1.value + " - Brasil");
    window.sessionStorage.setItem('opcoes1', op2.value);
    window.sessionStorage.setItem('opcoes2', op3.value);
    e.preventDefault();
});

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


const selecionar = document.getElementsByClassName('confirm');

Array.from(selecionar).forEach(function(element) {
    element.addEventListener('click', () => {
        window.location.assign("agendamento.html");
    });
})