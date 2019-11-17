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





const sim = document.getElementById('sim');
const voltar = document.getElementById('voltar');

sim.addEventListener('click', (e) => {
    alert("Consulta marcada com sucesso!\n\nEm caso de desmarcar, veja na aba \"Minhas Consultas\".");
    // window.location.href = "index.html";
    window.location.assign("index.html");
    e.preventDefault();
});

voltar.addEventListener('click', (e) => {
    window.history.back();
    e.preventDefault();
});





const boa = document.getElementsByClassName('mudar');
const mudar2 = document.getElementsByClassName('mudar2');

if (window.sessionStorage.getItem('item0')) {
    for (var i = 0; i < 7; i++) {
        boa[i].textContent = window.sessionStorage.getItem('item' + i);
    }
}

if (window.sessionStorage.getItem('opcoes1')) {
    for (var i = 0; i < 3; i++) {
        mudar2[i].textContent = window.sessionStorage.getItem('opcoes' + i);
    }
}

const dr = document.getElementById('dr');
const fe = document.getElementById('fe');
const de = document.getElementById('de');
const ne = document.getElementById('ne');

const medico = window.sessionStorage.getItem('medico');

if (medico == 'drauzio') {
    dr.classList.toggle('dr');
}
else if (medico == 'fernando') {
    fe.classList.toggle('fe');
}
else if (medico == 'derek') {
    de.classList.toggle('de');
}
else if (medico == 'neymar') {
    ne.classList.toggle('ne');
}