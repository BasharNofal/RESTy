import React from 'react';
import './Form.scss';

class Form extends React.Component {
    constructor(props) {
        super(props);
        //initial state of the component
        this.state = {
            url: 'Enter url',
            method:'Choose method'
        };
    }

    handleSubmit = () => {
        let method;
        const url = document.querySelector('#urlInput').value;
        const radioButtons = document.getElementsByName('method');
        for (let index = 0; index < radioButtons.length; index++) {
            if(radioButtons[index].checked){
                method = radioButtons[index].value;
                break;
            }
        }
        this.setState({ url, method });
        console.log(this.state);

    }

    render() {
        return (
            <main>
                <div>
                    <input name="url" type="text" id="urlInput" placeholder="URL" />
                    <button onClick={this.handleSubmit}>Go</button> <br/>
                    <input type="radio" name="method" value="get" />
                    <label >GET</label>
                    <input type="radio" name="method" value="post" />
                    <label >POST</label>
                    <input type="radio" name="method" value="put" />
                    <label >PUT</label>
                    <input type="radio" name="method" value="delete" />
                    <label >DELETE</label>
                </div>

                <div id="result">
                    <pre>{this.state.method}    {this.state.url}</pre>
                </div>
            </main>
        );
    }
}

export default Form;