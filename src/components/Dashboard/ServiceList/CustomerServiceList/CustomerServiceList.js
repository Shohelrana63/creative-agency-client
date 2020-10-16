import React, { useEffect, useState } from 'react';
import service1 from '../../../../images/icons/service1.png';
import service2 from '../../../../images/icons/service2.png';
import service3 from '../../../../images/icons/service3.png';
import CustomerServiceDetails from './CustomerServiceDetails';

const CustomerServiceList = () => {
    // const serviceData = [
    //     {
    //         img: service1,
    //         title: "Web & Mobile design",
    //         description: "We craft stunnig and amazing web UI, using  a well drrafted UX to fit your product.",
    //         status: 'pending'
    //     },
    //     {
    //         img: service2,
    //         title: "Graphic design",
    //         description: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
    //         status: 'pending'
    //     }
    // ]
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
            <h4 className='mt-4 ml-5'>Service List</h4>
            <div className="card-deck mt-5">
                {
                    orders.map(serviceOrder => <CustomerServiceDetails
                        serviceOrder={serviceOrder}
                    >
                        key={orders._id}
                    </CustomerServiceDetails>)
                }
            </div>

        </div >
    );
};

export default CustomerServiceList;