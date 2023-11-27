import CriarProva from "./classes/CriarProva.js";

const CProva = new CriarProva();

const np = document.getElementById('container');

// CProva.gerarProva();
// CProva.criarQuestoes();

np.addEventListener('click', e => {
    CProva.criarProva(np);
});

