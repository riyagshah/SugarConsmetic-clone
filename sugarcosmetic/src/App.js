
import { useState } from 'react';
import { Login } from './PrabhatComponents/Login/Login';
import { Register } from './PrabhatComponents/Register/Register';
import Navbar from "./components/Navbar"
import Footer from "./components/Fotter"

function App() {
  const [flow, setflow] = useState(false);
  const [user, setuser] = useState("");
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
  return (
    <>
     <Navbar  user={user} setuser={setuser} active={active} setActive={setActive} flow={flow} setflow={setflow} hadleclick={hadleclick} HandleClose={HandleClose}/>
     {active?<Register flow={flow} setflow={setflow} active={active} user={user} setuser={setuser} HandleClose={HandleClose} setActive={setActive}/>:""}

   </>
  );
}

export default App;
