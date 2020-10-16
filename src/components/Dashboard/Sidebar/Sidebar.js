import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTaxi, faCommentAlt, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="mt-4">
            <Link to='/'>
                <img style={{ height: '50px' }} src={logo} alt="" />
            </Link>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>



                <ul style={{ marginTop: '20px' }} className="list-unstyled">

                    {isAdmin ?
                        <div>
                            <li>
                                <Link to="/adminservicelist" style={{ color: "black" }} >
                                    <FontAwesomeIcon icon={faTaxi} /> <span>Service list</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/addservice" style={{ color: "black" }} >
                                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/makeadmin" style={{ color: "black" }} >
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                                </Link>
                            </li>
                        </div>

                        :
                        <div>
                            <li>
                                <Link to="/addOrder" style={{ color: "black" }} >
                                    <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicelist" style={{ color: "black" }} >
                                    <FontAwesomeIcon icon={faTaxi} /> <span>Service list</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/review" style={{ color: "black" }} >
                                    <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                                </Link>
                            </li>
                        </div>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;