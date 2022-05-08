import createDataContext from "./createDataContext";

// const BlogContext = React.createContext();

const blog_reducer = (state, action) => {
  switch (action.type) {
    case "add_post":
      return [
        ...state,
        { id: Math.random() * 99999, 
          title: `${state.length + 1}` 
        },
      ];
    case "delete_post":
        return state.filter((post) => post.id !== action.payload);

    default:
      return state;
  }
};

const addpost = (dispatch) => {
  return () => {
    dispatch({ type: "add_post" });
    console.log("add_post");
  };
};

const deletepost = (dispatch) => {
    return (id) => {
        dispatch({type: "delete_post", payload: id});
    }
}

export const { Context, Provider } = createDataContext(
  blog_reducer,
  { addpost, deletepost },
  []
);

// export const BlogProvider = ({ children }) => {
//   // const blogposts = [
//   //     {title: "no1"},
//   //     {title: "no2"}
//   // ];

//   const [blogposts, dispatch] = useReducer(blog_reducer, []);

//   const addpost = () => {
//     dispatch({type: 'add_post'});
//   };

//   return (
//     <BlogContext.Provider value={{ data: blogposts, addpost }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export default BlogContext;
