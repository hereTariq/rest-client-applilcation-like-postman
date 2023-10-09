import { Button } from 'flowbite-react';
import axios from 'axios';
import { useContext } from 'react';
import { Context } from '../context/context';
import { convertToJSObject } from '../helpers/convertToJSObject';

function Form() {
    const {
        queryParams,
        reqHeaders,
        reqBody,
        method,
        setMethod,
        url,
        setUrl,
        resBody,
        setResBody,
    } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let parsedBody;
        try {
            parsedBody = JSON.parse(reqBody);
        } catch (err) {
            console.log(err.message);
            return alert('please enter valid json');
        }
        let params = convertToJSObject(queryParams);
        let headersObj = convertToJSObject(reqHeaders);
        console.log({
            method,
            url,
            params,
            headersObj,
            parsedBody,
        });
        try {
            const { data } = await axios({
                url,
                method,
                params,
                headers: headersObj,
                data: parsedBody,
            });
            setResBody(JSON.stringify(data, null, 4));

            console.log(data);
        } catch (err) {
            return console.log(err);
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
