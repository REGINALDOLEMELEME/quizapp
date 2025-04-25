const bancoPerguntas = [
    // Tema: Didática
    {
      tema: "Didática",
        tema: "Conhecimento Pertinente",
        pergunta: "Por que é necessário situar tudo no contexto planetário?",
        respostas: [
          { texto: "Para evitar qualquer tipo de conhecimento.", correta: false },
          { texto: "Para entender somente informações locais.", correta: false },
          { texto: "Porque os problemas atuais são globais e interconectados.", correta: true },
          { texto: "Para reforçar a separação entre as disciplinas.", correta: false }
        ],
        feedback: "O contexto atual exige compreender os problemas de forma global e interconectada, pois a realidade é planetária."   
      
    },
    {
      tema: "Didática",
      
        tema: "Educação e Conhecimento",
        pergunta: "O que a educação precisa evidenciar para tornar o conhecimento pertinente?",
        respostas: [
          { texto: "Somente os dados isolados.", correta: false },
          { texto: "O contexto, o global, o multidimensional e o complexo.", correta: true },
          { texto: "A fragmentação do saber.", correta: false },
          { texto: "O isolamento dos fenômenos.", correta: false }
        ],
        feedback: "Para um conhecimento relevante, é essencial evidenciar o contexto, o global, o multidimensional e o complexo."
      }
      
    ,
    {
      tema: "Didática",
      
        tema: "Contextualização",
        pergunta: "O que é necessário para que a informação tenha sentido?",
        respostas: [
          { texto: "Isolá-la de seu contexto.", correta: false },
          { texto: "Situá-la em seu contexto.", correta: true },
          { texto: "Torná-la cada vez mais abstrata.", correta: false },
          { texto: "Fragmentá-la em dados menores.", correta: false }
        ],
        feedback: "Informações só fazem sentido quando são situadas em seu contexto, assim como uma palavra precisa de um texto."
      
      
    },
    {
        tema: "Didática",
        pergunta: "O que caracteriza o 'global' no conhecimento?",
        respostas: [
          { texto: "A simples reunião de dados isolados.", correta: false },
          { texto: "O conjunto de partes ligadas de maneira interdependente.", correta: true },
          { texto: "A separação dos elementos do todo.", correta: false },
          { texto: "O estudo apenas de uma dimensão do problema.", correta: false }
        ],
        feedback: "O 'global' é mais que um contexto; é a ligação interdependente das partes formando um todo organizado."
      },
      {
        tema: "Didática",
        pergunta: "Por que o conhecimento das informações isoladas é considerado insuficiente?",
        respostas: [
          { texto: "Porque basta conhecer dados sem contexto.", correta: false },
          { texto: "Porque isoladamente os dados perdem seu sentido completo.", correta: true },
          { texto: "Porque todas as informações são irrelevantes.", correta: false },
          { texto: "Porque a contextualização confunde mais do que ajuda.", correta: false }
        ],
        feedback: "Sem contexto, a informação perde seu verdadeiro significado e utilidade no entendimento dos fenômenos."
      },
      {
        tema: "Didática",
        pergunta: "O que Claude Bastien afirma sobre a evolução cognitiva?",
        respostas: [
          { texto: "Que caminha para abstrações cada vez maiores.", correta: false },
          { texto: "Que visa eliminar o contexto das informações.", correta: false },
          { texto: "Que se orienta para a contextualização do conhecimento.", correta: true },
          { texto: "Que deve focar apenas na especialização extrema.", correta: false }
        ],
        feedback: "Claude Bastien aponta que o avanço do conhecimento exige a contextualização para ser realmente eficaz."
      },
      {
        tema: "Didática",
        pergunta: "O que caracteriza o todo em relação às suas partes, segundo o texto?",
        respostas: [
          { texto: "O todo é apenas a soma das partes.", correta: false },
          { texto: "O todo possui qualidades que não estão nas partes isoladas.", correta: true },
          { texto: "O todo impede o funcionamento das partes.", correta: false },
          { texto: "O todo é irrelevante para entender o contexto.", correta: false }
        ],
        feedback: "O todo apresenta propriedades únicas que não aparecem ao analisar apenas as partes separadamente."
      },
      {
        tema: "Didática",
        pergunta: "O que significa dizer que o ser humano é 'hologrâmico'?",
        respostas: [
          { texto: "Cada parte do ser humano é independente do todo.", correta: false },
          { texto: "Cada indivíduo contém a sociedade de maneira fragmentada.", correta: false },
          { texto: "Cada indivíduo carrega em si o todo social e biológico.", correta: true },
          { texto: "O ser humano não possui ligação com o meio em que vive.", correta: false }
        ],
        feedback: "Ser 'hologrâmico' significa que cada indivíduo traz consigo as características e influências do todo social e biológico ao qual pertence."
      },
      {
        tema: "Didática",
        pergunta: "Segundo o texto, o que a educação deve promover para lidar com a complexidade?",
        respostas: [
          { texto: "A especialização extrema.", correta: false },
          { texto: "A inteligência geral que considera contexto e globalidade.", correta: true },
          { texto: "O foco apenas em informações locais.", correta: false },
          { texto: "A separação entre as áreas do conhecimento.", correta: false }
        ],
        feedback: "A educação precisa desenvolver a inteligência geral, capaz de entender os contextos, o global e a complexidade dos fenômenos."
      },
      {
        tema: "Didática",
        pergunta: "O que significa complexidade no conhecimento?",
        respostas: [
          { texto: "A separação de elementos independentes.", correta: false },
          { texto: "A união de elementos diferentes e interligados.", correta: true },
          { texto: "A fragmentação dos problemas.", correta: false },
          { texto: "A eliminação do contexto nas análises.", correta: false }
        ],
        feedback: "Complexidade significa a integração de diversos elementos distintos que se relacionam de forma interativa e interdependente."
      },
      
      {
        tema: "Didática",
        pergunta: "Qual é o papel da curiosidade na formação da inteligência geral?",
        respostas: [
          { texto: "Deve ser suprimida para focar apenas em especializações.", correta: false },
          { texto: "Deve ser estimulada para ampliar a capacidade de compreender o mundo.", correta: true },
          { texto: "É irrelevante no processo educativo.", correta: false },
          { texto: "Serve apenas na infância, devendo ser reprimida depois.", correta: false }
        ],
        feedback: "A curiosidade é fundamental para desenvolver a inteligência geral e manter viva a busca ativa pelo conhecimento."
      },
      {
        tema: "Didática",
        pergunta: "O que a educação deve fazer em relação à inteligência geral?",
        respostas: [
          { texto: "Ignorá-la em favor das competências técnicas.", correta: false },
          { texto: "Favorecer sua ativação e desenvolvimento.", correta: true },
          { texto: "Reduzir seu uso em prol da especialização.", correta: false },
          { texto: "Concentrar-se apenas na transmissão de dados.", correta: false }
        ],
        feedback: "A educação deve estimular a inteligência geral, pois ela é essencial para resolver problemas complexos e globais."
      },
      {
        tema: "Didática",
        pergunta: "O que a hiperespecialização provoca segundo o texto?",
        respostas: [
          { texto: "A integração entre diferentes áreas do saber.", correta: false },
          { texto: "A fragmentação do conhecimento e perda da visão global.", correta: true },
          { texto: "A ampliação da cultura geral.", correta: false },
          { texto: "A valorização das múltiplas dimensões humanas.", correta: false }
        ],
        feedback: "A hiperespecialização fragmenta o saber, dificultando a compreensão de problemas complexos e interdisciplinares."
      },
      {
        tema: "Didática",
        pergunta: "Segundo o autor, qual a consequência da separação entre humanidades e ciências?",
        respostas: [
          { texto: "O fortalecimento da capacidade crítica.", correta: false },
          { texto: "A dificuldade em contextualizar e integrar conhecimentos.", correta: true },
          { texto: "A valorização das relações interdisciplinares.", correta: false },
          { texto: "O aumento da responsabilidade social.", correta: false }
        ],
        feedback: "A separação entre humanidades e ciências enfraquece a capacidade de contextualizar e compreender problemas globais."
      },
      {
        tema: "Didática",
        pergunta: "O que caracteriza o conhecimento especializado, segundo Edgar Morin?",
        respostas: [
          { texto: "Uma visão ampla e global dos problemas.", correta: false },
          { texto: "A extração do objeto de seu contexto e conjunto.", correta: true },
          { texto: "A consideração dos aspectos emocionais e sociais.", correta: false },
          { texto: "A união entre diferentes saberes.", correta: false }
        ],
        feedback: "O conhecimento especializado extrai o objeto de seu contexto, prejudicando a visão ampla necessária para problemas complexos."
      },
      {
        tema: "Didática",
        pergunta: "Por que a especialização pode ser prejudicial na compreensão de fenômenos complexos?",
        respostas: [
          { texto: "Porque promove uma abordagem holística.", correta: false },
          { texto: "Porque fragmenta o fenômeno e ignora suas múltiplas dimensões.", correta: true },
          { texto: "Porque integra diferentes saberes de maneira superficial.", correta: false },
          { texto: "Porque se baseia apenas em opiniões pessoais.", correta: false }
        ],
        feedback: "A especialização isolada fragmenta os fenômenos e ignora sua complexidade, prejudicando uma visão mais completa e integrada."
      },
      {
        tema: "Didática",
        pergunta: "Por que é necessário situar tudo no contexto planetário?",
        respostas: [
          { texto: "Para evitar qualquer tipo de conhecimento.", "correta": false },
          { texto: "Para entender somente informações locais.", "correta": false },
          { texto: "Porque os problemas atuais são globais e interconectados.", "correta": true },
          { texto: "Para reforçar a separação entre as disciplinas.", "correta": false }
        ],
        feedback: "O contexto atual exige compreender os problemas de forma global e interconectada, pois a realidade é planetária."
      },
      {
        tema: "Didática",
        pergunta: "O que a educação precisa evidenciar para tornar o conhecimento pertinente?",
        respostas: [
          { texto: "Somente os dados isolados.", "correta": false },
          { texto: "O contexto, o global, o multidimensional e o complexo.", "correta": true },
          { texto: "A fragmentação do saber.", "correta": false },
          { texto: "O isolamento dos fenômenos.", "correta": false }
        ],
        feedback: "Para um conhecimento relevante, é essencial evidenciar o contexto, o global, o multidimensional e o complexo."
      },
      {
        tema: "Didática",
        pergunta: "O que é necessário para que a informação tenha sentido?",
        respostas: [
          { texto: "Isolá-la de seu contexto.", "correta": false },
          { texto: "Situá-la em seu contexto.", "correta": true },
          { texto: "Torná-la cada vez mais abstrata.", "correta": false },
          { texto: "Fragmentá-la em dados menores.", "correta": false }
        ],
        feedback: "Informações só fazem sentido quando são situadas em seu contexto, assim como uma palavra precisa de um texto."
      },
      {
        tema: "Didática",
        pergunta: "O que caracteriza o 'global' no conhecimento?",
        respostas: [
          { texto: "A simples reunião de dados isolados.", "correta": false },
          { texto: "O conjunto de partes ligadas de maneira interdependente.", "correta": true },
          { texto: "A separação dos elementos do todo.", "correta": false },
          { texto: "O estudo apenas de uma dimensão do problema.", "correta": false }
        ],
        feedback: "O 'global' é mais que um contexto; é a ligação interdependente das partes formando um todo organizado."
      },
      {
        tema: "Didática",
        pergunta: "Por que o conhecimento das informações isoladas é considerado insuficiente?",
        respostas: [
          { texto: "Porque basta conhecer dados sem contexto.", "correta": false },
          { texto: "Porque isoladamente os dados perdem seu sentido completo.", "correta": true },
          { texto: "Porque todas as informações são irrelevantes.", "correta": false },
          { texto: "Porque a contextualização confunde mais do que ajuda.", "correta": false }
        ],
        feedback: "Sem contexto, a informação perde seu verdadeiro significado e utilidade no entendimento dos fenômenos."
      },
      {
        tema: "Didática",
        pergunta: "O que Claude Bastien afirma sobre a evolução cognitiva?",
        respostas: [
          { texto: "Que caminha para abstrações cada vez maiores.", "correta": false },
          { texto: "Que visa eliminar o contexto das informações.", "correta": false },
          { texto: "Que se orienta para a contextualização do conhecimento.", "correta": true },
          { texto: "Que deve focar apenas na especialização extrema.", "correta": false }
        ],
        feedback: "Claude Bastien aponta que o avanço do conhecimento exige a contextualização para ser realmente eficaz."
      },
      {
        tema: "Didática",
        pergunta: "O que caracteriza o todo em relação às suas partes, segundo o texto?",
        respostas: [
          { texto: "O todo é apenas a soma das partes.", "correta": false },
          { texto: "O todo possui qualidades que não estão nas partes isoladas.", "correta": true },
          { texto: "O todo impede o funcionamento das partes.", "correta": false },
          { texto: "O todo é irrelevante para entender o contexto.", "correta": false }
        ],
        feedback: "O todo apresenta propriedades únicas que não aparecem ao analisar apenas as partes separadamente."
      },
      {
        tema: "Didática",
        pergunta: "O que significa dizer que o ser humano é 'hologrâmico'?",
        respostas: [
          { texto: "Cada parte do ser humano é independente do todo.", "correta": false },
          { texto: "Cada indivíduo contém a sociedade de maneira fragmentada.", "correta": false },
          { texto: "Cada indivíduo carrega em si o todo social e biológico.", "correta": true },
          { texto: "O ser humano não possui ligação com o meio em que vive.", "correta": false }
        ],
        feedback: "Ser 'hologrâmico' significa que cada indivíduo traz consigo as características e influências do todo social e biológico ao qual pertence."
      },
      
      {
        tema: "Didática",
        pergunta: "Por que é necessário situar tudo no contexto planetário?",
        respostas: [
          { texto: "Para evitar qualquer tipo de conhecimento.", correta: false },
          { texto: "Para entender somente informações locais.", correta: false },
          { texto: "Porque os problemas atuais são globais e interconectados.", correta: true },
          { texto: "Para reforçar a separação entre as disciplinas.", correta: false }
        ],
        feedback: "O contexto atual exige compreender os problemas de forma global e interconectada, pois a realidade é planetária."
      },
      {
        tema: "Didática",
        pergunta: "O que a educação precisa evidenciar para tornar o conhecimento pertinente?",
        respostas: [
          { texto: "Somente os dados isolados.", correta: false },
          { texto: "O contexto, o global, o multidimensional e o complexo.", correta: true },
          { texto: "A fragmentação do saber.", correta: false },
          { texto: "O isolamento dos fenômenos.", correta: false }
        ],
        feedback: "Para um conhecimento relevante, é essencial evidenciar o contexto, o global, o multidimensional e o complexo."
      },
      {
        tema: "Didática",
        pergunta: "O que é necessário para que a informação tenha sentido?",
        respostas: [
          { texto: "Isolá-la de seu contexto.", correta: false },
          { texto: "Situá-la em seu contexto.", correta: true },
          { texto: "Torná-la cada vez mais abstrata.", correta: false },
          { texto: "Fragmentá-la em dados menores.", correta: false }
        ],
        feedback: "Informações só fazem sentido quando são situadas em seu contexto, assim como uma palavra precisa de um texto."
      },
      {
        tema: "Didática",
        pergunta: "O que caracteriza o 'global' no conhecimento?",
        respostas: [
          { texto: "A simples reunião de dados isolados.", correta: false },
          { texto: "O conjunto de partes ligadas de maneira interdependente.", correta: true },
          { texto: "A separação dos elementos do todo.", correta: false },
          { texto: "O estudo apenas de uma dimensão do problema.", correta: false }
        ],
        feedback: "O 'global' é mais que um contexto; é a ligação interdependente das partes formando um todo organizado."
      },
      {
        tema: "Didática",
        pergunta: "Por que o conhecimento das informações isoladas é considerado insuficiente?",
        respostas: [
          { texto: "Porque basta conhecer dados sem contexto.", correta: false },
          { texto: "Porque isoladamente os dados perdem seu sentido completo.", correta: true },
          { texto: "Porque todas as informações são irrelevantes.", correta: false },
          { texto: "Porque a contextualização confunde mais do que ajuda.", correta: false }
        ],
        feedback: "Sem contexto, a informação perde seu verdadeiro significado e utilidade no entendimento dos fenômenos."
      },
      {
        tema: "Didática",
        pergunta: "O que Claude Bastien afirma sobre a evolução cognitiva?",
        respostas: [
          { texto: "Que caminha para abstrações cada vez maiores.", correta: false },
          { texto: "Que visa eliminar o contexto das informações.", correta: false },
          { texto: "Que se orienta para a contextualização do conhecimento.", correta: true },
          { texto: "Que deve focar apenas na especialização extrema.", correta: false }
        ],
        feedback: "Claude Bastien aponta que o avanço do conhecimento exige a contextualização para ser realmente eficaz."
      },
      {
        tema: "Didática",
        pergunta: "O que caracteriza o todo em relação às suas partes, segundo o texto?",
        respostas: [
          { texto: "O todo é apenas a soma das partes.", correta: false },
          { texto: "O todo possui qualidades que não estão nas partes isoladas.", correta: true },
          { texto: "O todo impede o funcionamento das partes.", correta: false },
          { texto: "O todo é irrelevante para entender o contexto.", correta: false }
        ],
        feedback: "O todo apresenta propriedades únicas que não aparecem ao analisar apenas as partes separadamente."
      },
      {
        tema: "Didática",
        pergunta: "O que significa dizer que o ser humano é 'hologrâmico'?",
        respostas: [
          { texto: "Cada parte do ser humano é independente do todo.", correta: false },
          { texto: "Cada indivíduo contém a sociedade de maneira fragmentada.", correta: false },
          { texto: "Cada indivíduo carrega em si o todo social e biológico.", correta: true },
          { texto: "O ser humano não possui ligação com o meio em que vive.", correta: false }
        ],
        feedback: "Ser 'hologrâmico' significa que cada indivíduo traz consigo as características e influências do todo social e biológico ao qual pertence."
      },
      {
        tema: "Didática",
        pergunta: "O que o docente deve fazer para auxiliar a aprendizagem na EaD?",
        respostas: [
          { texto: "Planejar a didática e ser proativo.", correta: true },
          { texto: "Apenas enviar materiais e esperar o aluno estudar.", correta: false },
          { texto: "Delegar toda responsabilidade ao aluno.", correta: false },
          { texto: "Apenas corrigir atividades no final do curso.", correta: false }
        ],
        feedback: "O docente deve planejar, ser dinâmico, analisar resultados e manter uma postura proativa."
      },
      {
        tema: "Didática",
        pergunta: "Quais são alguns fatores que causam problemas de aprendizagem na EaD?",
        respostas: [
          { texto: "Falta de tecnologia moderna.", correta: false },
          { texto: "Falhas na comunicação entre professor e aluno.", correta: true },
          { texto: "Excesso de atividades práticas.", correta: false },
          { texto: "Número reduzido de disciplinas.", correta: false }
        ],
        feedback: "Problemas de comunicação e falta de interação causam dificuldades de aprendizagem na EaD."
      },
      {
        tema: "Didática",
        pergunta: "O que a didática moderna deve considerar em relação aos alunos?",
        respostas: [
          { texto: "Conhecimentos prévios e autonomia do aluno.", correta: true },
          { texto: "Aplicação rígida de métodos antigos.", correta: false },
          { texto: "Foco exclusivo na transmissão de conteúdos.", correta: false },
          { texto: "Controle total sobre a aprendizagem do aluno.", correta: false }
        ],
        feedback: "A didática moderna deve respeitar conhecimentos prévios, estimular a autonomia e flexibilizar o ensino."
      },
      {
        tema: "Didática",
        pergunta: "O que Vygotsky chamou de Zona de Desenvolvimento Proximal (ZDP)?",
        respostas: [
          { texto: "Aprendizado que ocorre de forma totalmente independente.", correta: false },
          { texto: "Aprendizado com o auxílio de outra pessoa.", correta: true },
          { texto: "Desenvolvimento apenas biológico.", correta: false },
          { texto: "Desenvolvimento exclusivamente emocional.", correta: false }
        ],
        feedback: "A Zona de Desenvolvimento Proximal representa o que o indivíduo pode aprender com a ajuda de outra pessoa."
      },
      {
        tema: "Didática",
        pergunta: "Segundo Vygotsky, o que é essencial para a aprendizagem?",
        respostas: [
          { texto: "A prática solitária do aluno.", correta: false },
          { texto: "A interação social e cultural.", correta: true },
          { texto: "A memorização de conteúdos.", correta: false },
          { texto: "O uso apenas de tecnologia avançada.", correta: false }
        ],
        feedback: "A interação social e cultural é fundamental para o processo de aprendizagem, segundo Vygotsky."
      },
      {
        tema: "Didática",
        pergunta: "O que caracteriza a aprendizagem mediada segundo Rigo (2015)?",
        respostas: [
          { texto: "Processo casual e espontâneo.", correta: false },
          { texto: "Processo intencional e planejado.", correta: true },
          { texto: "Processo sem participação ativa do tutor.", correta: false },
          { texto: "Processo que ocorre apenas de forma presencial.", correta: false }
        ],
        feedback: "A aprendizagem mediada é planejada e organizada para tornar o processo mais efetivo."
      },
      {
        tema: "Didática",
        pergunta: "Qual o papel do tutor na EaD?",
        respostas: [
          { texto: "Condutor dos estudos do aluno.", correta: false },
          { texto: "Facilitador da aprendizagem.", correta: true },
          { texto: "Administrador de conteúdos apenas.", correta: false },
          { texto: "Observador passivo no processo de ensino.", correta: false }
        ],
        feedback: "O tutor deve ser um facilitador da aprendizagem, promovendo interação e autonomia do aluno."
      },
      {
        tema: "Didática",
        pergunta: "O que é importante considerar na prática pedagógica da EaD?",
        respostas: [
          { texto: "Apenas o conteúdo teórico.", correta: false },
          { texto: "Conhecimentos prévios e contexto social do aluno.", correta: true },
          { texto: "Controle total sobre a aprendizagem do aluno.", correta: false },
          { texto: "Ausência de atividades práticas.", correta: false }
        ],
        feedback: "É essencial considerar os conhecimentos prévios, o contexto social e estimular a socialização na EaD."
      },
      {
        tema: "Didática",
        pergunta: "O que o tutor deve proporcionar no AVEA?",
        respostas: [
          { texto: "Somente a disponibilização de conteúdos.", correta: false },
          { texto: "Autonomia, interação e apoio constante ao aluno.", correta: true },
          { texto: "Comunicação unidirecional.", correta: false },
          { texto: "Controle absoluto do ritmo de estudos do aluno.", correta: false }
        ],
        feedback: "O tutor deve promover a autonomia do aluno e incentivá-lo com interação e apoio no ambiente virtual."
      },
      {
        tema: "Didática",
        pergunta: "O que é o Ambiente Virtual de Ensino e Aprendizagem (AVEA)?",
        respostas: [
          { texto: "Uma ferramenta apenas de armazenamento de arquivos.", correta: false },
          { texto: "Uma plataforma para interação, aprendizagem e comunicação.", correta: true },
          { texto: "Uma rede social sem objetivo educacional.", correta: false },
          { texto: "Uma biblioteca virtual apenas para consulta.", correta: false }
        ],
        feedback: "O AVEA é um ambiente que promove a aprendizagem através de interação, comunicação e recursos educativos."
      },
      {
        tema: "Didática",
        pergunta: "Qual deve ser o objetivo dos AVEAs?",
        respostas: [
          { texto: "Apenas armazenar conteúdos.", correta: false },
          { texto: "Promover aprendizagens colaborativas e significativas.", correta: true },
          { texto: "Servir apenas como mural de avisos.", correta: false },
          { texto: "Facilitar a memorização sem interação.", correta: false }
        ],
        feedback: "O objetivo dos AVEAs é promover aprendizagens colaborativas, ativas e significativas."
      },
      {
        tema: "Didática",
        pergunta: "O que é o Moodle?",
        respostas: [
          { texto: "Uma ferramenta de videoconferência.", correta: false },
          { texto: "Uma rede social educativa.", correta: false },
          { texto: "Uma plataforma LMS gratuita e de código aberto.", correta: true },
          { texto: "Um fórum de debates gerais.", correta: false }
        ],
        feedback: "O Moodle é um LMS gratuito e aberto para gerenciamento de conteúdos educacionais e atividades em EaD."
      },
      {
        tema: "Didática",
        pergunta: "O que é o pacote SCORM?",
        respostas: [
          { texto: "Uma rede de contatos educacionais.", correta: false },
          { texto: "Um padrão para organização de conteúdos online.", correta: true },
          { texto: "Uma ferramenta de chat online.", correta: false },
          { texto: "Um tipo de avaliação automatizada.", correta: false }
        ],
        feedback: "O SCORM é um padrão que permite organizar conteúdos para plataformas de ensino a distância."
      },
      {
        tema: "Didática",
        pergunta: "O que a tecnologia deve representar na educação?",
        respostas: [
          { texto: "Um fim em si mesma.", correta: false },
          { texto: "Um instrumento para alcançar objetivos educacionais.", correta: true },
          { texto: "Uma forma de substituir professores.", correta: false },
          { texto: "Uma maneira de automatizar tudo sem interação.", correta: false }
        ],
        feedback: "A tecnologia deve ser um meio para potencializar a aprendizagem, e não um objetivo final."
      },
      {
        tema: "Didática",
        pergunta: "O que caracteriza a Educação a Distância (EaD)?",
        respostas: [
          { texto: "Interação física constante entre alunos e professores.", correta: false },
          { texto: "Separação entre espaço e tempo de professores e alunos.", correta: true },
          { texto: "Aulas exclusivamente síncronas.", correta: false },
          { texto: "Uso exclusivo de livros impressos.", correta: false }
        ],
        feedback: "A EaD caracteriza-se pela separação física e temporal entre professor e aluno."
      },
      {
        tema: "Didática",
        pergunta: "Como as informações se transformam em conhecimento?",
        respostas: [
          { texto: "Apenas por repetição de conteúdos.", correta: false },
          { texto: "Através da organização das informações e ação prática.", correta: true },
          { texto: "Por absorção passiva de dados.", correta: false },
          { texto: "Somente por leituras obrigatórias.", correta: false }
        ],
        feedback: "As informações se tornam conhecimento quando organizadas e aplicadas de forma prática e reflexiva."
      },
      {
        tema: "Didática",
        pergunta: "Qual é uma das principais estratégias de mediação pedagógica online?",
        respostas: [
          { texto: "Responder apenas alunos com melhor desempenho.", correta: false },
          { texto: "Dar feedback no menor tempo possível a todos os alunos.", correta: true },
          { texto: "Responder apenas ao final do curso.", correta: false },
          { texto: "Comunicar-se apenas por e-mail.", correta: false }
        ],
        feedback: "O feedback rápido e atencioso é essencial para a mediação pedagógica online eficaz."
      },
      {
        tema: "Didática",
        pergunta: "O que o tutor deve fortalecer no EaD?",
        respostas: [
          { texto: "O isolamento do aluno.", correta: false },
          { texto: "O sentimento de presencialidade e pertencimento.", correta: true },
          { texto: "A comunicação unidirecional.", correta: false },
          { texto: "Apenas o uso de fóruns.", correta: false }
        ],
        feedback: "O tutor deve promover o sentimento de pertencimento e a interação para fortalecer o aprendizado."
      },
      {
        tema: "Didática",
        pergunta: "O que é fundamental para que o tutor realize uma boa mediação?",
        respostas: [
          { texto: "Comunicação eficiente e aprimorada.", correta: true },
          { texto: "Foco apenas nos conteúdos técnicos.", correta: false },
          { texto: "Ausência de interação com os alunos.", correta: false },
          { texto: "Utilização exclusiva de provas objetivas.", correta: false }
        ],
        feedback: "Uma comunicação eficiente e o constante aprimoramento são essenciais para a mediação na EaD."
      },
      {
        tema: "Didática",
        pergunta: "Qual a importância da interação no EaD?",
        respostas: [
          { texto: "É dispensável na maioria dos cursos.", correta: false },
          { texto: "É essencial para a construção do conhecimento.", correta: true },
          { texto: "Serve apenas para distração dos alunos.", correta: false },
          { texto: "Só é necessária em disciplinas de exatas.", correta: false }
        ],
        feedback: "A interação é essencial para criar vínculos, motivar e promover a construção do conhecimento no EaD."
      },
      {
        tema: "Didática",
        pergunta: "Como deve ser a resposta do tutor nas interações?",
        respostas: [
          { texto: "Apenas para quem perguntar diretamente.", correta: false },
          { texto: "Feita para todos o mais rápido possível.", correta: true },
          { texto: "Somente no final do curso.", correta: false },
          { texto: "Limitada a respostas automáticas.", correta: false }
        ],
        feedback: "O tutor deve responder a todos os alunos o mais rápido possível para manter a motivação e o engajamento."
      },
      {
        tema: "Didática",
        pergunta: "Qual o papel do tutor em relação ao sentimento de pertencimento do aluno?",
        respostas: [
          { texto: "Ignorar as emoções dos alunos.", correta: false },
          { texto: "Fortalecer o sentimento de pertencimento e acolhimento.", correta: true },
          { texto: "Focar apenas na entrega de conteúdos.", correta: false },
          { texto: "Agir apenas como supervisor de notas.", correta: false }
        ],
        feedback: "O tutor deve fortalecer o sentimento de pertencimento para motivar e apoiar o aluno em sua jornada de aprendizagem."
      },
      {
        tema: "Didática",
        pergunta: "O que o tutor deve evitar no processo de mediação?",
        respostas: [
          { texto: "Promover a interação constante.", correta: false },
          { texto: "Responder apenas os melhores alunos.", correta: true },
          { texto: "Dar feedbacks rápidos e eficientes.", correta: false },
          { texto: "Facilitar a aprendizagem em rede.", correta: false }
        ],
        feedback: "O tutor não deve priorizar alunos; o atendimento e feedback devem ser para todos de forma igualitária e rápida."
      },
      {
        tema: "Didática",
        pergunta: "Qual a importância do aprimoramento da comunicação do tutor?",
        respostas: [
          { texto: "É indiferente no EaD.", correta: false },
          { texto: "É essencial para uma boa mediação.", correta: true },
          { texto: "Serve apenas para registros administrativos.", correta: false },
          { texto: "Não interfere na aprendizagem do aluno.", correta: false }
        ],
        feedback: "A comunicação aprimorada é fundamental para garantir uma mediação eficiente e promover a aprendizagem na EaD."
      },
      {
        tema: "Didática",
        pergunta: "O que foi abordado na aula sobre dificuldades de aprendizagem em EaD?",
        respostas: [
          { texto: "Que a EaD não apresenta desafios de aprendizagem.", correta: false },
          { texto: "Que a mediação e a comunicação são essenciais para superar dificuldades.", correta: true },
          { texto: "Que a responsabilidade é apenas dos alunos.", correta: false },
          { texto: "Que os alunos devem estudar sem mediação.", correta: false }
        ],
        feedback: "A aula destacou a importância da mediação, comunicação e estratégias pedagógicas para superar dificuldades na EaD."
      },
      {
        tema: "Didática",
        pergunta: "O que as práticas pedagógicas devem considerar no ensino?",
        respostas: [
          { texto: "Somente os conteúdos previstos.", correta: false },
          { texto: "O contexto social e os conhecimentos prévios dos alunos.", correta: true },
          { texto: "A quantidade de avaliações.", correta: false },
          { texto: "A velocidade de execução das tarefas.", correta: false }
        ],
        feedback: "As práticas pedagógicas devem considerar o contexto social, os conhecimentos prévios e o incentivo à aprendizagem significativa."
      },{
        tema: "Didática",
        pergunta: "Qual é a principal característica das metodologias ativas?",
        respostas: [
          { texto: "O aluno escuta passivamente.", correta: false },
          { texto: "O aluno é agente principal no processo de aprendizagem.", correta: true },
          { texto: "O professor é a única fonte de conhecimento.", correta: false },
          { texto: "O aprendizado ocorre apenas por repetição.", correta: false }
        ],
        feedback: "Nas metodologias ativas, o aluno assume papel principal, participando de forma ativa e colaborativa."
      },
      {
        tema: "Didática",
        pergunta: "Como o professor atua nas metodologias ativas?",
        respostas: [
          { texto: "Como transmissor de conteúdo.", correta: false },
          { texto: "Como mediador e motivador do conhecimento.", correta: true },
          { texto: "Como supervisor das avaliações apenas.", correta: false },
          { texto: "Como responsável único pelas decisões de aprendizagem.", correta: false }
        ],
        feedback: "O professor atua como mediador, orientando e motivando os alunos a atingirem seus objetivos educacionais."
      },
      {
        tema: "Didática",
        pergunta: "O que caracteriza o acesso aos conteúdos nas metodologias ativas?",
        respostas: [
          { texto: "O conteúdo é apenas transmitido pelo professor.", correta: false },
          { texto: "Os alunos acessam e refletem sobre os conteúdos previamente.", correta: true },
          { texto: "O aluno apenas memoriza o conteúdo em aula.", correta: false },
          { texto: "Os conteúdos são disponibilizados apenas no final do curso.", correta: false }
        ],
        feedback: "Os conteúdos são acessados previamente para que os alunos analisem e discutam em sala, aprofundando o aprendizado."
      },
      {
        tema: "Didática",
        pergunta: "O que é gamificação na educação?",
        respostas: [
          { texto: "Aplicar somente testes online.", correta: false },
          { texto: "Uso de elementos de jogos para estimular a aprendizagem.", correta: true },
          { texto: "Fazer atividades práticas sem regras.", correta: false },
          { texto: "Distribuir prêmios aleatoriamente para alunos.", correta: false }
        ],
        feedback: "A gamificação utiliza dinâmicas de jogos para motivar, engajar e personalizar a aprendizagem dos alunos."
      },
      {
        tema: "Didática",
        pergunta: "Qual é o conceito de Ambiente Virtual de Aprendizagem (AVA)?",
        respostas: [
          { texto: "É um espaço físico para encontros presenciais.", correta: false },
          { texto: "É um espaço para interação e construção de conhecimentos.", correta: true },
          { texto: "É uma biblioteca digital apenas.", correta: false },
          { texto: "É uma plataforma para jogos educativos.", correta: false }
        ],
        feedback: "O AVA é um ambiente que promove a interação entre alunos, professores e conteúdos, potencializando a aprendizagem."
      },
      {
        tema: "Didática",
        pergunta: "Segundo Pierre Lévy, o que é 'virtual'?",
        respostas: [
          { texto: "Aquilo que é apenas imaginário.", correta: false },
          { texto: "Algo em potência, que pode se atualizar.", correta: true },
          { texto: "Algo oposto ao real.", correta: false },
          { texto: "Algo já desenvolvido e finalizado.", correta: false }
        ],
        feedback: "Para Lévy, o virtual é o que existe em potencial, como uma semente que pode se tornar uma árvore."
      },
      {
        tema: "Didática",
        pergunta: "O que as Tecnologias de Informação e Comunicação (TICs) podem fazer nos AVAs?",
        respostas: [
          { texto: "Limitar a interação entre alunos.", correta: false },
          { texto: "Potencializar novas formas de aprendizagem e sociabilidade.", correta: true },
          { texto: "Impedir a colaboração.", correta: false },
          { texto: "Restringir o acesso ao conhecimento.", correta: false }
        ],
        feedback: "As TICs expandem as possibilidades de interação, sociabilidade e aprendizagem nos ambientes virtuais."
      },
      {
        tema: "Didática",
        pergunta: "O que é ciberespaço segundo Santos (2005)?",
        respostas: [
          { texto: "Um local físico de estudos.", correta: false },
          { texto: "Um espaço de comunicação e aprendizagem potencializado pela tecnologia.", correta: true },
          { texto: "Uma rede de computadores isolados.", correta: false },
          { texto: "Uma sala de aula presencial ampliada.", correta: false }
        ],
        feedback: "O ciberespaço é o meio digital que conecta pessoas e promove novas formas de aprendizagem e comunicação."
      },
      {
        tema: "Didática",
        pergunta: "O que caracteriza a comunicação no ciberespaço dentro dos AVAs?",
        respostas: [
          { texto: "Comunicação exclusivamente presencial.", correta: false },
          { texto: "Comunicação síncrona e assíncrona entre todos os participantes.", correta: true },
          { texto: "Envio de conteúdos sem interação.", correta: false },
          { texto: "Distribuição passiva de textos e materiais.", correta: false }
        ],
        feedback: "No ciberespaço, os AVAs permitem comunicações síncronas e assíncronas entre todos os participantes, favorecendo a troca de conhecimento."
      },
      {
        tema: "Didática",
        pergunta: "No AVA, os alunos são apenas receptores de informações?",
        respostas: [
          { texto: "Sim, eles apenas recebem conteúdos.", correta: false },
          { texto: "Não, eles são emissores e receptores de conhecimento.", correta: true },
          { texto: "Sim, porque o tutor controla toda a comunicação.", correta: false },
          { texto: "Não, mas sua participação é limitada a avaliações.", correta: false }
        ],
        feedback: "Os alunos no AVA são tanto emissores quanto receptores, construindo conhecimento de maneira ativa e colaborativa."
      },
      {
        tema: "Didática",
        pergunta: "O que é a cibercultura?",
        respostas: [
          { texto: "Uma cultura baseada em livros físicos.", correta: false },
          { texto: "O conjunto de práticas e costumes gerados pela interação com a tecnologia.", correta: true },
          { texto: "A eliminação de qualquer interação humana.", correta: false },
          { texto: "Uma cultura restrita ao ambiente acadêmico.", correta: false }
        ],
        feedback: "A cibercultura é formada pelas novas práticas, hábitos e relações sociais que surgem com o uso intensivo das tecnologias digitais."
      },
      {
        tema: "Didática",
        pergunta: "Qual crítica é feita aos cursos EaD em relação ao uso dos AVAs?",
        respostas: [
          { texto: "Excesso de interação entre participantes.", correta: false },
          { texto: "Falta de interação e excesso de conteúdos lineares.", correta: true },
          { texto: "Alta taxa de evasão por excesso de recursos interativos.", correta: false },
          { texto: "Dependência excessiva de fóruns para avaliação.", correta: false }
        ],
        feedback: "Uma crítica comum é que muitos cursos EaD limitam os AVAs a distribuição de textos, sem interação ou construção coletiva."
      },
      {
        tema: "Didática",
        pergunta: "Como a avaliação deveria ser realizada em cursos EaD?",
        respostas: [
          { texto: "Apenas com testes de múltipla escolha.", correta: false },
          { texto: "De forma formativa e dialógica, para apoiar a aprendizagem.", correta: true },
          { texto: "Baseada somente em atividades automáticas.", correta: false },
          { texto: "Com provas presenciais obrigatórias.", correta: false }
        ],
        feedback: "A avaliação na EaD deve ser um processo formativo, que ofereça informações para orientar e apoiar a aprendizagem do aluno."
      },
      {
        tema: "Didática",
        pergunta: "O que os AVAs devem oferecer para uma aprendizagem de qualidade?",
        respostas: [
          { texto: "Somente armazenamento de textos.", correta: false },
          { texto: "Recursos de interação, colaboração e construção coletiva.", correta: true },
          { texto: "Apenas entrega de provas e trabalhos.", correta: false },
          { texto: "Listas de exercícios sem retorno.", correta: false }
        ],
        feedback: "Para promover aprendizagem significativa, os AVAs precisam incentivar a interação, o compartilhamento e a construção coletiva."
      },
      {
        tema: "Didática",
        pergunta: "O que a metodologia ativa estimula no aluno?",
        respostas: [
          { texto: "A dependência do professor para resolver problemas.", correta: false },
          { texto: "A prática da autoavaliação e autonomia na aprendizagem.", correta: true },
          { texto: "A passividade diante dos conteúdos.", correta: false },
          { texto: "Apenas a repetição de informações.", correta: false }
        ],
        feedback: "A metodologia ativa busca estimular no aluno a capacidade de autoavaliação e de conduzir seu próprio processo de aprendizagem."
      },
      {
        tema: "Didática",
        pergunta: "Onde as metodologias ativas podem ser aplicadas?",
        respostas: [
          { texto: "Somente na educação presencial.", correta: false },
          { texto: "No ensino presencial, na EaD e no modelo híbrido.", correta: true },
          { texto: "Apenas em cursos de curta duração.", correta: false },
          { texto: "Exclusivamente em cursos de graduação presencial.", correta: false }
        ],
        feedback: "As metodologias ativas podem ser aplicadas em diferentes modalidades: presencial, EaD e modelo híbrido."
      },
      {
        tema: "Didática",
        pergunta: "Na metodologia ativa, quem é o protagonista do processo de aprendizagem?",
        respostas: [
          { texto: "O professor.", correta: false },
          { texto: "O aluno.", correta: true },
          { texto: "O tutor.", correta: false },
          { texto: "O sistema de avaliação.", correta: false }
        ],
        feedback: "O aluno é o protagonista no processo de construção do próprio conhecimento nas metodologias ativas."
      },
      {
        tema: "Didática",
        pergunta: "O que as metodologias ativas buscam desenvolver nos alunos?",
        respostas: [
          { texto: "Dependência de materiais prontos.", correta: false },
          { texto: "Capacidade de reflexão, autonomia e resolução de problemas.", correta: true },
          { texto: "Foco exclusivo em provas teóricas.", correta: false },
          { texto: "Apenas a habilidade de copiar conteúdos.", correta: false }
        ],
        feedback: "As metodologias ativas desenvolvem autonomia, pensamento crítico e capacidade de resolução de problemas."
      },
      {
        tema: "Didática",
        pergunta: "Qual é a importância do ciberespaço para a educação contemporânea?",
        respostas: [
          { texto: "Ele limita o contato entre as pessoas.", correta: false },
          { texto: "Ele facilita a conexão e a formação de comunidades virtuais.", correta: true },
          { texto: "Ele substitui todas as formas de ensino presencial.", correta: false },
          { texto: "Ele restringe o acesso a conteúdos educativos.", correta: false }
        ],
        feedback: "O ciberespaço facilita a formação de redes de comunicação e comunidades de aprendizagem virtual."
      },
      {
        tema: "Didática",
        pergunta: "Quais temas foram abordados nesta aula?",
        respostas: [
          { texto: "Somente técnicas de avaliação online.", correta: false },
          { texto: "Desenvolvimento da aprendizagem por metodologias ativas, AVEA, tecnologias digitais e ciberespaço.", correta: true },
          { texto: "Somente história da internet.", correta: false },
          { texto: "Somente métodos de ensino tradicional.", correta: false }
        ],
        feedback: "A aula abordou o desenvolvimento da aprendizagem ativa, o uso dos ambientes virtuais, tecnologias digitais e ciberespaço."
      },
      
      
      
  
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
    },
    {
        tema: "TIC",
        pergunta: "O que é usabilidade em um Ambiente Virtual de Aprendizagem?",
        respostas: [
          { texto: "A capacidade de ser visualmente bonito apenas.", correta: false },
          { texto: "A capacidade de ser compreendido, aprendido, operado e atraente ao usuário.", correta: true },
          { texto: "A quantidade de ferramentas disponíveis no sistema.", correta: false },
          { texto: "A capacidade de bloquear ações de alunos para evitar erros.", correta: false }
        ],
        feedback: "Usabilidade é tornar o ambiente fácil de usar, compreensível e satisfatório para o usuário."
      },
      {
        tema: "TIC",
        pergunta: "Segundo o texto, quem deve participar da concepção de um AVA?",
        respostas: [
          { texto: "Apenas programadores e designers.", correta: false },
          { texto: "Profissionais de educação e os próprios usuários (alunos e professores).", correta: true },
          { texto: "Somente os gestores da plataforma.", correta: false },
          { texto: "Apenas alunos mais experientes.", correta: false }
        ],
        feedback: "Tanto alunos quanto professores devem ser ouvidos para melhorar a usabilidade e eficácia do AVA."
      },
      {
        tema: "TIC",
        pergunta: "Qual conceito é associado às Tecnologias da Informação e Comunicação (TIC) na educação?",
        respostas: [
          { texto: "Ferramentas que apenas substituem professores.", correta: false },
          { texto: "Recursos que mudam o ambiente escolar e ampliam as formas de aprendizagem.", correta: true },
          { texto: "Tecnologias que dificultam o aprendizado remoto.", correta: false },
          { texto: "Recursos usados exclusivamente para comunicação empresarial.", correta: false }
        ],
        feedback: "As TICs ampliam o ambiente escolar, criando novas formas de interação e aprendizagem."
      },
      {
        tema: "TIC",
        pergunta: "Qual é o principal benefício da Educação a Distância segundo o texto?",
        respostas: [
          { texto: "Reduzir custos de ensino em grandes cidades.", correta: false },
          { texto: "Levar conhecimento a regiões distantes e oferecer flexibilidade ao aluno.", correta: true },
          { texto: "Facilitar somente cursos livres e informais.", correta: false },
          { texto: "Eliminar a necessidade de material didático.", correta: false }
        ],
        feedback: "A EaD amplia o acesso ao ensino, principalmente para regiões distantes e alunos que precisam de flexibilidade."
      },
      {
        tema: "TIC",
        pergunta: "O que caracteriza um Ambiente Virtual de Aprendizagem (AVA)?",
        respostas: [
          { texto: "Um espaço para socialização sem fins educacionais.", correta: false },
          { texto: "Uma plataforma que combina recursos pedagógicos e TICs para educação.", correta: true },
          { texto: "Um local para apenas armazenar conteúdos.", correta: false },
          { texto: "Uma rede social para troca de mensagens rápidas.", correta: false }
        ],
        feedback: "O AVA integra tecnologia e educação para criar ambientes de aprendizagem dinâmicos."
      },
      {
        tema: "TIC",
        pergunta: "Quais são exemplos de interfaces de comunicação em AVAs?",
        respostas: [
          { texto: "Somente e-mails corporativos.", correta: false },
          { texto: "Mouse, teclado, microfone e tela do monitor.", correta: true },
          { texto: "Cadernos e livros impressos.", correta: false },
          { texto: "Telefone fixo e fax.", correta: false }
        ],
        feedback: "Interfaces como mouse, teclado e telas são meios que possibilitam a interação homem-máquina nos AVAs."
      },
      {
        tema: "TIC",
        pergunta: "Qual foi a principal inovação trazida pelos Softwares Livres para a EaD?",
        respostas: [
          { texto: "Reduzir o custo de manutenção dos sistemas.", correta: false },
          { texto: "Promover ambientes interativos como os AVAs.", correta: true },
          { texto: "Restringir o acesso a conteúdos educacionais.", correta: false },
          { texto: "Proibir o uso de internet em escolas públicas.", correta: false }
        ],
        feedback: "Softwares livres permitiram criar ambientes de ensino mais interativos e colaborativos, como o Moodle."
      },
      {
        tema: "TIC",
        pergunta: "Quais vantagens um AVA oferece aos alunos?",
        respostas: [
          { texto: "Controle rígido do ritmo de estudo pelo professor.", correta: false },
          { texto: "Autonomia no ritmo, sequência e tempo de aprendizagem.", correta: true },
          { texto: "Exclusão da avaliação de aprendizado.", correta: false },
          { texto: "Acesso limitado a materiais didáticos.", correta: false }
        ],
        feedback: "O AVA permite ao aluno controlar seu ritmo de estudo e acessar conteúdos de forma flexível."
      },
      {
        tema: "TIC",
        pergunta: "O que significa a sigla 'Moodle'?",
        respostas: [
          { texto: "Modern Organized Online Learning Environment.", correta: false },
          { texto: "Modular Object-Oriented Dynamic Learning Environment.", correta: true },
          { texto: "Model of Online Open Learning Environment.", correta: false },
          { texto: "Mobile Open Office Learning Education.", correta: false }
        ],
        feedback: "Moodle significa Modular Object-Oriented Dynamic Learning Environment, ou Ambiente Modular de Aprendizagem Dinâmico."
      },
      {
        tema: "TIC",
        pergunta: "Quem desenvolveu o Moodle?",
        respostas: [
          { texto: "Tim Berners-Lee.", correta: false },
          { texto: "Martin Dougiamas.", correta: true },
          { texto: "Bill Gates.", correta: false },
          { texto: "Elon Musk.", correta: false }
        ],
        feedback: "O Moodle foi criado por Martin Dougiamas em 1999 como software livre para facilitar o ensino online."
      },
      {
        tema: "TIC",
        pergunta: "No que o Moodle se destaca em comparação com outros AVAs?",
        respostas: [
          { texto: "Permitir apenas aulas expositivas sem interação.", correta: false },
          { texto: "Facilitar a criação de cursos dinâmicos e interativos.", correta: true },
          { texto: "Limitar o acesso de alunos aos recursos.", correta: false },
          { texto: "Exigir conhecimento avançado em programação para uso.", correta: false }
        ],
        feedback: "O Moodle se destaca por possibilitar a criação de cursos dinâmicos, colaborativos e personalizáveis."
      },
      {
        tema: "TIC",
        pergunta: "Segundo o texto, o uso do Moodle nas universidades é mais comum em qual modalidade?",
        respostas: [
          { texto: "Ensino médio regular.", correta: false },
          { texto: "Ensino superior e formação de professores.", correta: true },
          { texto: "Cursos técnicos de curta duração.", correta: false },
          { texto: "Ensino fundamental anos iniciais.", correta: false }
        ],
        feedback: "O Moodle é amplamente utilizado no ensino superior e na formação continuada de professores."
      },
      {
        tema: "TIC",
        pergunta: "Qual é o papel da usabilidade em AVAs como o Moodle?",
        respostas: [
          { texto: "Tornar o sistema mais bonito visualmente.", correta: false },
          { texto: "Facilitar a navegação, aprendizado e satisfação do usuário.", correta: true },
          { texto: "Aumentar a quantidade de ferramentas complexas.", correta: false },
          { texto: "Tornar o ambiente restrito e difícil de acessar.", correta: false }
        ],
        feedback: "A usabilidade busca tornar a navegação simples, eficiente e agradável para os usuários dos AVAs."
      },
      {
        tema: "TIC",
        pergunta: "De acordo com a ISO 9126, qual é um dos fatores de usabilidade?",
        respostas: [
          { texto: "Quantidade de dados transmitidos por segundo.", correta: false },
          { texto: "Facilidade de aprendizado e eficiência de uso.", correta: true },
          { texto: "Tempo de resposta do servidor.", correta: false },
          { texto: "Quantidade de cursos hospedados no AVA.", correta: false }
        ],
        feedback: "A ISO 9126 define que a usabilidade inclui facilidade de aprendizado, eficiência, atratividade e conformidade."
      },
      {
        tema: "TIC",
        pergunta: "Segundo o texto, qual o objetivo principal de um AVA como o Moodle?",
        respostas: [
          { texto: "Armazenar grande quantidade de documentos.", correta: false },
          { texto: "Facilitar a aprendizagem por meio de uma interface amigável.", correta: true },
          { texto: "Limitar o acesso às informações para evitar dispersão.", correta: false },
          { texto: "Controlar o tempo que o aluno passa estudando.", correta: false }
        ],
        feedback: "O objetivo de um AVA é tornar o processo de aprendizagem mais acessível, agradável e eficiente para o aluno."
      },
      {
        tema: "TIC",
        pergunta: "Quais aspectos são importantes para garantir a boa usabilidade de um AVA?",
        respostas: [
          { texto: "Design chamativo e quantidade de funções.", correta: false },
          { texto: "Facilidade de uso, prevenção de erros e satisfação do usuário.", correta: true },
          { texto: "Falta de atualização do conteúdo.", correta: false },
          { texto: "Complexidade na navegação para estimular o aluno.", correta: false }
        ],
        feedback: "A boa usabilidade foca na facilidade, na prevenção de erros e na satisfação de quem utiliza o ambiente."
      },
      {
        tema: "TIC",
        pergunta: "Segundo Mozzaquatro e Medina, o que deve ser considerado na avaliação de um AVA?",
        respostas: [
          { texto: "A quantidade de usuários ativos apenas.", correta: false },
          { texto: "Interface, desempenho, ferramentas de comunicação e layout.", correta: true },
          { texto: "Velocidade de conexão da internet dos alunos.", correta: false },
          { texto: "Tamanho dos arquivos enviados pelos professores.", correta: false }
        ],
        feedback: "A avaliação de um AVA deve considerar tanto a interface como o desempenho, comunicação e layout para melhor experiência do usuário."
      },
      {
        tema: "TIC",
        pergunta: "Qual a principal crítica de alguns alunos em relação ao Moodle?",
        respostas: [
          { texto: "Excesso de conteúdos multimídia.", correta: false },
          { texto: "Interface confusa e dificuldade de navegação.", correta: true },
          { texto: "Falta de provas presenciais obrigatórias.", correta: false },
          { texto: "Baixa exigência de tarefas e avaliações.", correta: false }
        ],
        feedback: "Muitos alunos relatam que a interface do Moodle poderia ser mais organizada e intuitiva para facilitar o uso."
      },
      {
        tema: "TIC",
        pergunta: "Qual a importância da participação dos usuários na construção dos AVAs?",
        respostas: [
          { texto: "Melhorar apenas o design visual do ambiente.", correta: false },
          { texto: "Adaptar o ambiente às reais necessidades dos alunos e professores.", correta: true },
          { texto: "Reduzir o número de ferramentas disponíveis.", correta: false },
          { texto: "Impedir que o aluno tenha autonomia no aprendizado.", correta: false }
        ],
        feedback: "A participação de alunos e professores é essencial para criar um ambiente virtual que realmente atenda suas necessidades de aprendizagem."
      },
      {
        tema: "TIC",
        pergunta: "Segundo o texto, o que pode acontecer se a usabilidade do AVA for ruim?",
        respostas: [
          { texto: "Maior engajamento dos alunos.", correta: false },
          { texto: "Falta de estímulo e até desistência do curso.", correta: true },
          { texto: "Aumento do tempo de permanência dos alunos no curso.", correta: false },
          { texto: "Facilidade de comunicação entre os usuários.", correta: false }
        ],
        feedback: "Problemas de usabilidade podem desmotivar os alunos e até levá-los a abandonar o curso."
      },
      {
        tema: "TIC",
        pergunta: "Qual é uma das principais exigências para o estudo em EaD?",
        respostas: [
          { texto: "Estudar apenas quando tiver tempo livre.", correta: false },
          { texto: "Organizar o tempo e escolher um ambiente controlado.", correta: true },
          { texto: "Fazer cursos sem planejamento de horário.", correta: false },
          { texto: "Depender exclusivamente do tutor para a organização.", correta: false }
        ],
        feedback: "A organização do tempo e a escolha de um ambiente adequado são fundamentais para o sucesso na EaD."
      },
      {
        tema: "TIC",
        pergunta: "Por que o tutor deve considerar as experiências profissionais dos alunos?",
        respostas: [
          { texto: "Para aplicar avaliações mais difíceis.", correta: false },
          { texto: "Para possibilitar o compartilhamento de vivências com o grupo.", correta: true },
          { texto: "Para reduzir a quantidade de conteúdo do curso.", correta: false },
          { texto: "Para escolher quais alunos poderão participar das atividades.", correta: false }
        ],
        feedback: "As experiências dos alunos enriquecem o aprendizado coletivo e fortalecem o processo educativo."
      },
      {
        tema: "TIC",
        pergunta: "O que o tutor deve fazer se perceber que o aluno está atrasado nos estudos?",
        respostas: [
          { texto: "Ignorar e seguir o cronograma normal.", correta: false },
          { texto: "Intervir para identificar o problema e propor soluções.", correta: true },
          { texto: "Apenas registrar o atraso sem intervir.", correta: false },
          { texto: "Penalizar o aluno automaticamente.", correta: false }
        ],
        feedback: "O tutor deve agir proativamente, buscando entender o problema e orientando o aluno."
      },
      {
        tema: "TIC",
        pergunta: "O que é importante nas interações entre tutor e alunos?",
        respostas: [
          { texto: "Usar caixa alta e linguagem informal.", correta: false },
          { texto: "Manter a cortesia, respeito e vocabulário adequado.", correta: true },
          { texto: "Restringir a comunicação aos fóruns obrigatórios.", correta: false },
          { texto: "Utilizar apenas abreviações e emojis.", correta: false }
        ],
        feedback: "O diálogo respeitoso e adequado promove a harmonia e o bom andamento da aprendizagem."
      },
      {
        tema: "TIC",
        pergunta: "Qual deve ser a disposição das atividades no AVEA?",
        respostas: [
          { texto: "De forma aleatória para testar o aluno.", correta: false },
          { texto: "Organizada para facilitar o entendimento do curso.", correta: true },
          { texto: "Desordenada para aumentar o desafio.", correta: false },
          { texto: "Baseada somente em provas finais.", correta: false }
        ],
        feedback: "As atividades devem ser claras e organizadas para guiar o aluno de forma eficiente."
      },
      {
        tema: "TIC",
        pergunta: "No AVEA, quem deve ser o protagonista do processo de aprendizagem?",
        respostas: [
          { texto: "O tutor.", correta: false },
          { texto: "O aluno.", correta: true },
          { texto: "O sistema de avaliação.", correta: false },
          { texto: "Os materiais complementares.", correta: false }
        ],
        feedback: "O ambiente deve ser centrado no aluno para desenvolver sua autonomia e protagonismo."
      },
      {
        tema: "TIC",
        pergunta: "Qual deve ser o caráter prioritário das avaliações no AVEA?",
        respostas: [
          { texto: "Caráter eliminatório.", correta: false },
          { texto: "Caráter formativo.", correta: true },
          { texto: "Caráter classificatório.", correta: false },
          { texto: "Caráter de competição entre alunos.", correta: false }
        ],
        feedback: "Avaliações formativas ajudam o aluno a identificar seu progresso e corrigir dificuldades."
      },
      {
        tema: "TIC",
        pergunta: "Qual é a função da comunicação no EaD?",
        respostas: [
          { texto: "Impedir a interação social.", correta: false },
          { texto: "Constituir um novo conceito de distância e presencialidade.", correta: true },
          { texto: "Promover o isolamento dos estudantes.", correta: false },
          { texto: "Focar apenas na entrega de conteúdos.", correta: false }
        ],
        feedback: "A comunicação aproxima tutor e aluno, reforçando a interação e o sentimento de pertencimento."
      },
      {
        tema: "TIC",
        pergunta: "O que os materiais como e-books e podcasts trazem para o EaD?",
        respostas: [
          { texto: "Dificultam o aprendizado por serem digitais.", correta: false },
          { texto: "Trazem novas formas de ensinar e aprender.", correta: true },
          { texto: "Limitam o acesso ao conhecimento.", correta: false },
          { texto: "Exigem a presença física do aluno.", correta: false }
        ],
        feedback: "Ferramentas digitais ampliam as possibilidades de ensino e aprendizagem, tornando o EaD mais dinâmico."
      },
      {
        tema: "TIC",
        pergunta: "Qual a importância do planejamento em EaD?",
        respostas: [
          { texto: "Serve apenas para controle dos professores.", correta: false },
          { texto: "É essencial para transformar informações em conhecimento.", correta: true },
          { texto: "Evita que os alunos tenham liberdade de estudo.", correta: false },
          { texto: "Substitui a necessidade de tutores.", correta: false }
        ],
        feedback: "Um bom planejamento é fundamental para organizar o ensino e promover a aprendizagem significativa."
      },
      {
        tema: "TIC",
        pergunta: "Sobre a cibercultura, qual afirmativa é correta segundo o texto?",
        respostas: [
          { texto: "A cibercultura inclui todas as relações materiais e manifestações de pensamento no ciberespaço.", correta: true },
          { texto: "A cibercultura refere-se apenas a redes de computadores.", correta: false },
          { texto: "A cibercultura são apenas as redes sociais.", correta: false },
          { texto: "A cibercultura é um fenômeno exclusivo das universidades.", correta: false }
        ],
        feedback: "A cibercultura engloba as relações materiais e manifestações culturais surgidas no ambiente digital."
      },
      {
        tema: "TIC",
        pergunta: "Qual afirmativa descreve corretamente o ciberespaço?",
        respostas: [
          { texto: "É um espaço de comunicação em rede via computadores.", correta: true },
          { texto: "É um local físico usado para encontros educacionais.", correta: false },
          { texto: "É um conjunto de bibliotecas virtuais desconectadas.", correta: false },
          { texto: "É uma extensão dos livros impressos.", correta: false }
        ],
        feedback: "O ciberespaço é o ambiente digital de interação e comunicação em redes."
      },
      {
        tema: "TIC",
        pergunta: "Em relação à EaD, o que o tutor precisa considerar?",
        respostas: [
          { texto: "Somente o conteúdo programático.", correta: false },
          { texto: "As características do público-alvo, respeitando sua realidade.", correta: true },
          { texto: "Apenas a estrutura tecnológica do curso.", correta: false },
          { texto: "O número de atividades obrigatórias.", correta: false }
        ],
        feedback: "O tutor deve conhecer as características do público-alvo para adaptar a metodologia de ensino às suas necessidades."
      },
      {
        tema: "TIC",
        pergunta: "Quando o tutor deve intervir no processo de ensino-aprendizagem?",
        respostas: [
          { texto: "Somente ao final do curso.", correta: false },
          { texto: "Sempre que perceber dificuldades, para orientar o aluno.", correta: true },
          { texto: "Apenas durante a entrega das avaliações.", correta: false },
          { texto: "Somente em caso de reclamações formais.", correta: false }
        ],
        feedback: "A intervenção do tutor deve ocorrer sempre que houver sinais de dificuldades para apoiar e orientar o aluno."
      },
      {
        tema: "TIC",
        pergunta: "Quem criou o Moodle?",
        respostas: [
          { texto: "Tim Berners-Lee.", correta: false },
          { texto: "Martin Dougiamas.", correta: true },
          { texto: "Mark Zuckerberg.", correta: false },
          { texto: "Steve Jobs.", correta: false }
        ],
        feedback: "O Moodle foi criado em 2001 pelo australiano Martin Dougiamas como uma plataforma livre para EaD."
      },
      {
        tema: "TIC",
        pergunta: "O Moodle é utilizado em mais de quantos países?",
        respostas: [
          { texto: "75 países.", correta: false },
          { texto: "100 países.", correta: false },
          { texto: "175 países.", correta: true },
          { texto: "200 países.", correta: false }
        ],
        feedback: "O Moodle é amplamente utilizado em mais de 175 países por instituições de ensino de todo o mundo."
      },
      {
        tema: "TIC",
        pergunta: "O que o padrão SCORM permite no Moodle?",
        respostas: [
          { texto: "Trancar o acesso a conteúdos externos.", correta: false },
          { texto: "Organizar e compartilhar conteúdos entre diferentes plataformas.", correta: true },
          { texto: "Excluir usuários inativos automaticamente.", correta: false },
          { texto: "Restringir a comunicação entre alunos.", correta: false }
        ],
        feedback: "O SCORM é um padrão que permite que conteúdos educacionais sejam compartilhados entre diversas plataformas LMS."
      },
      {
        tema: "TIC",
        pergunta: "Qual recurso o Moodle oferece para comunicação síncrona?",
        respostas: [
          { texto: "Fórum.", correta: false },
          { texto: "Chat.", correta: true },
          { texto: "Glossário.", correta: false },
          { texto: "Base de dados.", correta: false }
        ],
        feedback: "O chat permite comunicação síncrona, ou seja, em tempo real entre alunos e tutores."
      },
      {
        tema: "TIC",
        pergunta: "Qual a função do recurso Glossário no Moodle?",
        respostas: [
          { texto: "Criar páginas web.", correta: false },
          { texto: "Permitir envio de tarefas.", correta: false },
          { texto: "Listar termos e conceitos como um dicionário.", correta: true },
          { texto: "Criar enquetes para pesquisa.", correta: false }
        ],
        feedback: "O Glossário serve para listar e organizar termos e conceitos usados no curso."
      },
      {
        tema: "TIC",
        pergunta: "O que o recurso Tarefa permite no Moodle?",
        respostas: [
          { texto: "Criação de livros eletrônicos.", correta: false },
          { texto: "Envio de atividades para avaliação pelo tutor.", correta: true },
          { texto: "Comunicação síncrona entre alunos.", correta: false },
          { texto: "Compartilhamento de links externos.", correta: false }
        ],
        feedback: "O recurso Tarefa permite que o aluno envie trabalhos e atividades para avaliação dentro da plataforma."
      },
      {
        tema: "TIC",
        pergunta: "Qual a função do recurso Livro no Moodle?",
        respostas: [
          { texto: "Organizar arquivos em pastas.", correta: false },
          { texto: "Criar conteúdos estruturados em formato de livro.", correta: true },
          { texto: "Distribuir links de navegação externa.", correta: false },
          { texto: "Realizar reuniões ao vivo.", correta: false }
        ],
        feedback: "O recurso Livro permite a criação de conteúdos estruturados como se fossem capítulos de um livro eletrônico."
      },
      {
        tema: "TIC",
        pergunta: "O que o recurso URL no Moodle possibilita?",
        respostas: [
          { texto: "Disponibilizar arquivos offline.", correta: false },
          { texto: "Inserir links externos ou internos ao curso.", correta: true },
          { texto: "Criar um repositório de materiais colaborativos.", correta: false },
          { texto: "Gerar certificados automáticos.", correta: false }
        ],
        feedback: "A ferramenta URL permite adicionar links que direcionam para páginas externas ou conteúdos internos do curso."
      },
      {
        tema: "TIC",
        pergunta: "Quais são os elementos básicos de mediação no AVEA?",
        respostas: [
          { texto: "Apenas conteúdos e avaliações.", correta: false },
          { texto: "Acolhimento, orientação, conteúdos, pesquisa e avaliação.", correta: true },
          { texto: "Somente pesquisas e avaliações.", correta: false },
          { texto: "Planejamento de aulas presenciais.", correta: false }
        ],
        feedback: "A mediação envolve acolhimento, orientação, conteúdos, pesquisa e avaliação, formando um ciclo completo de apoio ao aluno."
      },
      {
        tema: "TIC",
        pergunta: "O que caracteriza a forma síncrona de comunicação?",
        respostas: [
          { texto: "Comunicação em tempos diferentes.", correta: false },
          { texto: "Comunicação em tempo real entre participantes.", correta: true },
          { texto: "Envio de mensagens agendadas.", correta: false },
          { texto: "Discussão baseada apenas em fóruns.", correta: false }
        ],
        feedback: "Forma síncrona é aquela em que todos interagem ao mesmo tempo, como em aulas ao vivo."
      },
      {
        tema: "TIC",
        pergunta: "Como acessar relatórios gerais no Moodle?",
        respostas: [
          { texto: "Através da aba 'Configurações' na página principal do curso.", correta: true },
          { texto: "Pelo mural de avisos do curso.", correta: false },
          { texto: "Pelo chat entre alunos.", correta: false },
          { texto: "Apenas via e-mail dos tutores.", correta: false }
        ],
        feedback: "Relatórios gerais podem ser acessados pela opção 'Mais', ao lado da engrenagem de configurações."
      },
      {
        tema: "TIC",
        pergunta: "Onde acessar o relatório individual de um aluno no Moodle?",
        respostas: [
          { texto: "Na seção de fórum.", correta: false },
          { texto: "Clicando no menu 'Participantes' e no nome do aluno.", correta: true },
          { texto: "Apenas pelo chat do Moodle.", correta: false },
          { texto: "Através dos recursos de atividades.", correta: false }
        ],
        feedback: "Relatórios individuais são acessados clicando em 'Participantes' e depois selecionando o aluno."
      },
      {
        tema: "TIC",
        pergunta: "Qual a função dos relatórios no Moodle?",
        respostas: [
          { texto: "Mostrar somente as notas finais.", correta: false },
          { texto: "Acompanhar toda a trajetória e atividades do aluno no AVEA.", correta: true },
          { texto: "Limitar o acesso aos conteúdos.", correta: false },
          { texto: "Excluir registros antigos automaticamente.", correta: false }
        ],
        feedback: "Os relatórios permitem acompanhar todo o histórico de atividades e acessos do aluno na plataforma."
      },
      {
        tema: "TIC",
        pergunta: "Qual ferramenta no Moodle aprimora a experiência com criação de testes, jogos e vídeos?",
        respostas: [
          { texto: "Base de Dados.", correta: false },
          { texto: "H5P.", correta: true },
          { texto: "Glossário.", correta: false },
          { texto: "Enquete.", correta: false }
        ],
        feedback: "O H5P é uma ferramenta que possibilita criar conteúdos interativos como jogos, vídeos e quizzes."
      },
      {
        tema: "TIC",
        pergunta: "Na EaD, o que caracteriza a forma assíncrona?",
        respostas: [
          { texto: "Participantes interagem em tempo real.", correta: false },
          { texto: "Participantes interagem em momentos distintos.", correta: true },
          { texto: "Interação limitada aos fóruns presenciais.", correta: false },
          { texto: "Interação apenas por telefone.", correta: false }
        ],
        feedback: "Forma assíncrona acontece quando os participantes interagem em momentos diferentes, como em fóruns e e-mails."
      },
      {
        tema: "TIC",
        pergunta: "Qual ambiente é descrito como Modular Object-Oriented Dynamic Learning Environment?",
        respostas: [
          { texto: "Blackboard.", correta: false },
          { texto: "Canvas.", correta: false },
          { texto: "Moodle.", correta: true },
          { texto: "Brightspace.", correta: false }
        ],
        feedback: "Moodle é o Ambiente Modular de Aprendizagem Dinâmico e Orientado a Objetos, criado para educação a distância."
      },
      
           
       
      
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