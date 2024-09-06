import { useState } from 'react'
import Navbar from './components/Navbar'
import Side from './components/Side'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
function App() {

  let [selectedbutn ,setval]=useState("Home");

    let handleButton =(buttonname)=>{
          console.log('buton clicked in app',buttonname);    
    setval(buttonname);
  }

  return (
    <div >
    <Navbar clicked={handleButton} ></Navbar>


      <div className={`flex ${selectedbutn!="Home" ? "h-screen" : ""}`}>
        <Side clicked={handleButton}></Side>


        <div className={`  flex justify-center w-full h-[vh]  bg-[#394449]`}>

        {selectedbutn==="Login" &&<Login  clicked={handleButton} ></Login>}
        {selectedbutn==="Signup" &&<Signup  clicked={handleButton} />}

        {selectedbutn==="Home" &&<Home  clicked={handleButton} ></Home>}

        </div>
        </div>
    </div>
  )
}

export default App;


