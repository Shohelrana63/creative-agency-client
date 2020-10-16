import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
const ClientCompany = () => {
    return (


        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-md-2 mx-5">
                    <img style={{ width: '140px' }} className=" img-fluid" src={slack} alt="" />
                </div>

                <div className="col-md-2">
                    <img style={{ width: '129px' }} className=" img-fluid" src={google} alt="" />
                </div>

                <div className="col-md-2">
                    <img style={{ width: '99px' }} className="img-fluid" src={uber} alt="" />
                </div>

                <div className="col-md-2">
                    <img style={{ width: '120px' }} className=" img-fluid" src={netflix} alt="" />
                </div>

                <div className="col-md-2">
                    <img style={{ width: '161px' }} className=" img-fluid" src={airbnb} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ClientCompany;