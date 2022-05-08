import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
    const blogposts = [
        {title: "no1"},
        {title: "no2"}
    ];

    return <BlogContext.Provider value = {blogposts}>
        {children}
    </BlogContext.Provider>
}

export default BlogContext;