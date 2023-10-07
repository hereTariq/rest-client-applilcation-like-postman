import React from 'react';

function KeyValueInputs({ onInputChange }) {
    return (
        <div className="flex gap-6 flex-col">
            <div className="flex gap-6">
                <input
                    type="text"
                    placeholder="key"
                    className="focus:ring-0 focos:outline-none border-b-2 border-l-0 border-r-0 border-t-0 focus:border-black w-full"
                    onChange={(e) => onInputChange('key', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="value"
                    className="focus:ring-0 focos:outline-none border-b-2 border-l-0 border-r-0 border-t-0 focus:border-black w-full"
                    onChange={(e) => onInputChange('value', e.target.value)}
                />
            </div>
        </div>
    );
}

export default KeyValueInputs;
