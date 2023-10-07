import { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [method, setMethod] = useState('GET');
    const [url, setUrl] = useState('');
    const [queryParams, setQueryParams] = useState([{ key: '', value: '' }]);
    const [headers, setHeaders] = useState([{ key: '', value: '' }]);
    const [body, setBody] = useState('{\n\n}');

    return (
        <Context.Provider
            value={{
                method,
                setMethod,
                url,
                setUrl,
                queryParams,
                setQueryParams,
                headers,
                setHeaders,
                body,
                setBody,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
