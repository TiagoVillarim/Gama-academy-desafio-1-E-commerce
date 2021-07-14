import SectionOne from '../Body/section--one';
import SectionTwo from '../Body/section--two';
import SectionThree from '../Body/section--three';
import LoginPage from '../Main/main';


export default function Home(){
  return(
    <div>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <LoginPage/>  
    </div>
  )
}