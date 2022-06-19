
import { useEffect, useState } from 'react';
import { Login } from './PrabhatComponents/Login/Login';
import { Register } from './PrabhatComponents/Register/Register';
import Navbar from "./components/Navbar"
import Footer from "./components/Fotter"
import HomePage from "./components/riya/HomePage"

import Products from "./components/riya/Products"

import SearchResults from './components/Shivam/SearchResults';

import './App.css';
import { Spinner } from '@chakra-ui/react';
import Cart from './components/riya/Cart';
function App() {
  const [flow, setflow] = useState(false);
  const [user, setuser] = useState("");
  const [loading,setloading]=useState(false)

  const [active, setActive] = useState(false);
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) =>{
    if(cart.indexOf(item)!== -1) return;
    setCart([...cart, item]);
  }
  const handleChange = (item, d)=>{
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount +=d;

    if(arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };


    const [active, setActive] = useState(false);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [searchResult, setSearchResult] = useState([]);

  const hadleclick = () => {
    setActive(true);
  };
  const HandleClose = () => {
    setActive(false);
    if (user === "") {
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

    if(loading===true){
      setTimeout(() => {
       
       setloading(false)
     },2000);
     
   }

// console.log("show search res",showSearchResult,searchResult);

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

     <Navbar  user={user} setuser={setuser} active={active} setActive={setActive} flow={flow} setflow={setflow} hadleclick={hadleclick} HandleClose={HandleClose} setShow={setShow} size={cart.length}/>
       
     {/* {active?<Register loading={loading} setloading={setloading} flow={flow} setflow={setflow} active={active} user={user} setuser={setuser} HandleClose={HandleClose} setActive={setActive}/> &&  <Cart cart={cart} setCart={setCart} handleChange={handleChange}/> :<HomePage playMovie={playMovie} stopMovie={stopMovie} handleClick={handleClick}/>} */}
     {
      show ? (
        <HomePage handleClick={handleClick} /> ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
        )
     
     }
    

     <Navbar  user={user} setuser={setuser} active={active} setActive={setActive} flow={flow} setflow={setflow} hadleclick={hadleclick} HandleClose={HandleClose}  setShowSearchResult={setShowSearchResult} setSearchResult={setSearchResult} />
       
     {
     active?
      <Register loading={loading} setloading={setloading} flow={flow} setflow={setflow} active={active} user={user} setuser={setuser} HandleClose={HandleClose} setActive={setActive}/>
      : (showSearchResult? <SearchResults searchResult={searchResult}/>
      :<HomePage playMovie={playMovie} stopMovie={stopMovie}/>)
     }
  

     <Footer/>

   </>
  );
}

export default App;
