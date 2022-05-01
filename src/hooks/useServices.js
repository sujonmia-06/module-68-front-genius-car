import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = `https://rocky-river-58536.herokuapp.com/service`
        fetch(url)
            .then(response => response.json())
            .then(data => setServices(data));
    }, []);
    return [services, setServices]
};

export default useServices;