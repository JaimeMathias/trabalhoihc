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

for (var i = 0; i < 7; i++) {
    boa[i].textContent = window.sessionStorage.getItem('item' + i);
}