import './History.scss';
// console.log('history', localStorage.getItem('requests'))

const History = (props) => {
    function handleClickHistory(event) {
        let clickedRequest = event.target.innerText;
        let [method, url] = clickedRequest.split(' ');
        props.handler(method, url);
    }
    return (
        <div id="history-div">
            <ul id="requests-list">
                {
                    props.prompt.map((request, i) => {
                        return <li key={i}><pre id='history-list' onClick={handleClickHistory}>{request.method} {request.url} </pre></li>
                    })
                }
            </ul>
        </div>
    );
}


export default History;
