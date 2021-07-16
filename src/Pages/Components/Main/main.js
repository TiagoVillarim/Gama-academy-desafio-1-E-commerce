import { useState } from 'react';
import Header from '../Header/header';
import InstagramLogo from '../../../assets/image/instagram.png';
import WhatsAppLogo from '../../../assets/image/wppLogo.png';
import GmailLogo from '../../../assets/image/Gmail-Logo.png'
import mainStyle from '../Styles/login.css';
import footerStyle from '../Styles/footer.css';


export default function Main(){

  const [inputEmail, setInputEmail] = useState([''])

  function cadastrarEmail (){
    localStorage.setItem("email", JSON.stringify(inputEmail))
    setInputEmail("")
    alert(`Seu email ${inputEmail} foi salvo com sucesso!`)
  }

  return(
    <>
        <section id="end" className="container-main">
          <Header/>
          <div className="login-section">
            <h3 className="email-spam">Cadastre o seu email no campo abaixo para receber todas as promoções da BLACK FRIDAY!</h3>
            <input type="text" id='inputEmail' placeholder="Digite o seu Email:" className="input-email"
                  value={inputEmail} onChange={event => setInputEmail(event.target.value)}/>
            <a className="button-cadastrar" onClick={cadastrarEmail}>cadastrar</a>
          </div>
          <a href="#inicio" className="back-top">Voltar ao início</a>
          <footer className="footer-container">
            <p className="contato-text">Contato:</p>
            <img src={InstagramLogo} className="footerImage"/>@ProjetoGamaAcademy_hiringCoders
            <img src={WhatsAppLogo} className="footerImage"/>(99)999999-99
            <img src={GmailLogo} className="footerImage-gmail"/>gmail@gmail.com
          </footer>
        </section>

      </>
  )
}