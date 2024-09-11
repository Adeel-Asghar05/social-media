
import React, { useContext, useRef } from 'react';
import { PostContext } from './Store';

function Adpost({ onPostSuccess }) { // Destructure onPostSuccess from props
  const { addPost } = useContext(PostContext);
  const title = useRef();
  const body = useRef();
  const tags = useRef();

  const handlePost = async () => {
    const Title = title.current.value;
    const Body = body.current.value;
    const Tags = tags.current.value.split(',').map(tag => tag.trim());
    if (!Title || !Body || Tags.length === 0 ) {
      console.log("All fields are required ");
      return;
    }

    const newPost = {
      title: Title,
      body: Body,
      tags: Tags,
      userId : Date.now(),
    };

    try {
      await addPost(newPost);

      // Clear the form fields
      title.current.value = "";
      body.current.value = "";
      tags.current.value = "";

      // Notify parent of successful post
      if (typeof onPostSuccess === 'function') {
        onPostSuccess(); // Call the callback to indicate success
      }
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className="mt-20 px-8 py-8">
      <div className="shadow-black shadow-lg p-8 mb-4 rounded-lg w-80 h-72">
        <div className="text-white text-2xl py-2 font-medium border-b-2 border-blue-300 mb-2">
          <input
            className="px-1 bg-[#3B494F] bg-opacity-100 w-40 text-black rounded-lg outline-none"
            ref={title}
            type="text"
            placeholder="Title"
          />
        </div>

        <div className="text-lg text-blue-100 mb-2">
          <textarea
            className="px-1 w-60 bg-[#3B494F] bg-opacity-100 text-black rounded-lg mt-4 outline-none"
            ref={body}
            type="text"
            placeholder="Content"
          />
        </div>

        <div className="flex justify-between">
          <div className="flex gap-6 mt-2">
            <div className="flex flex-wrap gap-2 mb-2">
              <input
                className="px-1 w-60 bg-[#3B494F] bg-opacity-100 py-1 text-black rounded-lg outline-none"
                ref={tags}
                type="text"
                placeholder="Tags (Comma separated)"
              />
            </div>
          </div>
        </div>

        <div className='relative'>
          <button
            className='absolute right-0 mt-2 border-none hover:bg-blue-800 py-1 px-4 text-lg text-white rounded-lg bg-blue-500'
            onClick={handlePost}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Adpost;

