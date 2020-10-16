import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';


const AdminServiceList = () => {
    const [orders, setOrders] = useState([])
    console.log(orders);
    useEffect(() => {
        fetch('http://localhost:5000/totalorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>

            </div>
            <div className="col-md-9">
                <h3>service list</h3>
                <div className="">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Email ID</th>
                                <th className="text-secondary" scope="col">Service</th>
                                <th className="text-secondary" scope="col">Project Details</th>
                                <th className="text-secondary" scope="col">Statue</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order =>
                                    <tr>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.service}</td>
                                        <td>{order.description}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AdminServiceList;