import React from 'react';

import Imagem0 from "../../assets/TutorialSuno00.png";
import Imagem1 from "../../assets/TutorialSuno01.png";
import Imagem2 from "../../assets/TutorialSuno02.png";
import Imagem3 from "../../assets/TutorialSuno03.png";
import Imagem4 from "../../assets/TutorialSuno04.png";
import Imagem5 from "../../assets/TutorialSuno05.png";
import Imagem6 from "../../assets/TutorialSuno06.png";
import Imagem7 from "../../assets/TutorialSuno07.png";
import Imagem8 from "../../assets/TutorialSuno08.png";
import Imagem9 from "../../assets/TutorialSuno09.png";

import "./content.css";


const Content = () => (
  <div className='content'>
    <h1 className="gradient__text title">Suno AI: Conheça a IA revolucionária para criar música com comandos de texto.</h1>
    <h2 >Uma ferramenta online que usa inteligência artificial para criar músicas de diferentes estilos a partir de comandos de texto. Conheça o Suno AI: entenda seu funcionamento e aprenda a usá-lo.</h2>
    <h2>Igor Barduco, Redação TechTune
      30.04.2024 – 10h25. Atualizado em 15.05.2024 – 16h25
    </h2>
    <img className='center' src={Imagem0} alt="Texto alternativo" />
    <h4>O suno AI, suas palavras agora geram melodias. Conheça essa ferramenta — Foto: Geração/Leonardo AI.</h4>
    <h2 className='title'>- O que é o Suno AI?</h2>
    <p>O Suno AI é uma plataforma que utiliza inteligência artificial para gerar músicas de forma automatizada, facilitando a criação musical para todos os usuários. Independentemente de ser um iniciante ou um músico experiente, você pode criar canções de forma simples e rápida, sem a necessidade de ser um profissional da música ou da programação.</p>
    <p>Esta ferramenta foi criada por time de músicos e especialistas em inteligência artificial da universidade de Cambridge, Reino Unido, com o objetivo de tornar o processo de composição musical mais acessível a todos e também para ganhar muito dinheiro. Individualmente este time trabalhou em outros projetos com empresas como Meta, Tik Tok e Kensho antes de se juntarem para criar o Suno AI.
    </p>
    <p>A plataforma oferece duas maneiras de criar músicas: no método mais simples, será necessário somente fazer uma breve descrição para que o Suno AI crie letra e melodia. No modo personalizado, é possível inserir qualquer texto e escolher o estilo da música, o que significa que você pode criar uma canção a partir de suas conversas do WhatsApp ou de postagens nas redes sociais, por exemplo. Ainda no modo personalizado, é oferecida a possibilidade de criar apenas a melodia, sem a necessidade de inserir uma letra para música. </p>
    <p>Na criação da música, são fornecidas duas versões, sendo a “v3” a versão inserida automaticamente, pois representa uma versão mais avançada e aprimorada da ferramenta, incorporando melhorias baseadas no feedback dos usuários e avanços tecnológicos, além de possuir características como maior diversidade de estilos musicais, melhor qualidade de som, maior complexidade nas composições, integração de inteligência artificial mais sofisticada e um conjunto de dados de treinamento mais amplo e variado. As melhorias podem também envolver interfaces de usuário mais intuitivas e funcionalidades adicionais para personalização da música gerada. Caso seja de interesse do usuário, ele pode optar pela “v2”, que é uma versão intermediária da ferramenta, onde os algoritmos e funcionalidades são básicos, além de ter limitações em termos de qualidade, variedade e complexidade da música gerada, por se tratar de uma versão anterior.</p>
    <p>O software suporta diferentes idiomas, incluindo português. Vale ressaltar que o Suno AI não aceita textos que contenham nomes de artistas ou bandas.
    </p>
    <h2>- E quanto custa essa brincadeirinha?
    </h2>
    <p>É possível usar o Suno AI gratuitamente, porém com algumas limitações: são 50 créditos diários, que correspondem a 10 criações, e as músicas não podem ser comercializadas.</p>
    <p>Com o Plano Pro, por US$ 10 mensais (cerca de R$ 50), você terá direito a 500 músicas por mês, prioridade na fila de criação e possibilidade de uso comercial. Já o Plano Premier, por US$ 30 (aproximadamente R$ 150), oferece 2 mil músicas, além de outros benefícios do Plano Pro.</p>
    <h2>- Como criar músicas com o Suno AI?
    </h2>
    <h2>Passo 1. Acesse o site "Suno"(<a className='Link' href='https://suno.com/'>https://suno.com/</a>) e clique em “Sign up” para criar uma conta. É possível fazer login com as contas do Discord, Google ou Microsoft para entrar na plataforma;</h2>
    <img src={Imagem1} alt="Imagem Aqui" />
    <h4> Clique em “Sign Up” — Foto: Reprodução/Igor Barduco
    </h4>
    <img src={Imagem2} alt="Imagem Aqui" />
    <h4>Faça login utilizando uma conta do Discord, Google ou Microsoft — Foto: Reprodução/Igor Barduco</h4>
    <h2>Passo 2. Pressione “Create” para iniciar a criação da sua música;
    </h2>
    <img src={Imagem3} alt="Imagem Aqui" />
    <h4>Clique em "Create" para gerar uma música — Foto: Reprodução/Igor Barduco</h4>
    <p>Passo 3. No campo “Song Description”, escreva a descrição da música que você quer criar e pressione “Create”;</p>
    <img src={Imagem4} alt="Imagem Aqui" />
    <h4>Escreva uma descrição e clique em "Create" — Foto: Reprodução/Igor Barduco</h4>
    <p>Passo 4. Escolha uma das músicas geradas e clique em play para ouvi-la;
    </p>
    <img src={Imagem5} alt="Imagem Aqui" />
    <h4>Selecione as músicas geradas e aperte play para ouvi-las — Foto: Reprodução/Igor Barduco</h4>
    <p>Passo 5. Para adicionar uma letra em sua música, habilite a opção “Custom Mode”;</p>
    <img src={Imagem6} alt="Imagem Aqui" />
    <h4>Ative o modo personalizado clicando em "Custom mode" — Foto: Reprodução/Igor Barduco</h4>
    <p>Passo 6. Digite a letra da música no campo “Lyrics”, ou se desejar, clique em “Make Random Lyrics” para a IA criar uma letra aleatória. Feito isso, digite no campo “Style of Music” o estilo de música que deseja, ou clique em “Use Random Style” para a IA usar um estilo de música aleatório. Em seguida, digite o titulo que deseja dar para a música. Caso deixe este campo em branco, o Suno AI usa a primeira linha da letra como título;</p>
    <img src={Imagem7} alt="Imagem Aqui" />
    <h4>Insira a letra, o estilo e o título da música. Em seguida clique em "Create" — Foto: Reprodução/Igor Barduco</h4>
    <p>Passo 7. Se for de sua preferencia criar apenas a melodia da música, habilite a opção “Instrumental” para o Suno AI retirar o campo “Lyrics”; </p>
    <img src={Imagem8} alt="Imagem Aqui" />
    <h4>Habilite “Instrumental” para criar apenas a melodia — Foto: Reprodução/Igor Barduco</h4>
    <p>Passo 8. Para fazer o download da música, clique na reticencias (três pontinhos) ao lado da música. No menu aberto, selecione “Download” e escolha entre salvar como áudio ou vídeo, sendo o vídeo uma adição com a imagem gerada pela IA, mais a letra da música, cujo as palavras são destacadas ao decorrer do vídeo em suas devidas partes;</p>
    <img src={Imagem9} alt="Imagem Aqui" />
    <h4>Clique em reticencias ao lado da música e depois escolha “Download” para baixa-la — Foto: Reprodução/Igor Barduco</h4>
    <h2 >Fontes:</h2>
    <p>
      Sampaio , Henrique . Suno AI, o ChatGPT da música, pode ser uma ameaça a artistas e produtores fonográficos? Estadão, 30 de março de 2024 . Disponível em: https://www.estadao.com.br/link/cultura-digital/suno-ia-chatgpt-musica-ameaca-artistas-nprei/l. Acesso em: 25 abril. 2024. às 16:20.</p>
    <p>Villarinho, Juliana . Suno AI: como usar IA que faz música e lê textos cantando. Techtudo, 05 de abril de 2024 . Disponível em: https://www.techtudo.com.br/dicas-e-tutoriais/2024/04/suno-ai-como-usar-ia-que-faz-musica-e-le-textos-cantando-edsoftwares.ghtml. Acesso em: 25 abril. 2024. às 15:35.

    </p>
    <p> Suno. Make a Song with Suno. https://suno.com/about/ Acesso em: 25 abril. 2024. às 15:59.
      Estadão
    </p>
  </div>
);

export default Content;