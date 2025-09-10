import styled from "styled-components";
import { FaReact } from 'react-icons/fa';

/* CONTAINER PRINCIPAL */
export const CaixaPrincipal = styled.div`
  height: 100vh;
  width: 100vw;
`;

/* VÍDEO DE FUNDO */
export const CaixaVideo = styled.div`
  position: absolute;
  z-index: -1;
  object-fit: cover;
  width: 100%;

  video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

/* HEADER */
export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #363535ff;
  border-bottom: solid 1px #61DBFB;
  z-index: 1;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`;

export const ImagemLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  left: 0;
`;

export const LogoImg = styled.img`
  height: 60px;
`;

export const Logo2Img = styled.img`
  height: 350px;
  margin-right: 80px;

  @media (max-width: 1024px) {
    height: 250px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  width: 100%;
  gap: 30px;
  padding-right: 70px;

  button {
    border: none;
    background-color: #61DBFB;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding-right: 0;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export const LinkMenu = styled.a`
  text-shadow: 2px 1px 2px black;
  font-size: 15px;
  text-decoration: none;
  color: #61DBFB;

  &:hover {
    color: white;
  }
`;

/* NOMES */
export const NomeG = styled.h1`
  color: white;
  font-family: "Orbitron", sans-serif;
  font-size: 45px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Nome = styled.h3`
  color: white;
  font-family: "Orbitron", sans-serif;
`;

/* INÍCIO */
export const Inicio = styled.div`
  position: relative;
  align-items: center;
  justify-content: space-around;
  display: flex;
  height: 100vh;
  padding: 90px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 40px 20px;
    text-align: center;
    gap: 30px;
  }
`;

export const Descricao = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  text-shadow: 2px 1px 2px black;

  span {
    color: #61DBFB;
  }
`;

export const Foto = styled.div``;

export const FotoImg = styled.img`
  height: 260px;
  border: 1.5px solid #61DBFB;
  box-shadow: 4px 4px 4px 4px black;

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

/* ICONES */
export const IconesContato = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 20px;

  a {
    text-decoration: none;
    font-size: 35px;
    color: #61DBFB;
    text-shadow: 2px 1px 2px black;
  }
`;

export const IconesCont = styled.a`
  font-size: 35px;
  color: #61DBFB;
  text-shadow: 2px 1px 2px black;
`;

export const IconeReact = styled(FaReact)`
  font-size: 60px;
  color: #61DBFB;
  text-shadow: 2px 1px 2px black;
`;

/* SOBRE */
export const Sobre = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    padding: 40px 20px;
  }
`;

export const CaixaSobre = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #61DBFB;
  border-radius: 10px;
  margin-top: 100px;
  box-shadow: 5px 5px 5px 5px black;
  padding: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 50px;
    text-align: center;
  }
`;

export const CaixaTextoSobre = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
`;

export const TituloSobre = styled.h1`
  color: #61DBFB;
`;

export const TextoSobre = styled.p`
  text-align: center;
  margin-top: 15px;
  max-width: 800px;

  @media (max-width: 768px) {
    padding: 0 10px;
    font-size: 14px;
  }
`;

/* SERVIÇOS */
export const Serviços = styled.div`
  height: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  flex-direction: column;
  padding: 20px;
  text-align: center;
`;

export const ServiçosTitulo = styled.h1``;

export const ServiçosDescrição = styled.div`
  text-align: center;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const ListaServiços = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 20px;

  li::marker {
    content: "•";
    color: #61DBFB;
    margin-right: 10px;
    padding: 10px;
  }

  span {
    font-weight: bold;
    color: #61DBFB;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 30px 0;
  }
`;

/* PROJETOS */
export const Projetos = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 50px;

  @media (max-width: 768px) {
    padding: 20px;
    gap: 30px;
  }
`;

export const Projeto1 = styled.div`
  position: relative;
  display: flex;
  width: 300px;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;

  .FotoP1 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .overlay1 {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(0,0,0,0.7);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 15px;
  }

  &:hover .overlay1 {
    opacity: 1;
  }

  &:hover .FotoP1{
    transform: scale(1.05);
  }

  .overlay1 a {
    color: #fff;
    margin-top: 5px;
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 160px;
  }
`;

export const Projeto = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  gap: 100px;

  .Descrição {
    margin-left: 20PX;
    flex-direction: column;
  }

  .IconeReact {
   font-size: 30px;
  }

  .Descrição h1 {
    font-size: 20px;
  }

  .Descrição p {
    margin-top: 10px;
  }

  div {
    display: flex;
  }
`;

export const FotoP1 = styled.img`
  height: 150px;
`;

export const TecnologiasP1 = styled.div`
  margin-top: 10px;

  img {
    height: 35px;
  }
`;

export const TecnologiasP3 = styled.div`
  margin-top: 10px;
  gap: 5px;

  img {
    height: 35px;
  }
`;

/* CONTATO */
export const Contatos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 100px;
  border-top: 1px solid #61DBFB;
  background-color: black;
  padding: 40px 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const CaixaContatos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 450px;

    @media (max-width: 480px) {
      gap: 15px;
    }
  }

  h1 {
    margin-bottom: 20px;
    color: #61DBFB;
    text-align: center;
    font-size: 2rem;

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    margin-top: 10px;
    font-weight: bold;
    color: #61DBFB;
    text-align: center;
  }

  input, textarea {
    border: 1px solid #61DBFB;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    background-color: white;
    color: black;
    resize: vertical;

    @media (max-width: 480px) {
      padding: 8px;
    }
  }

  textarea {
    height: 100px;
  }

  button {
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    background-color: #61DBFB;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 480px) {
      padding: 8px;
    }
  }

  /* Ícones de contato */
  .IconesContato {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 15px;

    a {
      font-size: 35px;
      color: #61DBFB;
      text-shadow: 2px 1px 2px black;

      @media (max-width: 480px) {
        font-size: 28px;
      }
    }
  }
`;



/* FOOTER */
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: black;

  p {
    font-weight: bold;
    color: #61DBFB;
    text-align: center;
  }
`;
