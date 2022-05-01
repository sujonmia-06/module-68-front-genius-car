import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        event.preventDefault();
        console.log(data);
        const url = `https://rocky-river-58536.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                toast('Service added successfully')
                event.target.reset()
                console.log(result)
            });
    };
    return (
        <div
            style={{ minHeight: "calc(100vh - 147px)" }}
            className="w-50 mx-auto p-5"
        >
            <h2>Please add a service</h2>
            <form
                className='d-flex flex-column'
                onSubmit={handleSubmit(onSubmit)}>
                <input className="my-2" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                <textarea className="my-2" placeholder="Description" {...register("description",)} />
                <input className="my-2" placeholder="Price" type="number" {...register("price",)} />
                <input className="my-2" placeholder="Photo URL" type="text" {...register("img",)} />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;