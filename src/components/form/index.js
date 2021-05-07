import React from 'react';
import './Form.scss';

const Form = (props) => {
    let arrOfRequestObjects = [];
    let checkExists = 0;
    let checkEmpty = 0;
    let requestObj = {};

    if (localStorage.length) {
        arrOfRequestObjects = JSON.parse(localStorage.getItem('requests'));
    }

    const handleSubmit = async () => {
        props.handler2();
        // document.querySelector('button').click();

        let method;
        let rawData;
        const body = document.querySelector('textarea').value;
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
                    body
                }
                rawData = await fetch(url, requestOptions);
            }
            if (method === 'DELETE') {
                rawData = await fetch(url, method);
            }

            const formattedData = await rawData.json();
            requestObj = { method, url, body, response: formattedData };
            props.handler2();
            props.handler(requestObj);

            if (arrOfRequestObjects.length === 0) {
                checkEmpty++;
                arrOfRequestObjects.push(requestObj);
                storeRequest();
            } else {
                for (let index = 0; index < arrOfRequestObjects.length; index++) {
                    if (JSON.stringify(arrOfRequestObjects[index]) === JSON.stringify(requestObj)) {
                        checkExists++;
                        break;
                    }
                }
            }
            if (checkExists === 0 && checkEmpty === 0) {
                console.log({ check: checkExists })
                arrOfRequestObjects.push(requestObj);
                storeRequest();
            }
        } catch (error) {
            props.handler(`You are not allowed to send ${method} request to ${url}`);
            console.error(error);
        }
    }

    const storeRequest = () => {
        localStorage.setItem('requests', JSON.stringify(arrOfRequestObjects));
    }

    const handleHistoryListClick = () => {
        document.querySelector('#urlInput').value = props.prompt.url;
        let methodButtons = document.getElementsByName('method');
        methodButtons.forEach(btn => {
            if (btn.defaultValue === props.prompt.method) {
                btn.checked = true;
            }
        });
    }

    if (props.prompt) {
        handleHistoryListClick();
    }

    return (
        <div id="form">
            <input name="url" type="text" id="urlInput" placeholder="URL" />
            <button onClick={handleSubmit}>Go</button> <br />
            <input type="radio" name="method" value="GET" />
            <label >GET</label>
            <input type="radio" name="method" value="POST" />
            <label >POST</label>
            <input type="radio" name="method" value="PUT" />
            <label >PUT</label>
            <input type="radio" name="method" value="DELETE" />
            <label >DELETE</label><br />
            <textarea name="body" cols="40" rows="10" placeholder="Enter Request Body"></textarea>
        </div>
    );
}

export default Form;