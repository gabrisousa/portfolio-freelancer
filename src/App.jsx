import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import React from 'react'

// Imagens
import Logo from './assets/Logo.png'
import Logo2 from './assets/Logo2.png'
import FotoPerfil from './assets/foto.png'
import FotoProjeto1 from './assets/Imagem-Projeto1.png'
import FotoProjeto3 from './assets/Imagem-Projeto3.png'
import FotoProjeto4 from './assets/Imagem-Projeto4.png'
import FotoProjeto5 from './assets/Imagem-Projeto5.png'
import FotoProjeto6 from './assets/Imagem-Projeto6.png'
import FotoProjeto7 from './assets/Imagem-Projeto7.png'
import FotoProjeto8 from './assets/Imagem-Projeto8.png'
import FotoProjeto9 from './assets/Imagem-Projeto9.png'
import FotoProjeto10 from './assets/Imagem-Projeto10.png'
import FotoProjeto11 from './assets/Imagem-Projeto11.png'
import VideoFundo from './assets/videoFundo.mp4'


// Styled Components
import { 
  CaixaPrincipal, Header, ImagemLogo, LogoImg, Menu , LinkMenu, 
  IconesContato, IconesCont, IconeReact, NomeG, Sobre, 
  CaixaTextoSobre, TituloSobre, TextoSobre, CaixaSobre, Projetos, 
  Projeto, FotoP1, Projeto1, CaixaVideo, TecnologiasP1, 
  TecnologiasP3, Contatos, Form, Footer, Logo2Img, CaixaContatos, 
  Serviços, ServiçosTitulo, ServiçosDescrição, ListaServiços,
  Nome, Inicio, Descricao, Foto, FotoImg, CaixaProjeto,
  Projetos2
} from './Styles'

