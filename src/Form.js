import React from 'react';
import './Form.scss';

let setOfRequestObjects = new Set();

if (localStorage.length) {
    setOfRequestObjects.add(JSON.parse(localStorage.getItem('requests')));
}
console.log({setOfRequestObjects});
const Form = (props) => {
    let requestObj = {};

    const handleSubmit = async () => {
        let method;
        let rawData;
        const url = document.querySelector('#urlInput').value;
        const radioButtons = document.getElementsByName('method');
        for (let index = 0; index < radioButtons.length; index++) {
            if (radioButtons[index].checked) {
                method = radioButtons[index].value;
                break;
            }
        }
        try {
            if (method === 'GET' || undefined) {
                rawData = await fetch(url);
            }
            if (method === 'POST' || method === 'PUT') {
                const requestOptions = {
                    method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title: 'RESTy' })
                }
                rawData = await fetch(url, requestOptions);
            }
            if (method === 'DELETE') {
                rawData = await fetch(url, method);
            }

            const formattedData = await rawData.json();
            props.handler(formattedData);
            requestObj = { method, url, body: formattedData };

            if (!setOfRequestObjects.has(JSON.stringify(requestObj))) {
                setOfRequestObjects.add(JSON.stringify(requestObj));
                storeRequest(requestObj);
            }
        } catch (error) {
            props.handler(`You are not allowed to send ${method} request to ${url}`);
            console.error(error);
        }
    }

    const storeRequest = () => {
        console.log((setOfRequestObjects));
        // JSON.parse(setOfRequestObjects);
        let arrOfRequestObjects = Array.from(setOfRequestObjects);
        // console.log({arrOfRequestObjects});
        localStorage.setItem('requests', JSON.stringify(arrOfRequestObjects));
    }

    return (

        <div>
            <input name="url" type="text" id="urlInput" placeholder="URL" />
            <button onClick={handleSubmit}>{props.prompt}</button> <br />
            <input type="radio" name="method" value="GET" />
            <label >GET</label>
            <input type="radio" name="method" value="POST" />
            <label >POST</label>
            <input type="radio" name="method" value="PUT" />
            <label >PUT</label>
            <input type="radio" name="method" value="DELETE" />
            <label >DELETE</label>
        </div>
    );
}

export default Form;