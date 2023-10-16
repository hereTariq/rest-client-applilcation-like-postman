import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';

function JSONEditor({ editable, body, setBody }) {
    const onChange = React.useCallback((val, viewUpdate) => {
        setBody(val);
    }, []);

    return (
        <CodeMirror
            value={body}
            height="200px"
            width="600px"
            extensions={[json()]}
            editable={editable}
            onChange={onChange}
            // theme={'dark'}
            basicSetup={{
                lineNumbers: true,
                bracketMatching: true,
                closeBrackets: true,
                syntaxHighlighting: true,
                highlightSelectionMatches: true,
                highlightActiveLine: false,
                highlightActiveLineGutter: false,
                tabSize: 4,
            }}
        />
    );
}
export default JSONEditor;
