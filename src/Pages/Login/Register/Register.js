import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    if (loading || updating) {
        return <Loading />
    }

    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        console.log(user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (
        <div className="register-form">
            <h2 style={{ textAlign: "center", color: "#0D6EFD" }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="name" placeholder="Your Name" required />

                <input type="email" name="email" id="email" placeholder="Your Email" required />

                <input type="password" name="password" id="password" placeholder="Your Password" required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? "ps-2 text-success" : "ps-2 text-danger"} htmlFor="terms">Accept Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? 'text-success' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions</label>

                <input
                    disabled={!agree}
                    className="btn btn-primary w-50 d-block mx-auto my-2"
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className="text-primary pe-auto text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin />
        </div>
    );
};

export default Register;