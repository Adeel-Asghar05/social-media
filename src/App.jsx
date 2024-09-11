

import { useState } from 'react';
import Navbar from './components/Navbar';
import Side from './components/Side';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Adpost from './components/Adpost';
import { PostProvider } from './components/Store';

function App() {
  const [selectedButn, setSelectedButn] = useState("Home");

  const handleButton = (buttonName) => {
    setSelectedButn(buttonName);
  };

  const handlePostSuccess = () => {
    setSelectedButn("Home"); // Navigate to Home page on successful post
  };

  return (
    <PostProvider>
      <div className='bg-[#394449]'>
        <Navbar clicked={handleButton} />

        <div className={`flex ${selectedButn !== "Home" ? "h-screen" : ""}`}>
          <Side clicked={handleButton} />

          <div className={`flex justify-center w-full h-[vh] bg-[#394449]`}>
            {selectedButn === "Login" && <Login clicked={handleButton} />}
            {selectedButn === "Signup" && <Signup clicked={handleButton} />}
            {selectedButn === "Home" && <Home clicked={handleButton} />}
            {selectedButn === 'Creat-post' && <Adpost onPostSuccess={handlePostSuccess} />}
          </div>
        </div>
      </div>
    </PostProvider>
  );
}

export default App;



