
import { FaAngleDoubleDown } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../../assets/image/friday.png';
import sectionTwoStyle from '../Styles/body.scss';
import textStyle from '../Styles/texts.scss';

export default function SectionOne(){
  return(
    <>
      <section id="inicio" className="section--one-container">
        <header className='container-header'>
            <a className="sectionOneHeader"> - My Timepiece - </a>
            <a href="#visitar-catálogo" className="go-to-end">carrinho<FaShoppingCart className="cart"/></a>  
        </header>

        <h1 className="promo-container">
          <strong>
            Chegou a hora da super promoção na BLACK FRIDAY !<br/><br/>todos os produtos com até <strong className="strong">80% OFF</strong><br/><br/>
          </strong>
        </h1>
        
        <h3 className="spam">
          Compre seu relógio com desconto nesta Black Friday !
        </h3>
        
        <div>
          <img src={logo} alt="blackFridayLogo-1" className="black-logo"/>
        </div>

        <div>
          <spam className="olhar-catalogo">Venha olhar o nosso catálogo logo abaixo</spam>    
          <a href="#visitar-catálogo">
            <FaAngleDoubleDown className="arrow-down" alt="visitar o catálogo"/>
          </a>
        </div>
      </section>
    </>
  )
}