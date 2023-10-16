import { Button } from 'flowbite-react';
import { useContext } from 'react';
import { Context } from '../context/context';
import makeRequest from '../helpers/makeRequest';

function Form() {
    const {
        url,
        method,
        queryParams,
        reqHeaders,
        setMethod,
        setUrl,
        setResBody,
        reqBody,
    } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await makeRequest(
            url,
            method,
            queryParams,
            reqHeaders,
            reqBody
        );
        // console.log(response);
        setResBody(response);
    };

    return (
        <form onSubmit={handleSubmit} className="flex">
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
