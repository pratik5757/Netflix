import React from 'react';
import './NetflixHeader.css';

const NetflixHeader = () => {
  return (
    <>
      <div className='d-flex  p-4 justify-content-between'>
        <div className='brand'>NETFLIX</div>
        <div className='d-flex'>
          <select className='form-select me-2'>
            <option>Language</option>
            <option>English</option>
            <option>हिंदी</option>
          </select>
          <button className='btn btn-danger '>SignIn</button>
        </div>
      </div>
    </>
  );
};
export default NetflixHeader;
