import './Results.scss';
import React from 'react';
import JSONPretty from 'react-json-pretty';
let JSONPrettyMon = require('react-json-pretty/dist/monikai');
const RenderData = (props) => {
    return (
        <div className="result">
            <pre>
                {
                    <JSONPretty id="json-pretty" data={props.prompt.response} theme={JSONPrettyMon}></JSONPretty>
                }
            </pre>
        </div>
    );
}

export default RenderData;