// Ícones
import { FaReact, FaLinkedin, FaGithub, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'

// Componentes extras
import { IconCloud } from '../iconClould'
import ScrollToTopButton from "./ScrollToTopButton";
import { Hamburger } from 'lucide-react';

// Animações
const variants = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const variants2 = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const menuVariants = {
  closed: {
    x: "100%", // fora da tela (direita)
    transition: { duration: 0.4, ease: "easeInOut" }
  },
  open: {
    x: 0, // entra
    transition: { duration: 0.4, ease: "easeInOut" }
  }
};

// Ícones nuvem
const slugs = [ 'javascript', 'react', 'html5', 'css3', 'git', 'github' ];

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/dZVaWyGSYji", {
      method: 'POST',
      headers: { 
        "Accept": "application/json", 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        alert("We received your submission, thank you!");
      } else {
        setError(response.message)
      }
    })
    .catch(error => {
      setError(error.message ? error.message : error);
    });
  }

  return (
    <>
      <CaixaPrincipal>
        {/* HEADER */}
        <Header>
      <ImagemLogo>
        <LogoImg src={Logo} alt="Logo" />
        <Nome>Sousa Dev</Nome>
      </ImagemLogo>
       <div className="hamburger" onClick={toggleMenu}>
       {open ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>


      {/* Menu */}
      <Menu
      variants={menuVariants}
      initial="closed"
      animate={window.innerWidth > 1024 ? "open" : open ? "open" : "closed"}
      >
        <LinkMenu href="#sobre" onClick={() => setOpen(false)}>SOBRE</LinkMenu>
        <LinkMenu href="#projetos" onClick={() => setOpen(false)}>PROJETOS</LinkMenu>
        <LinkMenu href="#servicos" onClick={() => setOpen(false)}>SERVIÇOS</LinkMenu>
        <LinkMenu href="#contato" onClick={() => setOpen(false)}>
          <button>Contato</button>
        </LinkMenu>
      </Menu>
    </Header>

        {/* INÍCIO */}
        <Inicio>
          <CaixaVideo>
            <video src={VideoFundo} autoPlay loop muted></video>
          </CaixaVideo>

          <motion.div variants={variants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <Descricao>
              <NomeG>Gabriel Sousa</NomeG>
              <h2><span>&lt;Desenvolvedor Freelancer/&gt;</span></h2>
              <p>
                Desenvolvedor front-end especializado em criar<br /> 
                experiências digitais rápidas, responsivas e atrativas.
              </p>
              <IconeReact><FaReact size={60} color="#61DBFB"/></IconeReact>
              <IconesContato>
                <IconesCont href="https://linkedin.com/in/gabriel-sousa-264abb191"><FaLinkedin/></IconesCont>
                <IconesCont href="https://github.com/gabrisousa"><FaGithub/></IconesCont>
                <IconesCont href="https://wa.me/5511987146678"><FaWhatsapp/></IconesCont>
              </IconesContato>
            </Descricao>
          </motion.div>

          <motion.div variants={variants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <Foto>
              <FotoImg src={FotoPerfil}/>
            </Foto>
          </motion.div>
        </Inicio>

        {/* SOBRE */}
        <motion.div variants={variants2} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <Sobre id='sobre'>
            <CaixaSobre>
              <CaixaTextoSobre>
                <TituloSobre>Sobre</TituloSobre>
                <TextoSobre>
                  Bem Vindo(a) ao Sousa Dev. <br /><br />
                  Olá! Meu nome é Gabriel Sousa, sou desenvolvedor front-end<br /> 
                  apaixonado por criar experiências digitais rápidas, responsivas<br /> 
                  e esteticamente atrativas. Tenho experiência em tecnologias<br /> 
                  como JavaScript, React, HTML e CSS. Adoro transformar<br /> 
                  ideias em interfaces funcionais e interativas, sempre focando<br /> 
                  na melhor experiência para o usuário. Além de codar, busco<br /> 
                  me atualizar constantemente e explorar novas ferramentas<br /> 
                  para entregar projetos de qualidade. Sou comprometido,<br /> 
                  criativo e sempre aberto a novos desafios, buscando soluções<br /> 
                  eficientes e elegantes para cada projeto.
                </TextoSobre>
              </CaixaTextoSobre>
              <div className="p-10">
                <IconCloud iconSlugs={slugs} />
              </div>
            </CaixaSobre>
          </Sobre>
        </motion.div>

        {/* SERVIÇOS */}
        <motion.div variants={variants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <Serviços id='servicos'>
            <ServiçosTitulo>O que posso fazer por você?</ServiçosTitulo>
            <ServiçosDescrição>
              Transformo ideias em sites modernos, rápidos e responsivos. Trabalho com<br /> 
              desenvolvimento front-end, criando experiências digitais que encantam e convertem.
            </ServiçosDescrição>
            <ListaServiços>
              <li><span>Landing Pages</span> – Páginas objetivas para gerar resultados.</li>
              <li><span>Sites Institucionais</span> – Presença online completa e profissional.</li>
              <li><span>UI/UX e Animações</span> – Experiências interativas e envolventes.</li>
              <li><span>Otimização de Performance</span> – Sites rápidos e eficientes.</li>
            </ListaServiços>
          </Serviços>
        </motion.div>

        <Projetos id='projetos'>
  <h1 className='Titulo-Projetos'>Projetos Profissionais</h1>
  <Projeto>
    <motion.div 
      variants={variants2} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.2 }} 
    >
      <CaixaProjeto>
        <Projeto1>
          <FotoP1 className='FotoP1' src={FotoProjeto5} alt="Projeto 5"/>
          <div className='overlay1'>
            <h3>BK TECK EQUIPAMENTOS</h3>
            <a href="" target="_blank">Ver site</a>
          </div>
        </Projeto1>
        <div className='Descrição'>
          <h1>BK TECK EQUIPAMENTOS - Soluções Inovadoras<br />para sua Empresa!</h1>
          <p>
            A BK Tech Equipamentos é uma empresa especializada em soluções<br />
             completas de segurança, proteção e equipamentos industriais. Com foco em<br />
              qualidade, tecnologia e confiabilidade, a BK Tech se dedica a fornecer<br />
               produtos e serviços que ajudam empresas a otimizar processos, garantir<br />
                a segurança dos colaboradores e manter ambientes de trabalho conformes<br />
                 com as normas técnicas vigentes.
          </p>
          <TecnologiasP3>
            <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"/>
            <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"/>
            <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
          </TecnologiasP3>
        </div>
      </CaixaProjeto>
    </motion.div>
    <motion.div 
      variants={variants} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.2 }} 
    >
      <CaixaProjeto>
        <Projeto1>
          <FotoP1 className='FotoP1' src={FotoProjeto1} alt="Projeto 1"/>
          <div className='overlay1'>
            <h3>Max Sales</h3>
            <a href="https://salesmax.com.br/" target="_blank">Ver site</a>
          </div>
        </Projeto1>
        <div className='Descrição'>
          <h1>MAX SALES - Adquira já seu plano com<br /> benefícios digitais exclusivos.</h1>
          <p>
            O Max Sales é uma plataforma digital que oferece planos de benefícios<br />
            exclusivos em entretenimento, saúde e bem-estar.<br />
            O projeto foi desenvolvido com foco em responsividade, performance<br />
            e experiência do usuário, integrando diversas marcas parceiras em um só lugar.
          </p>
          <TecnologiasP1>
            <img src="https://img.icons8.com/?size=256&id=13664&format=png"/>
          </TecnologiasP1>
        </div>
      </CaixaProjeto>
    </motion.div>

    
  </Projeto>
</Projetos>





<Projetos2 id='projetos'>
  <h1 className='Titulo-Projetos'>Projetos Pessoais</h1>
  <Projeto>
    <motion.div 
      variants={variants2} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.2 }} 
    >
      <CaixaProjeto>
        <Projeto1>
          <FotoP1 className='FotoP1' src={FotoProjeto6} alt="Projeto 5"/>
          <div className='overlay1'>
            <h3>Resident Evil 4</h3>
            <a href="https://resident-evil-4-sousadev.netlify.app/" target="_blank">Ver site</a>
            <a href="https://github.com/gabrisousa/Resident-Evil-4" target="_blank">Github</a>
          </div>
        </Projeto1>
        <div className='Descrição'>
          <h1>Resident Evil 4</h1>
          <p>
            Projeto front-end inspirado no jogo Resident Evil 4, desenvolvido com foco<br />
            em identidade visual, imersão temática e experiência do usuário. O objetivo<br />
            foi recriar uma interface impactante, utilizando imagens, tipografia e cores<br />
            para transmitir a atmosfera sombria e intensa do jogo. Este projeto demonstra<br />
            criatividade, atenção aos detalhes visuais e capacidade de transformar referências<br />
            do universo dos games em uma experiência web responsiva e bem estruturada, aplicando<br />
            boas práticas de front-end.
          </p>
          <TecnologiasP3>
            <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"/>
            <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"/>
            <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
          </TecnologiasP3>
        </div>
      </CaixaProjeto>
    </motion.div>
    <motion.div 
      variants={variants} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.2 }} 
    >
      <CaixaProjeto>
        <Projeto1>
          <FotoP1 className='FotoP1' src={FotoProjeto7} alt="Projeto 1"/>
          <div className='overlay1'>
            <h3>Star Bucks</h3>
            <a href="https://star-bucks-sousa-dev.netlify.app/" target="_blank">Ver site</a>
            <a href="https://github.com/gabrisousa/StarBucks" target="_blank">Github</a>
          </div>
        </Projeto1>
        <div className='Descrição'>
          <h1>Star Bucks</h1>
          <p>
            Projeto front-end inspirado na identidade visual da Starbucks, desenvolvido com<br /> 
            foco em layout moderno, responsividade e experiência do usuário. O objetivo foi<br />
            recriar uma interface limpa e atrativa, destacando produtos, cores da marca e organização<br />
            visual, além de praticar boas práticas de HTML, CSS e JavaScript.Este projeto demonstra<br />
            atenção aos detalhes, fidelidade ao design e capacidade de transformar referências reais<br />
            em interfaces funcionais e bem estruturadas.
          </p>
          <TecnologiasP3>
            <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"/>
            <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"/>
            <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
          </TecnologiasP3>
        </div>
      </CaixaProjeto>
    </motion.div>

    <motion.div 
      variants={variants2} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.2 }} 
    >
      <CaixaProjeto>
      
        
        <Projeto1>
          <FotoP1 className='FotoP1' src={FotoProjeto8} alt="Projeto 2"/>
          <div className='overlay1'>
            <h3>Spotify</h3>
            <a href="https://lista-de-tarefas-sousadev.netlify.app/" target="_blank">Ver site</a>
            <a href="https://github.com/gabrisousa/spotify" target="_blank">Github</a>
          </div>
        </Projeto1>
        <div className='Descrição'>
          <h1>Spotify</h1>
          <p>
            Projeto front-end inspirado no design e na experiência do Spotify, com foco em layout<br />
            moderno, organização visual e experiência do usuário. O objetivo foi recriar uma interface<br />
            que remete ao estilo da plataforma, trabalhando com tipografia, cores, navegação<br /> 
            e responsividade para diferentes tamanhos de tela. Este projeto demonstra domínio de HTML,<br />
            CSS e JavaScript, além da capacidade de transformar interfaces complexas em páginas<br />
            acessíveis e esteticamente agradáveis,aplicando boas práticas de desenvolvimento front-end.
          </p>

          <TecnologiasP3>
            <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"/>
            <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"/>
            <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
          </TecnologiasP3>
          
        </div>
        
        
      
      </CaixaProjeto>
    </motion.div>

    <motion.div
      variants={variants} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.2 }} 
    >
      <CaixaProjeto>
        <Projeto1>
          <FotoP1 className='FotoP1' src={FotoProjeto3} alt="Projeto 3"/>
          <div className='overlay1'>
            <h3>Irmãos Mario e Luigi</h3>
            <a href="https://irmaos-mario-e-luigi.netlify.app/" target="_blank">Ver site</a>
            <a href="https://github.com/gabrisousa/Mario-Bros" target="_blank">Github</a>
          </div>
        </Projeto1>
        <div className='Descrição'>
          <h1>Irmãos Mario e Luigi - Heróis do Enccanamento!</h1>
          <p>
            Quando o problema é vazamento, cano entupido ou torneira pingando, quem você,<br />
            vai chamar? Mario e Luigi! Com experiência única e muito bom humor, os irmãos mais<br />
            famosos do Reino dos Cogumelos estão prontos para resolver qualquer<br />
            emergência de encanamento com agilidade, confiança e um toque especial de diversão.
          </p>
          <TecnologiasP3>
            <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"/>
            <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"/>
            <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
          </TecnologiasP3>
        </div>
      </CaixaProjeto>
    </motion.div>

    <motion.div 
      variants={variants2} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.2 }} 
    >
      <CaixaProjeto>
        <Projeto1>
          <FotoP1 className='FotoP1' src={FotoProjeto4} alt="Projeto 4"/>
          <div className='overlay1'>
            <h3>Atletas Olímpicos</h3>
            <a href="https://atletas-olimpicos.netlify.app/" target="_blank">Ver site</a>
            <a href="https://github.com/gabrisousa/Olimpiadas" target="_blank">Github</a>
          </div>
        </Projeto1>
        <div className='Descrição'>
          <h1>Atletas no Brasil!</h1>
          <p>
            Atletas no Brasil é uma aplicação web desenvolvida para facilitar a pesquisa<br />
            de atletas brasileiros que competiram nas Olimpíadas de 2024. Na interface,<br />
            o usuário pode digitar o nome do atleta ou do esporte e, em seguida,<br />
            clicar no botão de Pesquisar para visualizar os resultados.
          </p>
          <TecnologiasP3>
            <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"/>
            <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"/>
            <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
          </TecnologiasP3>
        </div>
      </CaixaProjeto>
    </motion.div>


    <motion.div 
      variants={variants} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.2 }} 
    >
      <CaixaProjeto>
        <Projeto1>
          <FotoP1 className='FotoP1' src={FotoProjeto9} alt="Projeto 9"/>
          <div className='overlay1'>
            <h3>Weather Forecast App</h3>
            <a href="https://previsaodotemposousadev.netlify.app/" target="_blank">Ver site</a>
            <a href="https://github.com/gabrisousa/previsao-do-tempo" target="_blank">Github</a>
          </div>
        </Projeto1>
        <div className='Descrição'>
          <h1>Weather Forecast App</h1>
          <p>
            Projeto front-end de previsão do tempo, desenvolvido com foco em consumo de API,<br />
            exibição dinâmica de dados e experiência do usuário. O objetivo foi criar uma interface<br />
            funcional que apresenta informações climáticas de forma clara e responsiva, trabalhando<br />
            com requisições à API, estrutura de dados e atualização em tempo real.
          </p>
          <TecnologiasP3>
            <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"/>
            <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"/>
            <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
          </TecnologiasP3>
        </div>
      </CaixaProjeto>
    </motion.div>


    <motion.div 
      variants={variants2} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.2 }} 
    >
      <CaixaProjeto>
        <Projeto1>
          <FotoP1 className='FotoP1' src={FotoProjeto10} alt="Projeto 10"/>
          <div className='overlay1'>
            <h3>Five Nights At Freddy's</h3>
            <a href="https://welcometofivenightsatfreddys.netlify.app/" target="_blank">Ver site</a>
            <a href="https://github.com/gabrisousa/Five-Nights-At-Freddy-s" target="_blank">Github</a>
          </div>
        </Projeto1>
        <div className='Descrição'>
          <h1>Five Nights At Freddy's</h1>
          <p>
            Projeto front-end inspirado no universo de Five Nights at Freddy’s, desenvolvido com foco<br />
            em identidade visual, interatividade e experiência do usuário. O objetivo foi recriar uma<br />
            interface temática que remete à atmosfera marcante do jogo, trabalhando com tipografia,<br />
            imagens,efeitos visuais e responsividade.
          </p>
          <TecnologiasP3>
            <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"/>
            <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"/>
            <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
          </TecnologiasP3>
        </div>
      </CaixaProjeto>
    </motion.div>

    <motion.div 
      variants={variants} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.2 }} 
    >
      <CaixaProjeto>
        <Projeto1>
          <FotoP1 className='FotoP1' src={FotoProjeto11} alt="Projeto 11"/>
          <div className='overlay1'>
            <h3>PokeDev</h3>
            <a href="https://poke-devs.netlify.app/" target="_blank">Ver site</a>
            <a href="https://github.com/gabrisousa/projeto-pokedevs" target="_blank">Github</a>
          </div>
        </Projeto1>
        <div className='Descrição'>
          <h1>PokeDev</h1>
          <p>
            PokéDevs é um projeto front-end inspirado no universo Pokémon, desenvolvido com foco em<br />
            consumo de APIs, interface interativa e experiência do usuário. O objetivo foi criar uma<br />
            aplicação que apresenta dados reais de Pokémon de forma visualmente atrativa, utilizando<br />
            requisições à API, organização de cards e responsividade para diferentes telas.
          </p>
          <TecnologiasP3>
            <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"/>
            <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"/>
            <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"/>
          </TecnologiasP3>
        </div>
      </CaixaProjeto>
    </motion.div>
  </Projeto>
