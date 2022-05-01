import React from 'react';
import google from '../../../Images/social/google.png';
import facebook from '../../../Images/social/facebook.png';
import github from '../../../Images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [token] = useToken(user || user1);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if (loading || loading1) {
        return <Loading />
    }

    if (error || error1) {
        errorElement = <p className="text-danger">Error: {error?.message} {error1?.message}</p>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: '1px' }} className="bg-secondary w-50"></div>
                <p className='mt-3 p-3'>or</p>
                <div style={{ height: '1px' }} className="bg-secondary w-50"></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className="btn btn-info w-75 mx-auto border d-block align-items-center my-2">
                    <img width='32px' src={google} alt="" />
                    <span className="px-2">Google Sign in</span>
                </button>
                <button className="btn btn-info w-75 mx-auto border d-block align-items-center my-2">
                    <img width='32px' src={facebook} alt="" />
                    <span className="px-2">Facebook Sign in</span>
                </button>
                <button onClick={() => signInWithGithub()} className="btn btn-info w-75 mx-auto border d-block align-items-center my-2">
                    <img width='32px' src={github} alt="" />
                    <span className="px-2">Github Sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;