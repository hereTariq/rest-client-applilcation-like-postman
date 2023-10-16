import React from 'react';
import { Tabs } from 'flowbite-react';
import { useContext } from 'react';
import { Context } from '../context/context';
import JSONEditor from './JSONEditor';

function ResponseTabs() {
    const { resBody } = useContext(Context);
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex space-x-6 ">
                <p>Status: {resBody?.status}</p>
                <p>Time: {resBody?.time}</p>
                <p>Size: {resBody?.size}</p>
            </div>
            <main className="border">
                {/* <h2 className="font-semibold text-xl ">Response</h2> */}

                <Tabs.Group style="underline" className="">
                    <Tabs.Item active title="Response">
                        <div className="flex flex-col gap-4">
                            <JSONEditor
                                editable={false}
                                body={JSON.stringify(resBody?.data, null, 4)}
                            />
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="Headers">
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th className="px-6 text-left  text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            Key
                                        </th>
                                        <th className="px-6  text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            Value
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white  divide-gray-200">
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
        </div>
    );
}

export default ResponseTabs;
