import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddService.css';
import icon from '../../../images/cloudUpload.png';
import { UserContext } from '../../../App';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [adminInfo, setAdminInfo] = useState({})
    const [file, setFile] = useState(null)
    // console.log(adminInfo);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', adminInfo.title);
        formData.append('description', adminInfo.description);
        fetch('https://secret-reef-66767.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                alert('send data')
            })
    }
    const handleBlur = (e) => {
        const newAdminInfo = { ...adminInfo };
        newAdminInfo[e.target.name] = e.target.value;
        setAdminInfo(newAdminInfo)
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    return (
        <section className="container row">
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-7">
                <div className="col-md-10" >
                    <h5 className="mb-5 pt-4 pb-5 pl-2">Add Services</h5>

                    <form onSubmit={handleSubmit} style={{ position: "absolute", marginRight: '20px', backgroundColor: "#F4FDFB" }}>
                        <div class="form-group d-flex">
                            <div class="form-group">
                                <label for="">Service Title</label>
                                <input onBlur={handleBlur} type="text" name="title" class="form-control" placeholder="Enter title" />
                            </div>
                            <div class="form-group">
                                <h6 >icon</h6>
                                <div className='file-upload'>
                                    <img style={{ width: "20px" }} src={icon} alt="" />
                                    <input onChange={handleFileChange} type="file" />
                                    <p style={{ color: '#009444', margin: '0', marginLeft: '5px' }}>Upload image</p>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="">Description</label>
                            <input onBlur={handleBlur} type="text" name="description" class="form-control" placeholder="Enter Description" />
                        </div>

                        <button style={{ width: '170px', background: '#009444', color: 'white' }}
                            type="submit" className='btn float-right mt-5'>Submit</button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default AddService;