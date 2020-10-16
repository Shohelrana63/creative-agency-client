import React from 'react';
import { Link } from 'react-router-dom';
const ServiceDetails = ({ service }) => {

    return (
        <div className="card shadow-sm mt-5">
            <Link style={{ textDecoration: 'none' }}
                to='/addOrder'>
                <div className="card-header d-flex">
                    {/* <img className="mx-auto" src={img} alt="" width="74" /> */}
                    <img style={{ width: "74px" }} className=" mx-auto
                card-img-top align-self-center" src={`data:image/jpeg;base64,
                ${service.image.img}`} />
                </div>
                <div className="card-body">
                    <h5 style={{ fontSize: "20px", fontWeight: "600px", color: "black" }} className="text-center">{service.title}</h5>
                    <p className="card-text text-secondary mt-4 text-center">
                        {service.description}</p>
                </div>
            </Link>

        </div>
    );
};

export default ServiceDetails;