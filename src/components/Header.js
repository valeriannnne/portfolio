import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='/portfolio'>
            <img src={Logo}/>
          </a>

          <a href='/portfolio'>
          <button className='btn btn-sm'>Work with me</button>
          </a>

        </div>
      </div>
    </header>;
};

export default Header;
