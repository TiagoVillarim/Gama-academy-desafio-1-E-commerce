
import { FaAngleDoubleDown } from 'react-icons/fa';
import sectionTwoStyle from '../Styles/body.scss';
import textStyle from '../Styles/texts.scss';

export default function SectionOne(){
  return(
    <>
      <section id="inicio" className="section--one-container">
        <header className='container-header'>
            <a className="sectionOneHeader"> - My Timepiece - </a>
            <div className="cart-container">
              <a className="cadastro" href="#end">cadastrar</a> 
              <a className="carrinho">carrinho</a> 
            </div>
        </header>
        
        <div>
          <h1 className="promo-container">
            <strong>
              Chegou a hora da super promoção na BLACK FRIDAY !<br/><br/>todos os produtos com até <strong className="strong">80% OFF</strong><br/><br/>
            </strong>
          </h1>
        </div>
        
        <h3 className="spam">
          Compre seu relógio com desconto nesta Black Friday !
        </h3>
        


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