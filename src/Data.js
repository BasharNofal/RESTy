import './Data.scss';
import React from 'react';

const RenderData = (props) => {
    // console.log(props.prompt);
    if (props.prompt) {
        return (
            <div id="result">
                <pre>
                    <code>
                        {JSON.stringify(props.prompt, null, 3)}
                    </code>
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