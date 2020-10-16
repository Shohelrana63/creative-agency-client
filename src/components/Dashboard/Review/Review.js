import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import icon from '../../../images/cloudUpload.png';
import './Review.css';
import { UserContext } from '../../../App';
const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [review, setReview] = useState({});
    const [file, setFile] = useState(null);
    console.log(review);
    const handleBlur = (e) => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', review.name);
        formData.append('designationAndCompany', review.designationAndCompany);
        formData.append('description', review.description);
        fetch('http://localhost:5000/review', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                alert("Review data has been send")
            })

    }
    return (
        <section className="container row">
            <div className="col-md-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-7 ">
                <div className="col-md-10 " >
                    <div className="d-flex justify-content-between">
                        <h5 className="mb-5 pt-4 pb-5 pl-2">Order</h5>
                        <h6 style={{ marginTop: '15px' }}>{loggedInUser.name}</h6>
                    </div>
                    {/* <h5 className="mb-5 pt-4 pb-5 pl-2">Order</h5> */}

                    <form onSubmit={handleReviewSubmit} style={{ position: "absolute", marginRight: '20px', backgroundColor: "#F4FDFB" }}>
                        <div class="form-group d-flex">
                            <div class="form-group">

                                <input onBlur={handleBlur} type="text" name="name" class="form-control" placeholder="Your name" />
                            </div>
                            <div class="form-group">
                                <h6 >Image</h6>
                                <div className='file-upload'>
                                    <img style={{ width: "20px" }} src={icon} alt="" />
                                    <input onChange={handleFileChange} type="file" />
                                    <p style={{ color: '#009444', margin: '0', marginLeft: '5px' }}>Upload image</p>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">

                            <input onBlur={handleBlur} type="text" name="designationAndCompany" class="form-control" placeholder="Company’s name.Designation" />
                        </div>

                        <div className="form-group">
                            <input onBlur={handleBlur} name="description" className="form-control" placeholder="Description">

                            </input>
                        </div>

                        <button style={{ width: '170px', backgroundColor: '#111430', color: 'white' }} type="submit" class="btn">Submit</button>

                    </form>
                </div>


            </div>
        </section >
    );
};

export default Review;