
import { useState ,useEffect} from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { LuEye } from "react-icons/lu";
import Spinner from "./Spinner";

  function Home(){

    const [fetching , setfetching] =useState(false);
    const [posts, setPosts] = useState([]);

useEffect(() => {
  const controler =new AbortController();
  const {signal} = controler
  setfetching(true);
  // Fetch data on component mount
  fetch('https://dummyjson.com/posts ' , {signal})
    .then(res => res.json())
    .then(data => {
      // Map the fetched data to the desired structure
      const postsArray = data.posts.map(post => ({
        title: post.title,
        body: post.body,
        id: post.id,
        tags: post.tags,
        views: post.views,
        reactions: post.reactions,
      }));
      // console.log("array data", postsArray)
      setPosts(postsArray); // Update state with the fetched data
      setfetching(false);

    })
    .catch(error => {
      
      if (error.name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        console.error('Error fetching data:', error);
      }
    
    });
    return () => {
      console.log('Cleaning up useEffect');
      controler.abort();
    };
  
}, []);

  return (
    <>
    {fetching && <Spinner/>}
    <div className="  w-[600px] mt-20 rounded-2xl -ml-20 ">
      <div className=" my-8 mx-12 gap-4 flex flex-col ">
        {posts.map(item => (
          <div key={item.id} className="  shadow-black shadow-lg p-4 mb-4 rounded-lg">
            <div className=" text-white text-2xl py-2 font-medium border-b-2 border-blue-300 mb-2">
              {item.title}
            </div>

            <div className="text-lg text-blue-100 mb-2">
              {item.body}
            </div>

            <div className="flex flex-wrap gap-2 mb-2">
              {item.tags.map((tag, index) => (
                <button key={index} className="bg-blue-500 text-white px-3 py-1 rounded-md">
                  {tag}
                </button>
              ))}

            </div>

            <div className="flex justify-between">
              <div className="flex gap-6 mt-2">

              <div className="text-green-500 flex gap-2">
              <AiOutlineLike className="text-2xl" /> {item.reactions.likes || 0}
              </div>
              <div className="text-red-500 flex gap-2">
              <BiDislike className="text-2xl" /> {item.reactions.dislikes || 0}
              </div>

              </div>

              <div className="text-gray-400  flex gap-2 mt-2">
              <LuEye className="mt-[1px] text-2xl" />
              {item.views}
            </div>

            </div>
          
          </div>
        ))}
      </div>
    </div>
    </>
  );

};

export default Home;