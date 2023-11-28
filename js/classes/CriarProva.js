export default class CriarProva {
    constructor() {
        this.prova = {
            instituicao: null,
            professor: null,
            materia: null,
        }

        this.qtdQuestoes = 0;
    }

    criarProva(np) {
        const container = document.createElement('div');
        const campos = document.createElement('div');
        const inputs = document.createElement('div');
        const botoes = document.createElement('div');
        const x = document.createElement('div');
        const span = document.createElement('span');
        const btn = document.createElement('button');

        span.id = 'orientacao';
        container.id = 'containerProva';
        campos.id = 'campos';
        inputs.id = 'inputs';
        botoes.id = 'botoes';
        x.id = 'close';
        x.innerText = 'x';
        x.classList.add('x');
        btn.id = 'btnPro';
        btn.classList.add('btnDefault');
        btn.innerText = 'Prosseguir';

        
        span.innerText = 'Por Favaor, use seu dispositivo no modo retrato para uma boa experiência.';

        
        inputs.innerHTML = `<input id="inst" class="inputCC" type="text" placeholder="Instituição">
        <input id="prof" class="inputCC" type="text" placeholder="Professor">
        <input id="mat" class="inputCC" type="text" placeholder="Matéria">`;
        
        
        
        botoes.appendChild(btn);
        container.appendChild(campos);
        campos.appendChild(x);
        campos.appendChild(span);
        campos.appendChild(inputs);
        campos.appendChild(botoes);

        document.body.appendChild(container);

        // Eventos

        btn.addEventListener('click', e => {
            let inst = document.getElementById('inst').value;
            let prof = document.getElementById('prof').value;
            let mat = document.getElementById('mat').value;
        

            this.prova.instituicao = inst ? inst : null;
            this.prova.professor = prof ? prof : null;
            this.prova.materia = mat ? mat : null;
            console.log(this.prova);

           this.gerarProva();
        });

        x.addEventListener('click', e => {

            campos.style.animation = 'BtoL .4s ease-in';
            np.style.display = 'flex';
            setTimeout(() => {
                document.body.removeChild(container);
            }, 400);
        });

    }


    gerarProva() {
        const conteierProva = document.createElement('div');
        const prova = document.createElement('div');
        const btnQstDiv = document.createElement('div');
        const btnQst = document.createElement('button');
        const btnVoltar = document.createElement('button');
        const btnSalvar = document.createElement('button');
        const orientacao = document.createElement('div');
        
        btnVoltar.id = 'btnVoltar';
        orientacao.id = 'orientacaoP';
        btnSalvar.id = 'btnSalvar';
        conteierProva.id = 'containerProvaC';
        prova.id = 'provaC';
        btnQstDiv.id = 'btnDiv';
        btnQst.id = 'btnQst';
        btnQst.classList.add('btnDefault');
        btnVoltar.classList.add('btnDefault');
        btnSalvar.classList.add('btnDefault');
        btnQst.innerText = 'Adicionar Questão';
        btnSalvar.innerText = 'Salvar/Imprimir';
        btnVoltar.innerText = 'Voltar';
        orientacao.innerHTML = '<h1>Por favor, use seu dispositivo na vertical para utilizar este site.</h1>'
        
        prova.innerHTML = `<div id="cabecalho">
        <h1>${this.prova.instituicao ? this.prova.instituicao : ''}</h1>
        <div id="nomes">
            <span>Nome:</span> <div id="espacoNome"></div> <span>Série:</span><div id="miniEspaco"></div><span>Turma:</span><div id="miniEspaco"></div>
        </div>
        <div>
            <span>Professor: ${this.prova.professor ? this.prova.professor : ''}</span>
        </div>
        
        <h2 class="center">${this.prova.materia ? this.prova.materia : ''}</h2>
      </div>`;

        conteierProva.appendChild(orientacao);
        btnQstDiv.appendChild(btnVoltar);
        btnQstDiv.appendChild(btnQst);
        btnQstDiv.appendChild(btnSalvar);
        conteierProva.appendChild(prova);
        prova.appendChild(btnQstDiv);

        document.body.appendChild(conteierProva);

        // Eventos

        btnQst.addEventListener('click', e => {
            this.criarQuestoes();
        });

        btnSalvar.addEventListener('click', e => {
            print();
        });
        
        btnVoltar.addEventListener('click', e => {
            var resposta = confirm('Tem certeza que deseja voltar?');

            if(resposta){
                conteierProva.style.animation = 'fadeOut .4s ease-in';

                this.qtdQuestoes = 0;

                setTimeout(() => {
                    document.body.removeChild(conteierProva);
                }, 400);
            }

            return;
        });
    }

    criarQuestoes() {
        const qContainer = document.createElement('div');
        const pContainer = document.createElement('div');
        const x = document.createElement('div');
        const iContainer = document.createElement('div');
        const inputsCq = document.createElement('div');
        const btnCqDiv = document.createElement('div');
        const btnCq = document.createElement('button');
        
        
        pContainer.id = 'pContainer';
        qContainer.id = 'qContainer';
        iContainer.id = 'iContainer';
        
        inputsCq.id = 'inputsCq';
        btnCqDiv.classList.add('centralizar');
        btnCq.id = 'btnCq';
        btnCq.innerText = 'Criar questão';
        btnCq.classList.add('btnDefault');
        

        x.id = 'closeP';
        x.innerText = 'x';
        x.classList.add('x');

        inputsCq.innerHTML = `<input id="q" class="inputCC inputQ" type="text" placeholder="Questão"> <input id="rA" class="inputCC" type="text" placeholder="Resposta A">
        <input id="rB" class="inputCC" type="text" placeholder="Resposta B">
        <input id="rC" class="inputCC" type="text" placeholder="Resposta C">
        <input id="rD" class="inputCC" type="text" placeholder="Resposta D">
        <input id="rE" class="inputCC" type="text" placeholder="Resposta E">`;
        
        btnCqDiv.appendChild(btnCq);
        qContainer.appendChild(pContainer);
        pContainer.appendChild(x);
        pContainer.appendChild(iContainer);
        iContainer.appendChild(inputsCq);
        iContainer.appendChild(btnCqDiv);


        document.body.appendChild(qContainer);

        // Eventos

        x.addEventListener('click', e => {
            fechar();
        });

        btnCq.addEventListener('click', () => {
            let questao = document.querySelector('#q').value;
            let rA = document.querySelector('#rA').value;
            let rB = document.querySelector('#rB').value;
            let rC = document.querySelector('#rC').value;
            let rD = document.querySelector('#rD').value;
            let rE = document.querySelector('#rE').value;
            
            if(!questao){
                alert('Preencha pelo menos o campo "Questão".');
                return;
            }

            this.gerarQuestao([questao, rA, rB, rC, rD, rE]);
            fechar();
        });

        // Funções

        function fechar() {
            pContainer.style.animation = 'sumirBaixo .3s ease-in';
            
            setTimeout(() => {
                document.body.removeChild(qContainer);
            }, 300);
        }
    }

    gerarQuestao(alternativas) {
        this.qtdQuestoes ++;
        let prova = document.getElementById('provaC');
        let botao = document.getElementById('btnDiv');
        
        let questao = document.createElement('div');
        questao.id = `questao${this.qtdQuestoes}`;
        questao.classList.add('questao');
    
        questao.innerHTML = `<p class="enunci">${alternativas[0]? `${this.qtdQuestoes}) ${alternativas[0]}` :'' }</p>
        ${alternativas[1] ? `<p class="alternativa">A) ${alternativas[1]} </p>` : ''}
        ${alternativas[2] ? `<p class="alternativa">B) ${alternativas[2]} </p>` : ''}
        ${alternativas[3] ? `<p class="alternativa">C) ${alternativas[3]} </p>` : ''}
        ${alternativas[4] ? `<p class="alternativa">D) ${alternativas[4]} </p>` : ''}
        ${alternativas[5] ? `<p class="alternativa">E) ${alternativas[5]} </p>` : ''}
        `;

        prova.insertBefore(questao, botao);
    }
} 