import './History.scss';
import React from 'react';
import { If, Then } from '../if';
import JSONPretty from 'react-json-pretty';
let JSONPrettyMon = require('react-json-pretty/dist/monikai');

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {storedRequests: []};
    }
    
    async componentDidMount() {
        let arrOfStoredRequests = [];
        if (localStorage.length) {
            arrOfStoredRequests = JSON.parse(localStorage.getItem('requests'));
        }
        await this.setState({storedRequests: arrOfStoredRequests});
    }

    handleClickHistory = (event) => {
        let clickedRequest = event.target.innerText;
        let [method, url] = clickedRequest.split(' ');
        this.getResponse(method, url);
    }

    getResponse(method, url) {
        let response;
        for (let index = 0; index < this.state.storedRequests.length; index++) {
            if (this.state.storedRequests[index].method === method && this.state.storedRequests[index].url === url) {
                response = this.state.storedRequests[index].response;
                break;
            }
        }
        this.setState({ response });
    }

    render() {
        return (
            <div>
                <div className="history-div">
                    <ul className="requests-list">
                        {
                            this.state.storedRequests.map((request, i) => {
                                return <li key={i}><pre className='history-list' onClick={this.handleClickHistory}>{request.method} {request.url} </pre></li>
                            })
                        }
                    </ul>
                </div>
                <If condition={this.state.response}>
                    <Then>
                        <div className="result">
                            <pre>
                                {
                                    <JSONPretty id="json-pretty" data={this.state.response} theme={JSONPrettyMon}></JSONPretty>
                                }
                            </pre>
                        </div>
                    </Then>
                </If>
            </div>
        );
    }
}

export default History;