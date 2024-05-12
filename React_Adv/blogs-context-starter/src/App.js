import React, { useContext, useEffect } from 'react';
import { Routes, Route, useLocation, useSearchParams } from 'react-router-dom';
import { AppContext } from './Context/AppContext';
import './App.css';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get('page') || 1;
    const tag = location.pathname.includes('tags') ? location.pathname.split('/').pop().replaceAll('-', ' ') : null;
    const category = location.pathname.includes('categories') ? location.pathname.split('/').pop().replaceAll('-', ' ') : null;

    fetchBlogPosts(Number(page), tag, category);
  }, [fetchBlogPosts, location.pathname, searchParams]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}