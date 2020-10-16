import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';


const AdminServiceList = () => {
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

                    </table>
                </div>
            </div>

        </div>
    );
};

export default AdminServiceList;