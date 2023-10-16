import axios from 'axios';
import { convertToJSObject } from './convertToJSObject';

export default async function makeRequest(
    url,
    method,
    params,
    headers,
    reqBody
) {
    let data;
    try {
        data = JSON.parse(reqBody);
    } catch (err) {
        console.log(err.message);
        return alert('please enter valid json');
    }

    const startTime = new Date().getTime();
    let response;
    try {
        response = await axios({
            url,
            method,
            params: convertToJSObject(params),
            headers: convertToJSObject(headers),
            data,
        });
    } catch (err) {
        console.log(err);
        response = err.response;
        if (err.code === 'ERR_NETWORK') {
            response = err.config;
        }
    }
    // const contentType = response.headers['Content-Type'];
    // const accept = response.headers['Accept'];
    // console.log({ contentType, accept });
    const endTime = new Date().getTime();
    let time = endTime - startTime + ' ms';
    let size = JSON.stringify(response?.headers)?.length || 0;

    let result = {
        time,
        size: size + ' B',
        status: response?.status || '0',
        data: response?.data,
    };

    return result;
}
