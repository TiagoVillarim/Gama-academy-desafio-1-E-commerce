import { FaAngleDoubleDown } from 'react-icons/fa';
import logo1 from '../../../assets/image/rolex1.jpg';
import logo2 from '../../../assets/image/rolex2.jpg';
import logo3 from '../../../assets/image/rolex3.jpg';
import logo4 from '../../../assets/image/rolex4.jpg';
import catalogoStyle from '../Styles/catalogo.scss';



export default function SectionTwo(){
    return(
      <div id="visitar-catálogo" className="section--two-container">
        <header className="sectionHeaderTwo">
          <h2> - Até 80% de desconto em toda a loja - </h2>
        </header>

        <section className="catalogo-container">  
          <div id="01" className="div-section1">
            <img id="01" src={logo1} className="img-1"/>
            <p className="text-section1">
              - De: R$559,99 -<br/><br/>
              <strong className="promotional-price">- Por: R$339,39 -</strong>
              <strong className="off-1">65% OFF</strong>
            </p>
          </div>
          
          <div id="02" className="div-section2">
            <img id="02" src={logo2} className="img-2"/>
            <p className="text-section2">
              - De: R$559,99 -<br/><br/>
              <strong className="promotional-price">- Por: R$339,39 -</strong>
              <strong className="off-2">75% OFF</strong>            
            </p>
          </div>

          <div id="03" className="div-section3">
            <img id="03" src={logo3} className="img-3"/>
            <p className="text-section3">
              - De: R$559,99 -<br/><br/>
              <strong className="promotional-price">- Por: R$339,39 -</strong>
              <strong className="off-3">55% OFF</strong>     
            </p>
          </div>

          <div id="04" className="div-section4">
            <img id="04" src={logo4} className="img-4"/>
            <p className="text-section4">
              - De: R$559,99 -<br/><br/>
              <strong className="promotional-price">- Por: R$339,39 -</strong>
              <strong className="off-4">45% OFF</strong> 
            </p>
          </div>
        </section>
        <div>
          <a href="#visitar-catálogo-2">
            <FaAngleDoubleDown className="arrow-down-2" alt="visitar o catálogo"/>
          </a>
        </div>

      </div>
    )
}