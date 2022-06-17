
import { useEffect, useState } from 'react';
import { Login } from './PrabhatComponents/Login/Login';
import { Register } from './PrabhatComponents/Register/Register';
import Navbar from "./components/Navbar"
import Footer from "./components/Fotter"
import HomePage from "./components/riya/HomePage"
import './App.css';
import { Spinner } from '@chakra-ui/react';
function App() {
  const [flow, setflow] = useState(false);
  const [user, setuser] = useState("");
  const [loading,setloading]=useState(false)
    const [active, setActive] = useState(false);
  const hadleclick = () => {
    setActive(true);
  };
  const HandleClose = () => {
    setActive(false);
    if (user == "") {
      setflow(false);
    }
  };
  const stopMovie = (e) => {
    e.target.pause();
    console.log('off');
  }
  
 const  playMovie = (e) => {
    e.target.play();
    console.log('on');
  }

    if(loading==true){
      setTimeout(() => {
       
       setloading(false)
     },2000);
     
   }

  return (
    loading?(<div className="spinner">
    <Spinner
thickness='4px'
speed='0.9s'
emptyColor='gray.200'
color='pink.300'
size='xl'
z-zIndex="1000"

/>

  </div>):
    <>
      
     <Navbar  user={user} setuser={setuser} active={active} setActive={setActive} flow={flow} setflow={setflow} hadleclick={hadleclick} HandleClose={HandleClose}/>
       
     {active?<Register loading={loading} setloading={setloading} flow={flow} setflow={setflow} active={active} user={user} setuser={setuser} HandleClose={HandleClose} setActive={setActive}/>:<HomePage playMovie={playMovie} stopMovie={stopMovie}/>}
    
     <Footer/>
   </>
  );
}

export default App;
