import { Link } from 'react-router-dom';

function Signup ({clicked}){

const handleclick = (buttonName) => {
    // console.log(`Button is ${buttonName}`);
        
    clicked(buttonName);
};

return(
  <div className="bg-[#3B498F h-screen" >

  <div className=" mt-40 rounded-xl h-[440px] bg-[#3B494F] text-white font-medium shadow-black shadow-2xl" >

    <div action="" className="m-4 p-6 flex flex-col gap-5">

      <h1 className="text-[40px]  text-white text-opacity-90">Registration</h1>
      
      <input type="text"  placeholder="Username" className="bg-[#3B494F] px-[9px] py-[4px]  outline-none text-lg border-b-2 border-gray-800 "/>

      <input type="email" placeholder="Email" className="bg-[#3B494F] px-[9px] py-[4px]  outline-none text-lg border-b-2 border-gray-800 "/>

      <input type="password" placeholder="Passward" className="bg-[#3B494F] px-[9px] py-[4px] text-lg outline-none -mb-6 border-b-2 border-gray-800"  />
            <button className=" px-2 py-1 rounded-3xl font-medium text-xl hover:bg-[#4c6bf5] 
                    border-opacity-80 border-b-2 border-gray-800 text-opacity-60 bg-white
                    text-black bg-opacity-60 mt-6" > 
                Sign Up
            </button>


      <p className=" text-white text-opacity-60 text-lg text-left ">
        Already have an account ?
          <Link to="/login" className="text-blue-500 hover:underline pl-4">
            Login
          </Link>
      </p>
    
    </div>
  </div>
  </div>
)
};


export default Signup;