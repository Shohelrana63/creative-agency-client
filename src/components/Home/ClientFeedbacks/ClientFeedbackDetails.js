import React from 'react';

const ClientFeedbackDetails = ({ feedback }) => {

    return (

        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                {/* <img className="mx-3" src={feedback.img} alt="" width="60" /> */}
                <img style={{ width: "60px" }} className="mx-3 img-fluid"
                    src={`data:image/jpeg;base64,${feedback.img.img}`} />
                <div>
                    <h6>{feedback.name}</h6>
                    <p className="m-0">{feedback.designation}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary mt-4">{feedback.description}</p>
            </div>

        </div>

    );
};

export default ClientFeedbackDetails;