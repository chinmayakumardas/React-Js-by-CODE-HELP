import React from 'react';
import Header from '../Component/Header';
import Blogs from '../Component/Blogs';
import Pagination from '../Component/Pagination';

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
}

export default Home;