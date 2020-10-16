import React, { useEffect } from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import ClientFeedbackDetails from './ClientFeedbackDetails';
import './ClientFeedback.css';
import { useState } from 'react';
const ClientFeedbacks = () => {
    // const feedbackDetails = [
    //     {
    //         img: customer1,
    //         name: 'Nash Patrik',
    //         designationAndCompany: 'CEO, Manpol',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    //     },
    //     {
    //         img: customer2,
    //         name: 'Mirriam Barun',
    //         designationAndCompany: 'CEO, Manpol',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    //     },
    //     {
    //         img: customer3,
    //         name: 'Baria Malone',
    //         designationAndCompany: 'CEO, Manpol',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
    //     }
    // ]
    const [feedBack, setFeedBack] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/seeReview')
            .then(res => res.json())
            .then(data => setFeedBack(data))
    }, [])
    return (
        <div className="container feedback mt-5">
            <h3 style={{ color: ' #171B4E' }} className='font-weight-bold text-center'>
                Clients <span className="text-success"> Feedback</span>
            </h3>
            <div className="card-deck mt-5">
                {
                    feedBack.map(feedback =>
                        <ClientFeedbackDetails feedback={feedback}
                            key={feedback._id}></ClientFeedbackDetails>)
                }
            </div>
        </div>
    );
};

export default ClientFeedbacks;