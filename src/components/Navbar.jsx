import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const handleSearchButton = (event) => {
  event.preventDefault();
}


function Navbar() {
  return (
    <div className="fixed overflow-hidden h-16 flex items-center justify-around w-full bg-[#3B494F] text-white 
  rounded-tl-lg rounded-tr-lg border-b-2 border-gray-800" >
      <div className="flex justify-around w-full  items-center " >
        <h3 className="font-medium text-3xl italic  text-[#54aff0]">Social Media</h3>
        <p className="font-medium hover:text-yellow-500 text-lg hover:underline">Home</p>
        <p className="font-medium hover:text-yellow-500 text-lg hover:underline">Contact</p>
        <p className="font-medium hover:text-yellow-500 text-lg hover:underline" >About</p>
      </div>
      <form className=" w-[900px] flex items-center font-medium mt-1" >
        <input className="md:w-full bg-[#3B494F] placeholder-white text-white px-2 py-1 border-2
            border-[#D3D3D3] outline-none rounded-l-lg w-full text-md h-9 "
          type="text"
          placeholder="Search" />
        <button className="text-3xl items-center flex justify-center h-9 rounded-r-lg border-2 w-10 
              border- [#D3D3D3] border-l-0 bg-[#D3D3D3] font-extrabold text-black hover:bg-blue-300"
          onClick={handleSearchButton}>
          <CiSearch />

        </button>
      </form>

      <div className="flex justify-around w-[450px]  items-center" >
        <Link to="/login" className=" border-2 border-transparent px-2 py-1 rounded-md font-medium
                hover:text-black text-xl hover:bg-yellow-200  focus:bg-yellow-500 focus:text-black"
        >Login</Link>
      </div>
    </div>
  )
};


export default Navbar;



