import { Link } from 'react-router-dom';
import React, { useContext, useRef } from 'react';
import { PostContext } from './Store';

function Adpost() { // Destructure onPostSuccess from props
  const { addPost } = useContext(PostContext);
  const titleinput = useRef();
  const bodyinput = useRef();
  const tagsinput = useRef();

  const handlePost = async () => {
    const Title = titleinput.current.value;
    const Body = bodyinput.current.value;
    const Tags = tagsinput.current.value.split(',').map(tag => tag.trim());

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
      titleinput.current.value = "";
      bodyinput.current.value = "";
      tagsinput.current.value = "";

    
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className='flex justify-center align-middle bg-[#394449] h-screen' >
    <div className="mt-48 px-8 py-8 bg-[#394449] w-full  h-1/2">
      <div className="shadow-black shadow-lg p-8 mb-4 rounded-lg pb-8 ">
      <div className='text-4xl text-white italic flex justify-center font-medium mb-4'>What's New?</div>
        <div className="text-white text-xl py-2 font-medium border-b-2 border-blue-300 mb-2">
          <input
            className="px-2 py-2  bg-[#3B494F] bg-opacity-100 w-80 text-black text-3xl rounded-2xl 
            outline-none focus:border-2 focus:border-blue-500  border-2 border-transparent"
            ref={titleinput}
            type="text"
            required
            placeholder="Title"
          />
        </div>

        <div className="text-lg text-blue-100 mb-2">
          <textarea
            className=" max-h-16 w-80 py-2 px-2 bg-[#3B494F] bg-opacity-100 text-xl text-black
            rounded-2xl mt-4 outline-none focus:border-2 focus:border-blue-500  border-2 border-transparent"
            ref={bodyinput}
            type="text"
            required
            placeholder="Content"
          />
        </div>

        <div className="flex justify-between">
          <div className="flex gap-6 mt-2">
            <div className="flex flex-wrap gap-2 mb-2">
              <input
                className="px-2 w-80 bg-[#3B494F] bg-opacity-100 text-xl py-2  text-black rounded-2xl outline-none focus:border-2 focus:border-blue-500  border-2 border-transparent"
                ref={tagsinput}
                type="text"
                required
                placeholder="Tags (Comma separated)"
              />
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <Link to="/"
            className='mt-4 border-none hover:bg-blue-800 py-2 text-xl px-20  text-white 
            rounded-3xl bg-blue-500'
            onClick={handlePost}
          >
            Post
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Adpost;

