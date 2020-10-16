import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ServiceDetails.css';
const ServiceDetails = ({ service }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleService = (service) => {
        console.log(service);
        const fetchService = { ...loggedInUser, service };
        setLoggedInUser(fetchService);
    }

    return (
        <div className="col-md-4 d-flex justify-content-center">
            <div style={{ width: "18rem" }} className="card animation shadow-sm mt-5">
                <Link onClick={() => handleService(service)} style={{ textDecoration: 'none' }}
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
        </div>
    );
};

export default ServiceDetails;