</Projetos2>


        {/* CONTATO */}
        <motion.div variants={variants2} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <Contatos id='contato'>
            <CaixaContatos>
              <div>
                <Logo2Img src={Logo2} alt="Logo" />
              </div>
              <Form>
                <h1>Contato</h1>
                <form onSubmit={(e) => onSubmit(e)}>
                  <div className="formcarry-block">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Insira seu nome" />
                  </div>
                  <div className="formcarry-block">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Insira seu email" />
                  </div>
                  <div className="formcarry-block">
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Insira sua mensagem"></textarea>
                  </div>
                  <div className="formcarry-block">
                    <button type="submit">Enviar</button>
                  </div>
                </form>
                <p>Ou</p>
                <IconesContato>
                  <IconesCont href="https://linkedin.com/in/gabriel-sousa-264abb191"><FaLinkedin/></IconesCont>
                  <IconesCont href="https://github.com/gabrisousa"><FaGithub/></IconesCont>
                  <IconesCont href="https://wa.me/5511987146678"><FaWhatsapp/></IconesCont>
                </IconesContato>
              </Form>
            </CaixaContatos>
          </Contatos>
          <Footer>
            <p>Desenvolvido por Gabriel Sousa.</p>
          </Footer>
        </motion.div>

        <ScrollToTopButton />
      </CaixaPrincipal>
    </>
  )
}

export default App