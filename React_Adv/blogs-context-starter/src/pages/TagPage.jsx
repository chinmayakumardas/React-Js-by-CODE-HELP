import React from 'react';
import Header from '../Component/Header';
import { useNavigate, useLocation } from 'react-router-dom';

const TagPage = () => {
  const location = useLocation();
  const tag = location.pathname.split('/').pop();
  const navigation = useNavigate();
  
  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>back</button>
        <h2>Blogs tagged <span>#{tag}</span></h2>
      </div>
    </div>
  );
}

export default TagPage;