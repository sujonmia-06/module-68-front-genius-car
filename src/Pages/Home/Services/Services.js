import React, { useState, useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = `https://rocky-river-58536.herokuapp.com/service`
        fetch(url)
            .then(response => response.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <h1 className="services-title mt-5 text-primary text-center">Our Services</h1>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;