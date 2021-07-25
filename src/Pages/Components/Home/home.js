import SectionOne from '../Body/section--one';
import SectionTwo from '../Body/section--two';
import SectionThree from '../Body/section--three';
import LoginPage from '../Main/main';
import { useEffect, useState} from 'react';


export default function Home(){

  const [produtos, setProdutos] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect (() => {
    localStorage.setItem("Carrinho", JSON.stringify(produtos))
  }, [produtos])

  const changeCart = (value) => {
    setCounter(counter + 1)
    console.log(counter)
  }

  const changeProdutos = (product) => {
    setProdutos([...produtos, product])
    console.log(produtos)
  }


  return(
    <div>
      <SectionOne cart={counter} callback={changeCart}/>
      <SectionTwo cart={counter} callback={changeCart} produtos={produtos} setProdutos={changeProdutos}/>
      <SectionThree cart={counter} callback={changeCart}/>
      <LoginPage/>  
    </div>
  )
}