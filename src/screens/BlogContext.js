import createDataContext from "./createDataContext";

// const BlogContext = React.createContext();

const blog_reducer = (state, action) => {
  switch (action.type) {
    case "add_post":
      return [
        ...state,
        {
          id: Math.random() * 99999,
          //   title: `${state.length + 1}`
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete_post":
      return state.filter((post) => post.id !== action.payload);

    case "edit_post":
        return state.map((post) => {
            return post.id === action.payload.id ? action.payload : post;
        });

    default:
      return state;
  }
};

const addpost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_post", payload: { title: title, content: content } });
    if (callback) {
        callback();
    }
  };
};

const deletepost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_post", payload: id });
  };
};

const editpost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: "edit_post",
      payload: { id: id, title: title, content: content },
    });
    if (callback) {
        callback();
    }
    
  };
};

export const { Context, Provider } = createDataContext(
  blog_reducer,
  { addpost, deletepost, editpost },
  [{ title: "test", content: "content", id: 1 }]
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
