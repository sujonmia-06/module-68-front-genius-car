import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container d-flex justify-content-center align-items-center">
            <div className="not-found">
                <h2>404 | Page Not Found</h2>
                <p>If you manage to came to this page that means you are trying to do something suspicious.</p>
                <h3>I'm Calling policemen!!</h3>
            </div>
        </div>
    );
};

export default NotFound;