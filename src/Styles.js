import styled from "styled-components";
import { FaReact} from 'react-icons/fa';





export const CaixaPrincipal = styled.div`
  height: 100vh;
  width: 100vw;

  @media query (max-width: 768px) {
    
  }
  
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
`;



export const Menu = styled.div`
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


@media (max-width: 768px) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  

  
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
`;



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
  text-shadow: 2px 1px 2px  black;
`;

export const Sobre = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  
  
  
`;

export const CaixaSobre = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #61DBFB;
  border-radius: 10px;
  margin-top: 100px;
  box-shadow: 5px 5px 5px 5px black;
  
  
  
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
`;

export const Serviços = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
margin-top: 100px;
flex-direction: column;


`;


export const ServiçosTitulo = styled.h1`

`;


export const ServiçosDescrição = styled.div`
text-align: center;
margin-top: 100px;


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


`;

export const Serviço1 = styled.div`


`;





export const Projetos = styled.div`
height: 250vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 30px;
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

  div{
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

export const Contatos = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
gap: 100px;
border-top: 1px solid #61DBFB;
background-color: black;


`;

export const CaixaContatos = styled.div`
  display: flex;
  justify-content: space-between;

  
  
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
}

p {
    margin-top: 10px;
    font-weight: bold;
  }

input {
  border: 1px solid #61DBFB; ;
  border-radius: 5px;
  padding: 10px;
  resize: vertical;
  background-color: white;
  background-color: white;
  width: 400px;
  color: black;
}



textarea {
  border: 1px solid #61DBFB;
  border-radius: 5px;
  padding: 10px;
  width: 400px;
  resize: vertical;
  background-color: white;
  height: 100px;
  color: black;

  
  
}

  


button {
  
  border-radius: 5px;
  padding: 10px;
  width: 400px;
  background-color: #61DBFB;
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








 


