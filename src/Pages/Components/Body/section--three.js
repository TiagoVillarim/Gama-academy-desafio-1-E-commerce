import logo5 from '../../../assets/image/rolex5.jpg';
import logo6 from '../../../assets/image/rolex6.jpg';
import logo7 from '../../../assets/image/rolex7.jpg';
import logo8 from '../../../assets/image/rolex8.jpg';
import { FaAngleDoubleDown } from 'react-icons/fa';



export default function SectionThree(){
  return(
    <div id="visitar-catálogo-2" className="section--three-container">

      <header className="sectionHeaderThree">
          <h2> - Modelos especiais - </h2>
        </header>


      <section className="catalogo-container">  
            <div className="div-section1">
              <img src={logo5} className="img-1"/>
              <p className="text-section1">
               - De: R$559,99 -<br/><br/>
               <strong className="promotional-price">- Por: R$339,39 -</strong>
               <strong className="off-1">65% OFF</strong>
              </p>
            </div>
            
            <div className="div-section2">
              <img src={logo6} className="img-2"/>
              <p className="text-section2">
                - De: R$559,99 -<br/><br/>
                <strong className="promotional-price">- Por: R$339,39 -</strong>
                <strong className="off-2">75% OFF</strong>             
              </p>
            </div>

            <div className="div-section3">
              <img src={logo7} className="img-3"/>
              <p className="text-section3">
               - De: R$559,99 -<br/><br/>
               <strong className="promotional-price">- Por: R$339,39 -</strong>
               <strong className="off-3">55% OFF</strong>         
              </p>
            </div>

            <div className="div-section4">
              <img src={logo8} className="img-4"/>
              <p className="text-section4">
                - De: R$559,99 -<br/><br/>
                <strong className="promotional-price">- Por: R$339,39 -</strong>
                <strong className="off-4">45% OFF</strong> 
              </p>
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