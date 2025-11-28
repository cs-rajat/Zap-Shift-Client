import React from 'react';
import LogoImg from '../../assets/logo.png';
const Logo = () => {
    return (
        <div className='flex  items-end'>
            <img src={LogoImg} alt="Logo" />
            <span className="text-3xl font-bold -ml-2">zapShift</span>
        </div>
    );
};

export default Logo;