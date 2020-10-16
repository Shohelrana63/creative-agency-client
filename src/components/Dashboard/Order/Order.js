import React, { useContext, useState } from 'react';
import icon from '../../../images/cloudUpload.png';
import './Order.css';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';
const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newOrder = { ...order };
        newOrder[e.target.name] = e.target.value;
        setOrder(newOrder);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = () => {
        const formData = new FormData()
        console.log(order);
        formData.append('file', file);
        formData.append('name', order.name);
        formData.append('email', order.email);
        formData.append('service', order.service);
        formData.append('description', order.description);
        formData.append('price', order.price);

        fetch('https://secret-reef-66767.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (

        <section className="container row">
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-7">
                <div className="col-md-10" >
                    <div className="d-flex justify-content-between">
                        <h5 className="mb-5 pt-4 pb-5 pl-2">Order</h5>
                        <h6 style={{ marginTop: '15px' }}>{loggedInUser.name}</h6>
                    </div>

                    <form onSubmit={handleSubmit}
                        style={{ position: "absolute", marginRight: '20px', backgroundColor: "#F4FDFB" }}>
                        <div class="form-group">
                            <input type="text"
                                onBlur={handleBlur}
                                class="form-control" name="name" placeholder="Your name / company's name" />
                        </div>
                        <div class="form-group">
                            {loggedInUser && <input type="email"
                                onBlur={handleBlur}
                                class="form-control" name="email"
                                value={loggedInUser.email}
                                placeholder="Your email address" />}
                        </div>
                        <div class="form-group">
                            <input type="text"
                                onBlur={handleBlur}
                                class="form-control" name="service" placeholder="Graphic Design" />
                        </div>
                        <div class="form-group">
                            <input type="text"
                                onBlur={handleBlur}
                                class="form-control" name="description" placeholder="Projects Detail" />
                        </div>
                        <div className="form-group row">
                            <div className="col-10">
                                <input onBlur={handleBlur} type="text" name="price" className="form-control form-control-lg" placeholder="Price" />
                            </div>
                            <div className="col-2">
                                <div className='file-upload form-control'>
                                    <img style={{ width: "20px" }} src={icon} alt="" />
                                    <input onChange={handleFileChange} name="file" id="file" type="file" />
                                    <p style={{ color: '#009444', margin: '0', marginLeft: '5px' }}>Upload image</p>
                                </div>
                            </div>
                        </div>
                        <button style={{ width: '170px', backgroundColor: '#111430', color: 'white' }} type="submit" class="btn">Send</button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Order;