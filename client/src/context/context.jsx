import { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [method, setMethod] = useState('GET');
    const [url, setUrl] = useState('');
    const [queryParams, setQueryParams] = useState([{ key: '', value: '' }]);
    const [reqHeaders, setReqHeaders] = useState([{ key: '', value: '' }]);
    const [reqBody, setReqBody] = useState('{\n\t\n}');
    const [resBody, setResBody] = useState(null);
    const [resHeaders, setResHeaders] = useState([{ key: '', value: '' }]);

    return (
        <Context.Provider
            value={{
                method,
                setMethod,
                url,
                setUrl,
                queryParams,
                setQueryParams,
                reqHeaders,
                setReqHeaders,
                reqBody,
                setReqBody,
                resBody,
                setResBody,
                resHeaders,
                setResHeaders,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
