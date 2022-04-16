import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center text-secondary bg-dark p-4">
            <p><small>&copy; ReactDev || {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;