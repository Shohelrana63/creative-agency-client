import React from 'react';

const CustomerServiceDetails = ({ serviceOrder }) => {

    return (
        <div className="card shadow-sm mt-5">
            <div className="card-header d-flex">
                {/* <img className="mx-auto"
                
                 src={img} alt="" width="74" /> */}
                <img className="img" src={`data:image/png;base64,${serviceOrder.image.img}`} />
                <p style={{ color: '#009444' }}>{serviceOrder.status}</p>
            </div>
            <div className="card-body">
                <h5 className="text-center">{serviceOrder.title}</h5>
                <p className="card-text text-secondary mt-4 text-center">{serviceOrder.description}</p>
            </div>
        </div>
    );
};

export default CustomerServiceDetails;