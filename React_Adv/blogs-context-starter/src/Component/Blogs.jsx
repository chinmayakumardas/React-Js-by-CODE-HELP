import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="mx-5 my-5 w-11/12 py-3 h-screen max-w-[530px] flex justify-center items-center">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Blogs found</p>
        </div>
      ) : (
        <div>
          {posts.map((post) => (
            <BlogDetails key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;