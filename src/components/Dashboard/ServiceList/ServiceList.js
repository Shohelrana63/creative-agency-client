import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from "react-router-dom";
import logo from '../../../images/logos/logo.png';
import CustomerServiceList from './CustomerServiceList/CustomerServiceList';
const ServiceList = () => {
    return (
        <section className="container row">
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-7">

                <CustomerServiceList></CustomerServiceList>
            </div>
        </section>
    );
};

export default ServiceList;