'use client';
import KeyValueInputs from './KeyValueInputs';
import './style.css';

import { Tabs } from 'flowbite-react';

export default function RequestTabs() {
    return (
        <main>
            <Tabs.Group style="underline" className="">
                <Tabs.Item active title="Query" className="">
                    <div className="flex flex-col gap-4">
                        <p>Query Parameters</p>

                        <KeyValueInputs />
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Headers">
                    <div className="flex flex-col gap-4">
                        <p>HTTP Headers</p>
                        <KeyValueInputs />
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Body">
                    <div className="space-y-4">
                        <p>JSON</p>
                        <textarea
                            cols="60"
                            rows="8"
                            className="focus:ring-0 focus:outline-none focus:border-gray-500 pt-1 w-full"
                        ></textarea>
                    </div>
                </Tabs.Item>
            </Tabs.Group>
        </main>
    );
}
