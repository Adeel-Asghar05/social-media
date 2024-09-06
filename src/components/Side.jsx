import { useState } from "react";

function Side({clicked}){

  const handleclick = (buttonName) => {
    // console.log(`Button is ${buttonName}`);
    
    clicked(buttonName);
  };

  return(
    <div className="mt-16 fixed flex flex-col w-[250px] h-screen bg-[#3B494F] border-r-2 border-gray-800">
      <button className="items-center text-lg text-white focus:bg-blue-600 focus:text-black py-1 px-2 mx-4 
      mt-4 border-2 border-transparent rounded-lg font-medium "
      onClick={()=>handleclick("Home")} >
        Home
          </button>


        

      <button className="items-center text-lg text-white focus:bg-blue-600 focus:text-black py-1 px-2 mx-4
        mt-4 border-2 border-transparent rounded-lg font-medium "
            onClick={()=>handleclick("Creat-post")} >

        Creat Post
        </button>
      <button className="items-center text-lg text-white focus:bg-blue-600 focus:text-black py-1 px-2 mx-4 
      mt-4 border-2 border-transparent rounded-lg font-medium "
            onClick={()=>handleclick("Reels")} >

        Reels
          </button>
    </div>
  )
}

export default Side;



