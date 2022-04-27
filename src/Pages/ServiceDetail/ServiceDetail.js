import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId, } = useParams();
    const [service] = useServiceDetail(serviceId);

    return (
        <div style={{ minHeight: "calc(100vh - 147px)" }}>
            <h2>You are about to book: {service.name}</h2>
            <div className="text-center">
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed to checkout</button>
                </Link>
            </div>
        </div >
    );
};

export default ServiceDetail;