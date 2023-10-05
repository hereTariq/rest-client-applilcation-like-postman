import React from 'react';

function KeyValueInputs() {
    return (
        <div>
            <div className="flex gap-6">
                <input
                    type="text"
                    placeholder="key"
                    className="focus:ring-0 focos:outline-none border-b-2 border-l-0 border-r-0 border-t-0 focus:border-black w-full"
                />
                <input
                    type="text"
                    placeholder="value"
                    className="focus:ring-0 focos:outline-none border-b-2 border-l-0 border-r-0 border-t-0 focus:border-black w-full"
                />
            </div>
        </div>
    );
}

export default KeyValueInputs;
