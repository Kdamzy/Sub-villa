import React from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom'
import carts from '../../assets/cartel.svg';
import file from '../../assets/file.svg';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} styles={{textDecoration:'none'}}>
      <div className='sidebar-item'>
          <img src={carts} alt='' />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={'/listproduct'} styles={{textDecoration:'none'}}>
      <div className='sidebar-item'>
          <img src={file} alt='' />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
