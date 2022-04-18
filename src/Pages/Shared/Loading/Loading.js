import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '400px', minHeight: "calc(100vh - 147px)" }} className="w-100 d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;