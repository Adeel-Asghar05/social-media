import { Link } from 'react-router-dom';

function Side(){

  return(
    <div className="mt-16 fixed flex flex-col w-[250px] h-screen bg-[#3B494F] border-r-2 border-gray-800">
          <Link to= "/" className="flex justify-center text-lg text-white focus:bg-blue-600 focus:text-black 
          py-2 px-2 mx-4 mt-4  rounded-lg font-medium">
          Home
          </Link>
    

      <Link to="/create-post" className="flex justify-center text-lg text-white focus:bg-blue-600 focus:text-black py-1 px-2 mx-4
        mt-4 border-2 border-transparent rounded-lg font-medium ">

        Creat Post
        </Link>
      <Link to="#" className="flex justify-center text-lg text-white focus:bg-blue-600 focus:text-black py-1 px-2 mx-4 
      mt-4 border-2 border-transparent rounded-lg font-medium "
          >
        Reels
          </Link>
    </div>
  )
}

export default Side;