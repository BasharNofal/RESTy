import './Data.scss';
import React from 'react';
import JSONPretty from 'react-json-pretty';
var JSONPrettyMon = require('react-json-pretty/dist/monikai');
const RenderData = (props) => {
    // console.log(props.prompt);
    if (props.prompt) {
        return (
            <div id="result">
                <pre>
                    {
                    <JSONPretty id="json-pretty" data={props.prompt} theme={JSONPrettyMon}></JSONPretty>
                    
                    /* <code>
                        {JSON.stringify(props.prompt, null, 3)}
                    </code> */}
                </pre>
            </div>
        );
    } else {
        return (
            <div id="result">
                <p>test</p>
            </div>
        );
    }
}

export default RenderData;