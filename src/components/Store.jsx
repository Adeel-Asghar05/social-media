import React, { createContext, useState, useEffect } from 'react';

// Create Context with default values
export const PostContext = createContext({
  posts: [],
  fetching: false,
  addPost : ()=>{},
});

// Create a provider component
export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setFetching(true);

    fetch('https://dummyjson.com/posts', { signal })
      .then(res => res.json())
      .then(data => {
        const postsArray = data.posts.map(post => ({
          title: post.title,
          body: post.body,
          id: post.id,
          tags: post.tags,
          views: post.views,
          reactions: post.reactions,
        }));
        setPosts(postsArray);
        setFetching(false);
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error('Error fetching data:', error);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);



  const addPost = async (newPost) =>{
    try {
      const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost),
      })
      const data = await response.json();
      setPosts(prevPosts =>[
        {
          ...newPost,
          reactions: { likes: "09", dislikes: "09" },  // Initialize reactions
          views: "79", 
          id:Date.now() // Initialize views
          
        },
        ...prevPosts ,     
      ]);

      // .then(res => res.json())
      // .then(console.log);
    } catch (error){
      console.error ("error adding post ", error);
    }
  };

  return (
    <PostContext.Provider value={{ posts, fetching ,addPost }}>
      {children}
    </PostContext.Provider>
  );
};
