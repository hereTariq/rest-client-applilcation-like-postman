import React from 'react';
import { Tabs } from 'flowbite-react';
import { useContext } from 'react';
import { Context } from '../context/context';
import JSONEditor from './JSONEditor';

function ResponseTabs() {
    const { resBody } = useContext(Context);
    return (
        <main className="border flex mt-6 w-full">
            <div className="w-[70%]">
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
                        <div className="">
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
            </div>
            <div className="flex space-x-6 mt-[13px] text-sm w-full text-gray-400">
                <p>Status: {resBody?.status}</p>
                <p>Time: {resBody?.time}</p>
                <p>Size: {resBody?.size}</p>
            </div>
        </main>
    );
}

export default ResponseTabs;
