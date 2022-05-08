import React, {useState} from "react";


const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  // const blogposts = [
  //     {title: "no1"},
  //     {title: "no2"}
  // ];

  const [blogposts, setBlogposts] = useState([]);

  const addpost = () => {
    setBlogposts([...blogposts, { title: `${blogposts.length + 1}` }]);
  };

  return (
    <BlogContext.Provider value={{ data: blogposts, addpost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
