import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


    }

    return (
        <div className="register-form">
            <h2 style={{ textAlign: "center", color: "#0D6EFD" }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="name" placeholder="Your Name" required />

                <input type="email" name="email" id="email" placeholder="Your Email" required />

                <input type="password" name="password" id="password" placeholder="Your Password" required />

                <input className="btn btn-primary" type="submit" value="Register" />
            </form>
            <p>Already have and account? <Link to='/login' className="text-primary pe-auto text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;