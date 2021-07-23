import './App.css';
import style from '../src/Global.scss';
import Routes from './Pages/routes';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


function App() {
  
  
  AOS.init({
    once:true
  });
  
  return (
    <div>
      <Routes/>
    </div>
  );
}

export default App;
