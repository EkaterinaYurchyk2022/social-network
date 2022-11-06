import React from 'react';
import load from '../../../assets/images/loader.svg';

const Preload = () => {
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <img src={load} alt="loading"/>
        </div>
    );
};

export default Preload;