import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from '../../images/logos/logo.png';
import googleLogo from '../../images/logos/googleLogo.png';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const googleSignInHandler = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {

            const { displayName, email } = result.user;
            const signInUser = { name: displayName, email };
            // console.log(signinUser);
            setLoggedInUser(signInUser);
            history.replace(from);

        }).catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage);

        });

    }
    return (
        <div>
            <div className="logo mt-5">
                <Link to='/'>
                    <img style={{ height: "50px" }} src={logo} alt="" />
                </Link>
            </div>
            <div className='mt-5 login-form' >
                <h3 className='text-center' style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    Login with
                </h3>
                <div onClick={googleSignInHandler} style={{ cursor: "pointer" }} className='d-flex google-form'>
                    <img style={{ width: '30px', height: '30px' }} src={googleLogo} alt="" />
                    <p className='ml-5'>Continue with Google</p>
                </div>
                <p className="text-center mt-3">Don't have an account?
                 <a href="#">Create an account</a></p>
            </div>
        </div>
    );
};

export default Login;