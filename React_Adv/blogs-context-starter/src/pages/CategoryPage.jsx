import React from 'react';
import Header from '../Component/Header';
import { useNavigate, useLocation } from 'react-router-dom';
import Blogs from '../Component/Blogs';
import Pagination from '../Component/Pagination';

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split('/').pop();
  
  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
        <h2>Blogs on <span>{category}</span></h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
}

export default CategoryPage;