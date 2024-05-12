import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { baseUrl } from "../baseUrl";
import Header from "../Component/Header";
import BlogDetailsPage from "../Component/BlogDetailsPage";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [error, setError] = useState(null);
  const { loading, setLoading } = useContext(AppContext);
  const location = useLocation();
  const navigation = useNavigate();

  const blogId = location.pathname.split("/").pop();

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${baseUrl}?blogId=${blogId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await res.json();
        setBlog(data.blog);
        setRelatedBlogs(data.relatedBlogs);
        setError(null);
      } catch (err) {
        console.error("Error fetching blog data:", err);
        setError(err.message);
        setBlog(null);
        setRelatedBlogs([]);
      }
      setLoading(false);
    };

    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [blogId, setLoading]);

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <div>
            <p>Error: {error}</p>
          </div>
        ) : blog ? (
          <div>
            <BlogDetailsPage post={blog} />
            <h2>Related blogs</h2>
            {relatedBlogs.map((post, index) => (
              <div key={index}>
                <BlogDetailsPage post={post} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <p>No Blog Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;