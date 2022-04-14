import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center mt-5 text-secondary bg-dark p-4">
            <p><small>&copy; ReactDev || {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;