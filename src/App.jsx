import { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import React from 'react'

// Imagens
import Logo from './assets/Logo.png'
import Logo2 from './assets/Logo2.png'
import FotoPerfil from './assets/foto.png'
import FotoProjeto1 from './assets/Imagem-Projeto1.png'
import FotoProjeto2 from './assets/Imagem-Projeto2.png'
import FotoProjeto3 from './assets/Imagem-Projeto3.png'
import FotoProjeto4 from './assets/Imagem-Projeto4.png'
import VideoFundo from './assets/videoFundo.mp4'
// import IconReact from "./assets/react.png";
// import IconJs from "./assets/javascript.png";
// import IconHtml from "./assets/html.png";
// import IconCss from "./assets/css.png";

// Styled Components
import { 
  CaixaPrincipal, Header, ImagemLogo, LogoImg, Menu , LinkMenu, 
  IconesContato, IconesCont, IconeReact, NomeG, Sobre, 
  CaixaTextoSobre, TituloSobre, TextoSobre, CaixaSobre, Projetos, 
  Projeto, FotoP1, Projeto1, CaixaVideo, TecnologiasP1, 
  TecnologiasP3, Contatos, Form, Footer, Logo2Img, CaixaContatos, 
  Serviços, ServiçosTitulo, ServiçosDescrição, ListaServiços,
  Nome, Inicio, Descricao, Foto, FotoImg, Hamburger 
} from './Styles'

// Ícones
import { FaReact, FaLinkedin, FaGithub, FaWhatsapp, FaBars } from 'react-icons/fa'

// Componentes extras
import { IconCloud } from '../iconClould'
import ScrollToTopButton from "./ScrollToTopButton";

// Animações
const variants = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const variants2 = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
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

      {/* Botão Hamburger */}
      <Hamburger onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>

      {/* Menu */}
      <Menu open={open}>
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

        <Projetos id="projetos">
      <h1>Meus Projetos</h1>

      Projeto 1
      <Projeto1>
        <img src={FotoProjeto1} alt="Projeto 1" className="FotoP1" />
        <div className="overlay1">
          <h2>Max Sales</h2>
          <p>Meu site pessoal desenvolvido em React com styled-components.</p>
          <a href="https://salesmax.com.br/" target="_blank" rel="noreferrer">
            Ver Projeto
          </a>
          {/* <TecnologiasP1>
            <img src={IconReact} alt="React" />
            <img src={IconJs} alt="JavaScript" />
            <img src={IconHtml} alt="HTML" />
            <img src={IconCss} alt="CSS" />
          </TecnologiasP1> */}
        </div>
      </Projeto1>

      Projeto 2
      <Projeto1>
        <img src={FotoProjeto2} alt="Projeto 2" className="FotoP1" />
        <div className="overlay1">
          <h2>Irmãos Mario</h2>
          <p>Página institucional com animações e design moderno.</p>
          <a href="https://irmaos-mario-e-luigi.netlify.app/" target="_blank" rel="noreferrer">
            Ver Projeto
          </a>
          {/* <TecnologiasP1>
            <img src={IconHtml} alt="HTML" />
            <img src={IconCss} alt="CSS" />
            <img src={IconJs} alt="JavaScript" />
          </TecnologiasP1> */}
        </div>
      </Projeto1>

      Projeto 3
      <Projeto1>
        <img src={FotoProjeto3} alt="Projeto 3" className="FotoP1" />
        <div className="overlay1">
          <h2>Lista de Tarefas</h2>
          <p>Aplicativo de lista de tarefas com React Hooks e LocalStorage.</p>
          <a href="https://lista-de-tarefas-sousadev.netlify.app/" target="_blank" rel="noreferrer">
            Ver Projeto
          </a>
          {/* <TecnologiasP3>
            <img src={IconReact} alt="React" />
            <img src={IconJs} alt="JavaScript" />
          </TecnologiasP3> */}
        </div>
      </Projeto1>
    </Projetos>

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
