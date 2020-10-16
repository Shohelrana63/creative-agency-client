import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';

const MakeAdmin = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const [admin, setAdmin] = useState({})
    const handleBlur = (e) => {
        const newAdmin = { ...admin };
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://secret-reef-66767.herokuapp.com/setAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admin)
        })
    }
    return (
        <section className="container row">
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-5 ">
                <div className="col-md-10 " >
                    <h5 className="mb-5 pt-4 pb-5 pl-2">Add Services</h5>
                    <form
                        onSubmit={handleSubmit}
                        style={{ position: "absolute", marginRight: '20px', backgroundColor: "#F4FDFB" }}>

                        <div class="form-group">
                            <label for="">Email</label>
                            <input
                                onBlur={handleBlur}
                                type="text"
                                name="email" class="form-control" placeholder="jon@gmail.com" />
                        </div>

                        <button style={{ width: '108px', background: '#009444', color: 'white' }}
                            type="submit" className=' btn '>Submit</button>

                    </form>
                </div>
            </div>


        </section>
    );
};



export default MakeAdmin;