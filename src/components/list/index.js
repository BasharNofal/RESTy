import './List.scss';
// console.log('history', localStorage.getItem('requests'))

const History = (props) => {
    function handleClickHistory(event) {
        let clickedRequest = event.target.innerText;
        let [method, url] = clickedRequest.split(' ');
        props.handler(method, url);
    }
    return (
        <div className="history-div">
            <ul className="requests-list">
                {
                    props.prompt.map((request, i) => {
                        return <li key={i}><pre className='history-list' onClick={handleClickHistory}>{request.method} {request.url} </pre></li>
                    })
                }
            </ul>
        </div>
    );
}


export default History;
