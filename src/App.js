import'swiper/swiper.min.css';
import './App.scss';
import {BrowserRouter ,Route} from 'react-router-dom'
import Header from './componenent/header/Header';
import Footer from './componenent/footer/Footer';
import Routess from './config/Routess';



function App() {
  
  return (
    <BrowserRouter >
    <Route  render={props=>(
    <>
       <Header {...props}/>
       <Routess/>
       <Footer/>
    </>
   )}/>

  </BrowserRouter>
     
      
    


 
  );
 
}

export default App;
