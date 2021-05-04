import React from 'react';
import './Form.scss';

const Form = (props) => {

    const handleSubmit = async () => {
        try {
            // let method;
            const url = document.querySelector('#urlInput').value;
            // const radioButtons = document.getElementsByName('method');
            // for (let index = 0; index < radioButtons.length; index++) {
            //     if (radioButtons[index].checked) {
            //         method = radioButtons[index].value;Renders the Result Body as “pretty” JSON

            //         break;
            //     }
            // }
            const rawData = await fetch(url);
            // console.log({rawData});
            const formattedData = await rawData.json();
            // console.log({formattedData});
            props.handler(formattedData);
        } catch (error) {
            console.error(error);
        }
    }
    return (

        <div>
            <input name="url" type="text" id="urlInput" placeholder="URL" />
            <button onClick={handleSubmit}>{props.prompt}</button> <br />
            <input type="radio" name="method" value="get" />
            <label >GET</label>
            <input type="radio" name="method" value="post" />
            <label >POST</label>
            <input type="radio" name="method" value="put" />
            <label >PUT</label>
            <input type="radio" name="method" value="delete" />
            <label >DELETE</label>
        </div>

    );
}

export default Form;