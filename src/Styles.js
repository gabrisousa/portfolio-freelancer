import styled from "styled-components";
import { FaReact} from 'react-icons/fa';
import { motion } from "framer-motion";






export const CaixaPrincipal = styled.div`
  height: 100vh;
  width: 100vw;
  
`;



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



export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #363535ff;
  border-bottom: solid 1px #61DBFB;
  z-index: 1;
  width: 100%;

  .hamburger {  
    display: none;
    cursor: pointer;
    z-index: 999;
    color: white;

    @media (max-width: 768px) {
      display: block;
      
    }
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

@media (max-width: 768px) {
    height: 200px;
    margin: 0 auto;
  }

   @media (max-width: 480px) {
    height: 180px;
  }
`;



export const Menu = styled(motion.nav)`
display: flex;
justify-content: flex-end;
align-items: center;
color: white;
width: 100%;
position: absolute;
gap: 30px;
padding-right: 70px;

button {
  
  border: none;
  background-color: #61DBFB;
}


@media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    background-color: #363535ff;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
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

export const Foto = styled.div`


  
`;

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



export const IconesContato = styled.div`
  
 display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 15px;
  

  a {
    text-decoration: none;
    font-size: 35px;
    color: #61DBFB;
    text-shadow: 2px 1px 2px black;

     @media (max-width: 480px) {
        font-size: 28px;
      }
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
  text-shadow: 2px 1px 2px  black;
`;

export const Sobre = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    padding: 40px 20px;
    background-color: #242424;
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
display: flex;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 15px;

@media (max-width: 768px) {
    padding: 0 10px;
    font-size: 14px;
  }
`;

export const Serviços = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
margin-top: 100px;
flex-direction: column;


@media (max-width: 480px) {
    
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    background-color: #242424;

  }


`;


export const ServiçosTitulo = styled.h1`



`;


export const ServiçosDescrição = styled.div`
text-align: center;
margin-top: 100px;

@media (max-width: 768px) {
    margin-top: 50px;
  }


`;


export const ListaServiços = styled.div`

margin: 50px;
display: flex;
flex-direction: column;
justify-content: flex-start;
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

export const Serviço1 = styled.div`


`;

export const CaixaProjeto = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 50px;

@media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    background-color: #242424;

  }

.Descrição {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 10px;
  
}

.Descrição h1 {
  font-size: 30px;
  margin-top: 15px;

  @media (max-width: 768px) {
    
    margin-top: -20px;
  }
}

.Descrição p {
  font-size: 15px;
  margin-top: 15px;

  @media (max-width: 768px) {
    
    margin-top: 25px;
  }

}

`;





export const Projetos = styled.div`
height: 250vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 30px;

 @media (max-width: 768px) {
    padding: 20px;
    gap: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 650px;

    
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  

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

  @media (max-width: 780px) {
    width: 250px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    

  }

  

  


  



`;

export const Projeto = styled.div`
margin-top: 150px;
display: flex;
flex-direction: column;
gap: 100px;





`;




export const FotoP1 = styled.img`
height: 150px;


`;

export const TecnologiasP1 = styled.div`
margin-top: 10px;

img {
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}


@media (max-width: 768px) {
  display: flex;
  align-items: center;
  justify-content: center;

  img {


    height: 35px;
    width: 35px;
  }
}

    




`;

export const TecnologiasP3 = styled.div`
margin-top: 10px;
gap: 5px;


img {
  height: 35px;
}


@media (max-width: 768px) {
  display: flex;
  align-items: center;
  justify-content: center;
  
  

  img {
    height: 35px;
    width: 35px;
    display: flex;
  }
}

`;

export const Contatos = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
gap: 100px;
border-top: 1px solid #61DBFB;
background-color: black;
margin-top: 100px;

@media (max-width: 1024px) {
    flex-direction: column;
    gap: 50px;
    padding: 30px 20px;
    margin-top: 600px;
  }



`;

export const CaixaContatos = styled.div`
  display: flex;
  justify-content: space-between;

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
margin-bottom: -100px;



form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  

  
  
}

h1 {
  margin-bottom: 20px;

  @media (max-width: 768px) {
    color: white;
    margin-bottom: 40px;
  }

  
  
}

p {
    margin-top: 10px;
    font-weight: bold;
    color: #61DBFB;
    text-align: center;
  }

input {
  border: 1px solid #61DBFB;
    border-radius: 5px;
    padding: 10px;
    width: 400px;
    background-color: white;
    color: black;
    resize: vertical;

  
}



textarea {
  border: 1px solid #61DBFB;
    border-radius: 5px;
    padding: 10px;
    width: 400px;
    background-color: white;
    color: black;
    resize: vertical;
    height: 100px;

  

  
  
}

  


button {
  
  border-radius: 5px;
    padding: 10px;
    width: 400px;
    background-color: #61DBFB;
    font-weight: bold;
    cursor: pointer;

  
}



`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: black;

  p {
    font-weight: bold;
    color: #61DBFB;
  }
`;








 