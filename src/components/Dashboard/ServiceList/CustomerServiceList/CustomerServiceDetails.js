import React from 'react';

const CustomerServiceDetails = ({ serviceOrder }) => {

    return (
        <div className="col-md-4 d-flex justify-content-center">
            <div style={{ width: "18rem" }} className="card shadow-sm mt-5">
                <div className="card-header d-flex">
                    {/* <img className="mx-auto"
                
                 src={img} alt="" width="74" /> */}
                    <img className="img img-fluid" src={`data:image/png;base64,${serviceOrder.image.img}`} />
                    <p style={{ color: '#009444' }}>{serviceOrder.status}</p>
                </div>
                <div className="card-body">
                    <h5 className="">{serviceOrder.name}</h5>
                    <p className="card-text text-secondary mt-4">{serviceOrder.description}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerServiceDetails;