import { useContext } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { LuEye } from 'react-icons/lu';
import Spinner from './Spinner';
import { PostContext } from './Store';

function Home() {
  const { posts, fetching } = useContext(PostContext);

  return (
    <>
      {fetching && <Spinner />}
      <div className="w-[600px] mt-20 rounded-2xl -ml-20">
        <div className="my-8 mx-12 gap-4 flex flex-col">
          {posts.map(item => (
            <div key={item.id} className="shadow-black shadow-lg p-4 mb-4 rounded-lg">
              <div className="text-white text-2xl py-2 font-medium border-b-2 border-blue-300 mb-2">
                {item.title}
              </div>

              <div className="text-lg text-blue-100 mb-2">
                {item.body}
              </div>

              <div className="flex flex-wrap gap-2 mb-2">
                {item.tags.map((tag, index) => (
                  <button key={tag} className="bg-blue-500 text-white px-3 py-1 rounded-md">
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

                <div className="text-gray-400 flex gap-2 mt-2">
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
}

export default Home;
