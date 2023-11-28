import CriarProva from "./classes/CriarProva.js";

const CProva = new CriarProva();

const np = document.getElementById('container');

np.addEventListener('click', e => {
    CProva.criarProva(np);
});

