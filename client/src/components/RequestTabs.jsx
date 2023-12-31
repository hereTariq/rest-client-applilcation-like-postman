'use client';
import KeyValueInputs from './KeyValueInputs';
import { useContext } from 'react';
import { Context } from '../context/context';
import JSONEditor from './JSONEditor';
import './style.css';

import { Tabs, Button } from 'flowbite-react';

export default function RequestTabs() {
    const {
        queryParams,
        setQueryParams,
        reqHeaders,
        setReqHeaders,
        reqBody,
        setReqBody,
        resBody,
    } = useContext(Context);

    // add new inputs row to the param
    const handleAddQueryParam = (e) => {
        setQueryParams([...queryParams, { key: '', value: '' }]);
    };

    // add new inputs row to the header
    const handleAddHeaders = (e) => {
        setReqHeaders([...reqHeaders, { key: '', value: '' }]);
    };

    // handling the values in params
    const handleQueryParamChange = (index, field, value) => {
        const updatedParams = [...queryParams];
        updatedParams[index][field] = value;
        setQueryParams(updatedParams);
    };
    //handling the values in headers
    const handleHeadersChange = (index, field, value) => {
        const updatedHeaders = [...reqHeaders];
        updatedHeaders[index][field] = value;
        setReqHeaders(updatedHeaders);
    };

    return (
        <main>
            <Tabs.Group style="underline" className="">
                <Tabs.Item active title="Query">
                    <div className="flex flex-col gap-4">
                        <p>Query Parameters</p>
                        <Button
                            color="gray"
                            className="w-14 focus:ring-0 focus:bg-transparent"
                            onClick={handleAddQueryParam}
                        >
                            Add
                        </Button>
                        {queryParams.map((param, index) => {
                            return (
                                <KeyValueInputs
                                    key={index}
                                    onInputChange={(field, value) =>
                                        handleQueryParamChange(
                                            index,
                                            field,
                                            value
                                        )
                                    }
                                />
                            );
                        })}
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Headers">
                    <div className="flex flex-col gap-4">
                        <p>Headers</p>
                        <Button
                            color="gray"
                            className="w-14 focus:ring-0 focus:bg-transparent"
                            onClick={handleAddHeaders}
                        >
                            Add
                        </Button>
                        {reqHeaders.map((headers, index) => {
                            return (
                                <KeyValueInputs
                                    key={index}
                                    onInputChange={(field, value) =>
                                        handleHeadersChange(index, field, value)
                                    }
                                />
                            );
                        })}
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Body">
                    <div className="space-y-4">
                        <p>JSON</p>
                        <JSONEditor
                            editable={true}
                            body={reqBody}
                            setBody={setReqBody}
                        />
                    </div>
                </Tabs.Item>
            </Tabs.Group>
        </main>
    );
}
