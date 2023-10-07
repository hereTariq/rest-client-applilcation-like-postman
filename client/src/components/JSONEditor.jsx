import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { useContext } from 'react';
import { Context } from '../context/context';
function JSONEditor() {
    const { body, setBody } = useContext(Context);
    const onChange = React.useCallback((val, viewUpdate) => {
        setBody(val);
    }, []);

    return (
        <CodeMirror
            value={body}
            height="200px"
            width="600px"
            extensions={[json()]}
            onChange={onChange}
        />
    );
}
export default JSONEditor;
