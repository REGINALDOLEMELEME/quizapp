const bancoPerguntas = [
    // Tema: Didática
    {
      tema: "Didática",
      pergunta: "O que caracteriza uma metodologia ativa?",
      respostas: [
        { texto: "O aluno apenas ouve passivamente.", correta: false },
        { texto: "O professor como único responsável pelo conhecimento.", correta: false },
        { texto: "O aluno participa ativamente, colaborando e resolvendo problemas.", correta: true },
        { texto: "Aprendizado exclusivamente individual.", correta: false }
      ],
      feedback: "Metodologia ativa envolve participação ativa do aluno na aprendizagem."
    },
    {
      tema: "Didática",
      pergunta: "O que é a Zona de Desenvolvimento Proximal segundo Vygotsky?",
      respostas: [
        { texto: "Desenvolver habilidades sozinho.", correta: false },
        { texto: "Manter o aluno no mesmo nível.", correta: false },
        { texto: "Facilitar o aprendizado com ajuda de alguém mais experiente.", correta: true },
        { texto: "Ignorar o contexto social e cultural.", correta: false }
      ],
      feedback: "ZDP é aprender com o auxílio de uma pessoa mais experiente."
    },
    {
      tema: "Didática",
      pergunta: "O que é essencial para boa mediação em EaD?",
      respostas: [
        { texto: "Apenas disponibilizar materiais.", correta: false },
        { texto: "Permitir aprendizado totalmente sozinho.", correta: false },
        { texto: "Oferecer feedback rápido e valorizar a interação.", correta: true },
        { texto: "Ignorar experiências prévias dos alunos.", correta: false }
      ],
      feedback: "Boa mediação inclui feedback rápido e interação."
    },
    // Adicione mais perguntas didáticas aqui até atingir 20 perguntas
  
    // Tema: TIC
    {
      tema: "TIC",
      pergunta: "O que é essencial para a usabilidade em AVA?",
      respostas: [
        { texto: "Ambiente complexo e difícil.", correta: false },
        { texto: "Interface fácil, rápida e que evita erros.", correta: true },
        { texto: "Dificultar o acesso.", correta: false },
        { texto: "Ambiente exclusivo para desenvolvedores.", correta: false }
      ],
      feedback: "Usabilidade inclui facilidade, aprendizado rápido e prevenção de erros."
    },
    {
      tema: "TIC",
      pergunta: "Como Lévy define ciberespaço?",
      respostas: [
        { texto: "Espaço físico presencial.", correta: false },
        { texto: "Rede restrita apenas para professores.", correta: false },
        { texto: "Ambiente virtual com interação digital global.", correta: true },
        { texto: "Plataforma exclusiva para aulas ao vivo.", correta: false }
      ],
      feedback: "Ciberespaço é um ambiente virtual global de interação digital."
    },
    {
      tema: "TIC",
      pergunta: "Qual o principal objetivo dos AVAs?",
      respostas: [
        { texto: "Diversão exclusivamente.", correta: false },
        { texto: "Comércio eletrônico.", correta: false },
        { texto: "Suporte educacional online.", correta: true },
        { texto: "Programação de jogos.", correta: false }
      ],
      feedback: "AVAs oferecem suporte educacional online."
    }
    // Adicione mais perguntas TIC aqui até atingir 20 perguntas
  ];
 

  let perguntasSelecionadas = [];
  let indiceAtual = 0;
  let acertos = 0;
  
  const iniciar = document.getElementById('iniciar');
  const reiniciar = document.getElementById('reiniciar');
  const proximo = document.createElement('button');
  proximo.innerText = "Próxima";
  proximo.className = "mt-4 bg-blue-500 text-white py-2 px-4 rounded hidden";
  proximo.onclick = irParaProximaPergunta;
  document.getElementById('quiz').appendChild(proximo);
  
  iniciar.addEventListener('click', () => {
    const temaEscolhido = document.getElementById('tema').value;
    perguntasSelecionadas = temaEscolhido === "Todas" ? bancoPerguntas : bancoPerguntas.filter(p => p.tema === temaEscolhido);
    document.getElementById('start').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    exibirPergunta();
  });
  
  function exibirPergunta() {
    const perguntaAtual = perguntasSelecionadas[indiceAtual];
    document.getElementById('pergunta').innerText = perguntaAtual.pergunta;
    const divRespostas = document.getElementById('respostas');
    divRespostas.innerHTML = '';
    const letras = ['a', 'b', 'c', 'd'];
  
    perguntaAtual.respostas.forEach((resposta, idx) => {
      const btn = document.createElement('button');
      btn.innerText = `${letras[idx]}) ${resposta.texto}`;
      btn.className = "block w-full text-left p-2 border rounded bg-gray-200 hover:bg-gray-300";
      btn.onclick = () => verificarResposta(resposta, btn, perguntaAtual);
      divRespostas.appendChild(btn);
    });
  
    proximo.classList.add('hidden');
  }
  
  function verificarResposta(resposta, botao, perguntaAtual) {
    const botoes = document.querySelectorAll('#respostas button');
  
    botoes.forEach(btn => {
      btn.disabled = true;
    });
  
    if (resposta.correta) {
      botao.classList.add('bg-green-200');
      acertos++;
      mostrarFeedback(true, perguntaAtual.feedback);
    } else {
      botao.classList.add('bg-red-200');
  
      // Agora, marcar corretamente o botão que é certo
      const respostaCorreta = perguntaAtual.respostas.find(r => r.correta);
      const botoesArray = Array.from(botoes);
      const botaoCorreto = botoesArray.find(b => b.innerText.includes(respostaCorreta.texto));
      if (botaoCorreto) {
        botaoCorreto.classList.add('bg-green-200');
      }
  
      mostrarFeedback(false, perguntaAtual.feedback);
    }
  
    proximo.classList.remove('hidden');
  }
  
  
  function mostrarFeedback(acertou, feedback) {
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.innerText = `${acertou ? "Você acertou!" : "Você errou!"} ${feedback}`;
    feedbackDiv.classList.remove('hidden');
  
    // Remove todas classes de cores anteriores
    feedbackDiv.classList.remove('bg-green-200', 'bg-red-200');
  
    if (acertou) {
      feedbackDiv.classList.add('bg-green-200');
    } else {
      feedbackDiv.classList.add('bg-red-200'); // Agora usando a classe correta
    }
  }
  
  function irParaProximaPergunta() {
    indiceAtual++;
    if (indiceAtual < perguntasSelecionadas.length) {
      exibirPergunta();
      const feedbackDiv = document.getElementById('feedback');
      feedbackDiv.classList.add('hidden');
    } else {
      mostrarResultado();
    }
  }
  
  function mostrarResultado() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('resultado').classList.remove('hidden');
    document.getElementById('acertos').innerText = `Você acertou ${acertos} de ${perguntasSelecionadas.length} questões.`;
  }
  
  reiniciar.addEventListener('click', () => location.reload());