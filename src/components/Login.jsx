function Login ({clicked}){

const handleclick = (buttonName) => {
    // console.log(`Button is ${buttonName}`);
        
    clicked(buttonName);
};




return(
  <div className="mt-40 rounded-xl h-[420px] bg-[#3B494F] text-white font-medium shadow-black shadow-2xl" >

    <div action="" className="m-4 p-6 flex flex-col gap-5">

      <h1 className="text-[40px]  text-white text-opacity-90">Log in</h1>

      <input type="email" id="username" name="username" placeholder="Email" className="bg-[#3B494F] px-[9px] py-[4px]  outline-none text-lg border-b-2 border-gray-800 "/>

      <input type="password" placeholder="Passward" className="bg-[#3B494F] px-[9px] py-[4px] text-lg outline-none -mb-6 border-b-2 border-gray-800"  />

        <p className="mt-4 text-gray-600 text-md text-left">
              <button className="text-blue-500 hover:underline pl-4">Forgot Passward</button>
        </p>
          <button className=" px-2 py-1 rounded-3xl font-medium text-xl hover:bg-[#4c6bf5]  border-opacity-80 
              border-b-2 border-gray-800 text-opacity-60 bg-white text-black bg-opacity-60 mt-2" >
              Log In
          </button>


      <p className=" text-white text-opacity-60 text-lg text-left ">
          Don't have an account ?
            <button className="text-blue-500 hover:underline pl-4"
                onClick={()=>handleclick("Signup")} 
                >Register
            </button>
      </p>
    
    </div>
  </div>

)
};


export default Login;