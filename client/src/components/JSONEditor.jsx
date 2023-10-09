import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { indentOnInput } from '@codemirror/language';

function JSONEditor({ editable, body, setBody }) {
    const onChange = React.useCallback((val, viewUpdate) => {
        setBody(val);
    }, []);

    return (
        <CodeMirror
            value={body}
            height="180px"
            width="600px"
            extensions={[json(), indentOnInput()]}
            // editable={editable}

            onChange={onChange}
            basicSetup={{
                lineNumbers: true,
                bracketMatching: true,
                closeBrackets: true,
                indentOnInput: true,
                syntaxHighlighting: true,
                highlightSelectionMatches: true,
                tabSize: 4,

                defaultCharacterWidth: 5,
            }}
        />
    );
}
export default JSONEditor;
