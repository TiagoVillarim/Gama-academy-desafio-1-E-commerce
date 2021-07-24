import logo5 from '../../../assets/image/rolex5.jpg';
import logo6 from '../../../assets/image/rolex6.jpg';
import logo7 from '../../../assets/image/rolex7.jpg';
import logo8 from '../../../assets/image/rolex8.jpg';
import { FaAngleDoubleDown } from 'react-icons/fa';



export default function SectionThree(cart, changeCart){

  const addCart = (event) => {
    console.log(event.target.id)
    const indice = event.target.id.slice(-1)[0]
    localStorage.setItem(`Produto:${indice}`, JSON.stringify(event.target.id))
  }



  return(
    <div id="visitar-catálogo-2" className="section--three-container">

      <header className="sectionHeaderThree">
          <h2 data-aos="fade-up" data-aos-duration="1000" > - Modelos especiais - </h2>
        </header>


      <section className="catalogo-container">  
            <div data-aos="fade-up" data-aos-duration="1000"   className="div-section1">
              <img id="05" src={logo5} className="img-1"/>
              <p className="text-section1">
               - De: R$559,99 -<br/><br/>
               <strong className="promotional-price">- Por: R$339,39 -</strong>
              </p>
              <a id="relogio-modelo-5" className="add-cart-1" onClick={event => addCart(event)}>adicionar ao carrinho</a>
            </div>
            
            <div data-aos="fade-up" data-aos-duration="1200"  className="div-section2">
              <img id="06" src={logo6} className="img-2"/>
              <p className="text-section2">
                - De: R$559,99 -<br/><br/>
                <strong className="promotional-price">- Por: R$339,39 -</strong>
              </p>
              <a id="relogio-modelo-6" className="add-cart-2" onClick={event => addCart(event)}>adicionar ao carrinho</a>             
            </div>

            <div data-aos="fade-up" data-aos-duration="1500"  className="div-section3">
              <img id="07" src={logo7} className="img-3"/>
              <p className="text-section3">
               - De: R$559,99 -<br/><br/>
               <strong className="promotional-price">- Por: R$339,39 -</strong>
              </p>
              <a id="relogio-modelo-7" className="add-cart-3" onClick={event => addCart(event)}>adicionar ao carrinho</a>         
            </div>

            <div data-aos="fade-up" data-aos-duration="1700"  className="div-section4">
              <img id="08" src={logo8} className="img-4"/>
              <p className="text-section4">
                - De: R$559,99 -<br/><br/>
                <strong className="promotional-price">- Por: R$339,39 -</strong>
              </p>
              <a id="relogio-modelo-8" className="add-cart-4" onClick={event => addCart(event)}>adicionar ao carrinho</a> 
            </div>
          </section>

          <div>
          <a href="#end">
            <FaAngleDoubleDown className="arrow-down-2" alt="visitar o catálogo"/>
          </a>
        </div>

  </div>
  )
}