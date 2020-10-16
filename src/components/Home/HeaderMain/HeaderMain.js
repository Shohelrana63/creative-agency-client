import React from 'react';
import frame from '../../../images/logos/Frame.png';
const HeaderMain = () => {
    return (
        <main style={{ height: '546px' }} className=" row d-flex align-items-center py-5">
            <div className="col-md-4 offset-md-1 mt-5">
                <h1 style={{ color: '#111430' }}>Let's Grow Your <br /> Brand To The <br /> Next Level</h1>
                <p className="mt-5 mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, inventore atque dicta similique quisquam et!</p>
                <button style={{ width: '170px', backgroundColor: '#111430', color: 'white' }} className="btn">Hire us</button>
            </div>
            <div className="col-md-6">
                <img style={{ width: '624px' }} className="img-fluid" src={frame} alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;