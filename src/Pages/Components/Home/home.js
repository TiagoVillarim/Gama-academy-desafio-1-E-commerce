import SectionOne from '../Body/section--one';
import SectionTwo from '../Body/section--two';
import SectionThree from '../Body/section--three';
import LoginPage from '../Main/main';
import { useState} from 'react';


export default function Home(){

  const [counter, setCounter] = useState(0)

  const changeCart = (value) => {
    setCounter(counter + 1)
    console.log(counter)
  }

  return(
    <div>
      <SectionOne cart={counter} callback={changeCart}/>
      <SectionTwo cart={counter} callback={changeCart}/>
      <SectionThree cart={counter} callback={changeCart}/>
      <LoginPage/>  
    </div>
  )
}