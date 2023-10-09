import React from 'react';
import { Tabs, Button } from 'flowbite-react';
import { useContext } from 'react';
import { Context } from '../context/context';
import JSONEditor from './JSONEditor';

function ResponseTabs() {
    const { resBody } = useContext(Context);
    return (
        <main className="">
            {/* <h2 className="font-semibold text-xl ">Response</h2> */}
            <Tabs.Group style="underline" className="">
                <Tabs.Item active title="Response">
                    <div className="flex flex-col gap-4">
                        <JSONEditor editable={false} body={resBody} />
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Headers">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-6 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Key
                                    </th>
                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Value
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        key
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        value
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Tabs.Item>
            </Tabs.Group>
        </main>
    );
}

export default ResponseTabs;
