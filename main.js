
const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      resposta: [
        "Uma linguagem de programação de back-end",
        "Um sistema operacional",
        "Uma linguagem de programação de front-end"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
      resposta: [
        "Registrar mensagens no console do navegador",
        "Criar uma caixa de diálogo",
        "Executar uma função assíncrona"
      ],
      correta: 0
    },
    {
      pergunta: "Como declarar uma variável em JavaScript?",
      resposta: [
        "let myVar = 10;",
        "variable myVar = 10;",
        "const = myVar 10;"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
      resposta: [
        "Um modelo de objetos para representar documentos HTML e XML",
        "Uma linguagem de programação",
        "Um editor de texto"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      resposta: [
        "Ambos comparam valores e tipos de dados",
        " '==' compara apenas valores, '===' compara valores e tipos de dados",
        " '===' compara apenas valores, '==' compara valores e tipos de dados"
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      resposta: [
        "Um tipo de dado",
        "Um objeto gráfico",
        "Um bloco de código reutilizável"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '&&' em JavaScript?",
      resposta: [
        "Concatenar strings",
        "Atribuir valores",
        "Realizar uma operação lógica 'AND'"
      ],
      correta: 2
    },
    {
      pergunta: "Como criar um loop 'for' em JavaScript?",
      resposta: [
        "for (i <= 10; i++) {}",
        "loop (i < 10) {}",
        "for (let i = 0; i < 10; i++) {}"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o AJAX em JavaScript?",
      resposta: [
        "Uma linguagem de estilo para páginas web",
        "Uma técnica para realizar requisições assíncronas ao servidor",
        "Um tipo de variável"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'addEventListener' em JavaScript?",
      resposta: [
        "Modificar o estilo de um elemento HTML",
        "Adicionar um ouvinte de eventos a um elemento",
        "Executar uma função assíncrona"
      ],
      correta: 1
    },
  ];
  
  //div que contém as perguntas do quiz
  const quiz = document.querySelector("#quiz")
  //elemento com o template do quiz
  const template = document.querySelector("template")
  //const que armazena um novo Set de dados, um conjunto de dados
  // ele pode ser editado adicionando ou removendo mas que não repita informação dentro dele
  const corretas = new Set()
  
  const totalDePerguntas = perguntas.length
  const mostrarAcertos = document.querySelector("#acertos span")
  
  mostrarAcertos.textContent = `${corretas.size} de ${totalDePerguntas}`
  
  
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    // cloneNode() recurso que copia os elementos filhos de um elemento pai usando o parâmetro true
    quizItem.querySelector("h3").textContent = item.pergunta
    for(resposta of item.resposta) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', `pergunta-${perguntas.indexOf(item)}`)
      dt.querySelector('input').value = item.resposta.indexOf(resposta)
  
      dt.querySelector('input').onchange = (e) => {
        const estaCorreta = e.target.value == item.correta
  
        //user o delete() para caso uma mudança na escolha já exista dentro do Set ele seja removido. Ex: ao escolher uma certa o item é add, mas se houver mudança na escolha da resposta o item continuará constando no Set, então qdo houver mudança do onchange é feito uma "limpeza" do Set caso ele já exista.
        corretas.delete(item)
        if (estaCorreta) {
          //sempre que for true o item será adicionado ao Set
          corretas.add(item)
        }
        //lógica de controle do número de acertos
        //fica dentro do loop para que ela seja atualizada a cada interação de onchange
        //onde será feita a verificação de acerto ou erro
        //e o valor é recuperado pelo size do conjunto Set
        //onde é armazenado os items qdo escolhido a opção correta
        mostrarAcertos.textContent = `${corretas.size} de ${totalDePerguntas}` 
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    //remoção do elemento dt com input de exemplo
    quizItem.querySelector('dl dt').remove()
  
    //exibi as perguntas na div
    quiz.appendChild(quizItem)
  
  }
  