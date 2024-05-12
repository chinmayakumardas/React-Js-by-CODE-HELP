import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const Pagination = () => {
  const { page, totalPages, handlePageChange } = useContext(AppContext);
  
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center sm:justify-around fixed bottom-0 w-full bg-white'>
      {page > 1 && (
        <button className='bg-red-500 text-white py-2 px-4 rounded-md mb-2 sm:mb-0' onClick={() => handlePageChange(page - 1)}>Prev</button>
      )}
      <p className='mb-2 sm:mb-0'>
        Page {page} of {totalPages}
      </p>
      {page < totalPages && (
        <button className='bg-red-500 text-white py-2 px-4 rounded-md' onClick={() => handlePageChange(page + 1)}>Next</button>
      )}
    </div>
  );
}

export default Pagination;