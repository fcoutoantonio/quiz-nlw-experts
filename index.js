const perguntas = [
    {
      pergunta: 'Qual tag é usada para definir uma lista não ordenada em HTML?',
      respostas: [
        "<ul>",
        "<ol>",
        "<li>",
      ],
      correta: 0
    },
    {
      pergunta: 'Qual atributo HTML é usado para definir o título de uma página da web?',
      respostas: [
        "title",
        "name",
        "header",
      ],
      correta: 0
    },
    {
      pergunta: 'Qual elemento HTML é usado para criar um link?',
      respostas: [
        "<link>",
        "<a>",
        "<href>",
      ],
      correta: 1
    },
    {
      pergunta: 'Qual é a versão mais recente do HTML?',
      respostas: [
        "HTML4",
        "HTML5",
        "XHTML",
      ],
      correta: 1
    },
    {
      pergunta: 'Qual elemento HTML é usado para criar uma tabela?',
      respostas: [
        "<table>",
        "<tr>",
        "<td>",
      ],
      correta: 0
    },
    {
      pergunta: 'Qual tag HTML é usada para definir uma linha em uma tabela?',
      respostas: [
        "<table>",
        "<tr>",
        "<td>",
      ],
      correta: 1
    },
    {
      pergunta: 'Qual elemento HTML é usado para criar um formulário?',
      respostas: [
        "<form>",
        "<input>",
        "<button>",
      ],
      correta: 0
    },
    {
      pergunta: 'Qual atributo HTML é usado para definir a largura de uma imagem?',
      respostas: [
        "width",
        "size",
        "length",
      ],
      correta: 0
    },
    {
      pergunta: 'Qual elemento HTML é usado para criar um cabeçalho?',
      respostas: [
        "<header>",
        "<h1>",
        "<head>",
      ],
      correta: 1
    },
    {
      pergunta: 'Qual elemento HTML é usado para criar um parágrafo?',
      respostas: [
        "<p>",
        "<para>",
        "<paragraph>",
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template  = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostraTotal = document.querySelector('#acertos span')
  mostraTotal.textContent = corretas.size + ' de ' +totalDePerguntas
  
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let respostas of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = respostas
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(respostas)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      mostraTotal.textContent = corretas.size + ' de ' +totalDePerguntas
      //alert(corretas.size)
      //else{
      //  alert('Errou')
      //}
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
  }