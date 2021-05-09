import './Results.scss';
import React from 'react';
// import JSONPretty from 'react-json-pretty';
// var JSONPrettyMon = require('react-json-pretty/dist/monikai');
import ReactJson from 'react-json-view';
import JSONPretty from 'react-json-pretty';
let JSONPrettyMon = require('react-json-pretty/dist/monikai');

const RenderData = (props) => {
    return (
        <div className="result">
            <pre>
                {
                    <ReactJson name={false} src={props.prompt.response} theme="monokai" />
                }
            </pre>
        </div>
    );
}

export default RenderData;