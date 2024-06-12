// Publi.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './publi.css';

// iamgens da publicação

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
import Imagem10 from "../../assets/SunoImg.png";
import Imagem11 from "../../assets/leonardoCampo.jpg";
import Imagem12 from "../../assets/image05.jpg";
import Imagem13 from "../../assets/leonardo.jpg";
import Imagem14 from "../../assets/edicaoMusical.jpg";
import Imagem15 from "../../assets/edicaoMusical2.jpg";
import Imagem16 from "../../assets/seo.JPG";

const publiContent = {
  '1': {
    // title: 'Suno AI: Conheça a IA revolucionária para criar música com comandos de texto.',
    content: (
      <>
        <div className='content'>
          <h1 className="gradient__text title">Suno AI: Conheça a IA revolucionária para criar música com comandos de texto.</h1>
          <h3 >Uma ferramenta online que usa inteligência artificial para criar músicas de diferentes estilos a partir de comandos de texto. Conheça o Suno AI: entenda seu funcionamento e aprenda a usá-lo.</h3>
          <h4>Igor Barduco, Redação TechTune
            30.04.2024 – 10h25. Atualizado em 15.05.2024 – 16h25
          </h4>
          {/* <img className='center' src={Imagem0} alt="Texto alternativo" /> */}
          <h4>O suno AI, suas palavras agora geram melodias. Conheça essa ferramenta — Foto: Geração/Leonardo AI.</h4>
          <img className='center' src={Imagem10} alt="Texto alternativo" />
          <h2 className='title'>- O que é o Suno AI?</h2>
          <p>O Suno AI é uma plataforma que utiliza inteligência artificial para gerar músicas de forma automatizada, facilitando a criação musical para todos os usuários. Independentemente de ser um iniciante ou um músico experiente, você pode criar canções de forma simples e rápida, sem a necessidade de ser um profissional da música ou da programação.</p>
          <p>Esta ferramenta foi criada por time de músicos e especialistas em inteligência artificial da universidade de Cambridge, Reino Unido, com o objetivo de tornar o processo de composição musical mais acessível a todos e também para ganhar muito dinheiro. Individualmente este time trabalhou em outros projetos com empresas como Meta, Tik Tok e Kensho antes de se juntarem para criar o Suno AI.
          </p>
          <p>A plataforma oferece duas maneiras de criar músicas: no método mais simples, será necessário somente fazer uma breve descrição para que o Suno AI crie letra e melodia. No modo personalizado, é possível inserir qualquer texto e escolher o estilo da música, o que significa que você pode criar uma canção a partir de suas conversas do WhatsApp ou de postagens nas redes sociais, por exemplo. Ainda no modo personalizado, é oferecida a possibilidade de criar apenas a melodia, sem a necessidade de inserir uma letra para música. </p>
          <p>Na criação da música, são fornecidas duas versões, sendo a “v3” a versão inserida automaticamente, pois representa uma versão mais avançada e aprimorada da ferramenta, incorporando melhorias baseadas no feedback dos usuários e avanços tecnológicos, além de possuir características como maior diversidade de estilos musicais, melhor qualidade de som, maior complexidade nas composições, integração de inteligência artificial mais sofisticada e um conjunto de dados de treinamento mais amplo e variado. As melhorias podem também envolver interfaces de usuário mais intuitivas e funcionalidades adicionais para personalização da música gerada. Caso seja de interesse do usuário, ele pode optar pela “v2”, que é uma versão intermediária da ferramenta, onde os algoritmos e funcionalidades são básicos, além de ter limitações em termos de qualidade, variedade e complexidade da música gerada, por se tratar de uma versão anterior.</p>
          <p>O software suporta diferentes idiomas, incluindo português. Vale ressaltar que o Suno AI não aceita textos que contenham nomes de artistas ou bandas.
          </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rA3htiGHsLc?si=NfmyQWQlJrT5GRjd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
      </>
    )
  },
  '2': {
    // title: 'Inovações Sonoras: A Fusão Criativa entre Tecnologia e Música',
    content: (
      <>
        {<div class="content">
          <h1 class="gradient__text title">Mega Resumo: Leonardo AI - Domine a Arte da Criação com Inteligência Artificial</h1>
          <p>Desbloqueie a Criatividade sem Limites com a Leonardo AI: Seu Portal para Imagens Impressionantes Impulsionadas por IA</p>
          <p>A Leonardo AI surge como uma ferramenta revolucionária no mundo da criação de imagens, utilizando o poder da inteligência artificial para transformar suas ideias em obras de arte digitais de tirar o fôlego. Seja você um artista experiente, um designer em busca de inovação ou um entusiasta da tecnologia, a Leonardo AI está pronta para te levar a um novo patamar de expressão artística.</p>



          <h2 class="section-title">Mergulhe no Mundo da Criação com IA:</h2>
          <img src={Imagem13} alt="Imagem Aqui" />
          <p><strong>Gere Imagens Incríveis:</strong> Imagine poder criar qualquer imagem que sua mente desejar, desde paisagens fantásticas até personagens únicos e ambientes imersivos. Com a Leonardo AI, basta usar sua criatividade e descrever suas ideias em linguagem natural. A plataforma se encarrega de traduzir seus sonhos em pixels, gerando imagens com qualidade impecável e detalhes impressionantes.</p>

          <p><strong>Desperte o Artista que Há em Você:</strong> A Leonardo AI democratiza o acesso à criação de arte digital, tornando-a acessível a todos. Mesmo que você não possua habilidades artísticas prévias, a plataforma oferece ferramentas intuitivas e recursos avançados que te guiarão passo a passo no processo de criação.</p>

          <p><strong>Revolucione seus Projetos Criativos:</strong> A plataforma se destaca como uma aliada poderosa para designers, desenvolvedores de jogos e artistas de diversas áreas. Crie assets únicos para seus jogos, ilustrações para seus projetos ou explore novas formas de expressão artística com a liberdade e a flexibilidade que a Leonardo AI oferece.</p>


          <h2 class="section-title">Recursos Inovadores para Impulsionar sua Criatividade:</h2>
          <img src={Imagem12} alt="Imagem Aqui" />
          <p><strong>Aprendizado de Máquina Aprimorado:</strong>
            A Leonardo AI aprimora continuamente suas capacidades por meio de um sistema de aprendizado de máquina robusto. Quanto mais a plataforma é utilizada, mais ela aprende com as interações dos usuários, gerando imagens cada vez mais precisas e realistas.</p>

          <p><strong>Personalização sem Limites:</strong> Adapte as imagens geradas à sua visão artística única. A Leonardo AI oferece diversas opções de personalização, permitindo ajustar cores, texturas, estilos e muito mais. Explore diferentes possibilidades e refine suas criações até alcançar o resultado perfeito.</p>

          <p><strong>Recursos Adicionais para Aprimorar seu Fluxo de Trabalho:</strong> A plataforma oferece diversos recursos complementares para otimizar seu processo criativo, como um gerador de prompts para te auxiliar na descrição de suas ideias, ferramentas de edição para refinar suas imagens e a opção de upscaling para aumentar a resolução de suas criações.</p>

          <h2 class="section-title">Benefícios que Impulsionam sua Criatividade:</h2>
          <p><strong>Qualidade Visual Impecável:</strong> Obtenha imagens com detalhes impressionantes e realismo surpreendente, graças aos algoritmos avançados da Leonardo AI.</p>

          <p><strong>Eficiência Imbatível:</strong> Crie assets e ilustrações em tempo recorde, otimizando seu tempo e impulsionando sua produtividade.</p>

          <p><strong>Diversidade de Possibilidades:</strong> Explore uma gama infinita de estilos, temas e elementos para dar vida às suas ideias mais criativas.</p>

          <p><strong>Redução de Custos:</strong> Otimize seus recursos e reduza custos com a produção de ativos, permitindo que você invista em outros aspectos de seus projetos.</p>

          <h2 class="section-title">Leonardo AI: A Escolha Perfeita para Criadores Ambiciosos:</h2>
          <img src={Imagem11} alt="Imagem Aqui" />
          <p>Se você busca ferramentas inovadoras para elevar seus projetos criativos a um novo patamar, a Leonardo AI é a solução ideal. Com sua interface amigável, recursos avançados e capacidade de gerar imagens impressionantes, a plataforma te oferece tudo o que você precisa para desbloquear seu potencial artístico e alcançar resultados incríveis.</p>

          <p><strong>Dê o Primeiro Passo em Direção à Criação Extraordinária:</strong> Acesse o site da Leonardo AI e explore as diversas funcionalidades da plataforma. Experimente o poder da IA na criação de imagens e descubra um mundo de possibilidades ilimitadas.</p>

          <p><em>Lembre-se:</em></p>
          <ul>
            <li>A Leonardo AI oferece um plano gratuito com recursos básicos, mas também possui planos pagos com funcionalidades adicionais.</li>
            <li>A plataforma está em constante desenvolvimento, recebendo novas atualizações e aprimoramentos frequentemente.</li>
            <li>A comunidade Leonardo AI é uma fonte valiosa de inspiração, colaboração e suporte.</li>
          </ul>

          <p><strong>Fonte:</strong> BusinessIA, Leonardo AI: A Ferramenta Definitiva De Geração De Imagens Com IA Para Projetos Criativos, 05 de abril de 2024. Disponível em: <a href="https://www.businessia.com.br/ferramentas/leonardo-ai/" target="_blank">https://www.businessia.com.br/ferramentas/leonardo-ai/</a>. Acesso em: 25 abril. 2024. às 15:00.</p>
        </div>}
      </>
    )
  },
  '3': {
    content: (
      <>
        <div class='content'>
          <h1 className="gradient__text title">Edição Musical em Casa: Transforme Seu Espaço em um Estúdio Profissional</h1>
          <img src={Imagem15} alt="Imagem Aqui" />
          {/* <img className='center' src="imagem_url_1.jpg" alt="Pessoa editando música em um home studio com equipamentos de gravação" /> */}
          <h4>Descrição Alternativa: Músico trabalhando em edição de áudio em um estúdio caseiro com fones de ouvido e uma mesa de mixagem</h4>
          <p>A edição musical não está mais restrita a grandes estúdios. Com as ferramentas certas, qualquer pessoa pode criar e gravar músicas de qualidade profissional em casa. Software de edição acessível e equipamentos de gravação acessíveis permitem que músicos independentes produzem faixas incríveis sem sair de casa. A chave para o sucesso é aprender a utilizar esses recursos de forma eficaz, explorando tutoriais e praticando constantemente.</p>
        </div>

      </>
    )
  },
  '4': {
    content: (
      <>
        <div class='content'>
          <h1 className="gradient__text title">Dominando o SEO: A Arte de Ranquear Conteúdo na Web</h1>
          {/* <img className='center' src={Imagem16} alt="Texto alternativo" /> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/MYE6T_gd7H0?si=owHlgZsPxyhVEI5b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <h4>Descrição Alternativa: Gráfico em tela de computador exibindo aumento no tráfego de um site</h4>
          <p>SEO (Search Engine Optimization) é essencial para qualquer pessoa ou empresa que deseja aumentar sua visibilidade online. Compreender e aplicar técnicas de SEO pode ser a diferença entre ser encontrado ou ignorado na internet. Fatores como palavras-chave relevantes, conteúdo de qualidade e backlinks são cruciais para melhorar o ranqueamento nos mecanismos de busca. Investir tempo em aprender SEO é investir no sucesso digital a longo prazo.</p>
        </div>

      </>
    )
  },
  '5': {
    content: (
      <>
        <div class='content'>
          <h1 className="gradient__text title">O céu é o limite: Sora quer abocanhar o mercado dos simuladores científicos e das ficções hollywoodianas</h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/HK6y8DAPN_0?si=llKcGs4RLt9PCHkX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <p>Soube por uma breve matéria do Estadão SP do último dia 04 que o Festival de Cinema de Tribeca em Nova Iorque exibirá em 15 de junho, em sessão exclusiva, cinco curtas-metragens de até vinte minutos produzidos pelo <strong><a href="https://openai.com/index/sora/">Sora</a></strong>, uma inteligência artificial geradora de vídeos a partir de prompts de texto, desenvolvida pela empresa OpenAI - sim, a mesma do ChatGPT, que tem dado o que falar há uns bons meses e que fez seu irmão caçula ser apelidado de “o ChatGPT dos vídeos” (Causin e Cavalcanti, O Globo, 16 fev).
          </p>
          <p>É a primeira vez que um festival dessa natureza reserva um espaço especial a vídeos gerados por IA com base em roteiros escritos por cinco profissionais: Bonnie Discepolo, Ellie Foumbi, Nikyatu Jusu, Reza Sixo Safai e Michaela Ternaski-Holland. O que sempre me deixa instigada em ocasiões assim é saber o que o pessoal do cinema pensa disso tudo, já que o da tecnologia sempre é o mais entusiasta, naturalmente.
          </p>
          <p>Enquanto o diretor executivo da OpenAI diz simplesmente, segundo a mesma reportagem, que Sora expande a criatividade humana, a cofundadora e diretora executiva do Festival de Tribeca não vê diferenças entre as tantas histórias que produzem mudanças significativas em nós: com ou sem uso de IA, trata-se sempre de fazer circular narrativas significativas na nossa cultura. Não sei em vocês, mas em mim essa ideia cola muito, e faz todo sentido.
          </p>
          <p>Porém, admito que resida aí um grande risco, que explica as críticas e os receios que surgiram desde o anúncio do Sora, em 15 de fevereiro deste ano.
          </p>
          <p>No primeiro parágrafo do texto de apresentação no site da OpenAI, a empresa afirma ensinar a IA, cujo nome homenageia a palavra japonesa “céu”, a entender e simular o mundo físico em movimento para treinar modelos que ajudem a resolver problemas que precisem de nossa interação com o mundo real. Daí a criação de vídeos realistas com cenas tão detalhadas e movimentos de câmera bem complexos para evidenciar a realidade, ou uma realidade que requeira ser estudada a fundo, de modo preciso e fidedigno. </p>
          <p>Quando li, imediatamente imaginei quantos vídeos interessantes de viés acadêmico-científico não poderiam surgir para ilustrar fatos da história e revelar paisagens, topografias e anatomias existentes, de riqueza investigativa inegável. Até porque Sora também é capaz de continuar vídeos já existentes ou criar novos recorrendo a imagens estáticas, como uma foto, por exemplo, vinculando-se às outras soluções da empresa, como DALL.E3 e GPT. </p>
          <p>É assim que percebemos que esse potencial facilita muito a criação de desinformação, tornando num piscar de olhos real o que jamais foi, é ou será. Ilude facilmente a quem quer que seja, sem aviso prévio – uma controvérsia já conhecida de outras IAs no mercado. </p>
          <p>Diferentemente delas, Sora permanece reservado a um time experimental de artistas visuais, designers e diretores de filme, para que o modelo seja treinado com ajuda profissional. Essa decisão acaba por agravar o cenário, pois revela o quanto a empresa deseja firmar parcerias com agências de talento, estúdios cinematográficos e veículos de comunicação em Los Angeles, já visitados por seus representantes. A OpenAI deseja fechar negócios com Hollywood, onde, devemos lembrar, uma longa greve paralisou recentemente categorias de atores, roteiristas, dubladores, num movimento de contestação ao uso indevido e abusivo de imagem e voz por tecnologias avançadas, substitutas do trabalho humano.</p>
          <p>O caso Sora tem mostrado que no céu há sempre novos horizontes: um primeiro da simulação realista do mundo físico em um minuto de duração; um segundo, um mês depois, da ponderação sobre permitir a nudez em seus vídeos (já bem mais longos), para atender ao exigente público de criadores e ao bem mais exigente e enorme público de consumidores do audiovisual – que abrange os que admiram a estética do erótico no cinema e os que exploram a perversa indústria pornográfica, não é?</p>
          <p>Confesso que como professora, sempre me parece, ao final dessas conversas, que quanto mais facilitada a informação mais difícil fica o caminho para o discernimento e a maturação do senso crítico e da consciência do que podemos fazer pela cultura e pelo coletivo.
          </p>
          <p>Espero por vocês no próximo debate. Até lá!</p>
        </div>

      </>
    )
  },
};

const Publi = () => {
  const { id } = useParams();
  const publication = publiContent[id];

  if (!publication) {
    return <h1>Matéria não encontrada</h1>;
  }

  return (
    <div className="publi">
      <h1 className="gradient__text title">{publication.title}</h1>
      {publication.content}
    </div>
  );
}

export default Publi;
