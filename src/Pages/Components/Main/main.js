import { useState } from 'react';
import InstagramLogo from '../../../assets/image/instagram.png';
import WhatsAppLogo from '../../../assets/image/wppLogo.png';
import GmailLogo from '../../../assets/image/Gmail-Logo.png'
import mainStyle from '../Styles/login.scss';
import footerStyle from '../Styles/footer.scss';
import headerStyle from '../Styles/header.scss';


export default function Main(){

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputState, setInputState] = useState('');
  const [inputCity, setInputCity] = useState('');
  const [inputAddress, setInputAddress] = useState('');
  const [inputID, setInputID] = useState('');





   function cadastrar (){
     if(inputName < 5 || inputName === undefined ||
        inputEmail < 5 || inputEmail === undefined ||
        inputState < 3 || inputState === undefined ||
        inputCity < 5 || inputCity === undefined ||
        inputAddress < 5 || inputAddress === undefined ||
        inputID < 5 || inputID === undefined){
          alert("Opa, algo deu errado! verifique o seu cadastro e tente novamente")

      }else{
        localStorage.setItem("ClientName", JSON.stringify(inputName));
        localStorage.setItem("ClientEmail", JSON.stringify(inputEmail));
        localStorage.setItem("ClientState", JSON.stringify(inputState));
        localStorage.setItem("ClientCity", JSON.stringify(inputCity));
        localStorage.setItem("ClientAddress", JSON.stringify(inputAddress));
        localStorage.setItem("ClientID", JSON.stringify(inputID));
        alert(`Seu cadastro foi salvo com sucesso!`)
        setInputEmail("");
        setInputName("");
        setInputState("");
        setInputCity("");
        setInputAddress("");
        setInputID("");
      }
  }

  return(
    <>
        <section id="end" className="container-main">
          <header className="header">
            <h1 className='header-title'> - Cadastre-se - </h1>
          </header>
          <div className="login-section">
            <h3 className="email-spam">Faça o seu cadastro nos campos logo abaixo!</h3>

            <input type="text" key="NAME" id="inputName" placeholder="Digite o seu nome completo:" className="inputs"
                  value={inputName} onChange={event => setInputName(event.target.value)}/>

            <input type="text" key="EMAIL" id='inputEmail' placeholder="Digite o seu Email:" className="inputs"
                  value={inputEmail} onChange={event => setInputEmail(event.target.value)}/>

            <input type="text" key="STATE" id="inputState" placeholder="Digite o seu estado:" className="inputs"
                  value={inputState} onChange={event => setInputState(event.target.value)}/> 

            <input type="text" key="CITY" id="inputCity" placeholder="Digite a sua cidade:" className="inputs"
                  value={inputCity} onChange={event => setInputCity(event.target.value)}/>

            <input type="text" key="ADDRESS" id="inputAddress" placeholder="Digite o seu endereço:" className="inputs"
                  value={inputAddress} onChange={event => setInputAddress(event.target.value)}/>

            <input type="number" key="NUMBER" id="inputNumber" placeholder="Digite o seu CPF:" className="inputs"
                  value={inputID} onChange={event => setInputID(event.target.value)}/>

            <a className="button-cadastrar" onClick={cadastrar}>cadastrar</a>
          </div>
          <a href="#inicio" className="back-top">Voltar ao início</a>
          <footer className="footer-container">
            <p className="contato-text">Contato:</p>
            <img src={InstagramLogo} className="footerImage"/>@ProjetoGamaAcademy_hiringCoders  
            <img src={WhatsAppLogo} className="footerImage"/>(99)999999
            <img src={GmailLogo} className="footerImage-gmail"/>gmail@gmail.com
          </footer>
        </section>

      </>
  )
}