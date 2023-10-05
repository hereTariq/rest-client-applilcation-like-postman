import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import axios from 'axios';

function Form() {
    const [method, setMethod] = useState('GET');
    const [url, setUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ method, url });
        try {
            const { data } = await axios.get(url);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center">
            <select
                className=" p-2 bg-gray-100 border border-gray-300 rounded-l-md focus:outline-none"
                value={method}
                onChange={(e) => setMethod(e.target.value)}
            >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="PATCH">PATCH</option>
                <option value="DELETE">DELETE</option>
            </select>

            <input
                type="url"
                className="w-full p-2 bg-gray-100 border border-gray-300 focus:outline-none"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter request url"
            />
            <Button color="blue" className="w-30 rounded-l-none" type="submit">
                Send
            </Button>
        </form>
    );
}

export default Form;