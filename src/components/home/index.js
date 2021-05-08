import React from 'react';
import Form from '../form';
import Results from '../results'
import List from '../list'
import { If, Then } from '../if';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: false };
    }

    handleLoading = () => {
        this.setState({ loading: !this.state.loading });
    }

    handleForm = (requestObj) => {
        this.setState({ data: requestObj });
    }

    handleHistoryListClick = (method, url) => {
        let historyObj = { method, url };
        this.setState({ historyObj });
    }

    render() {
        return (
            <>
                <Form prompt={this.state.historyObj} handler={this.handleForm} handler2={this.handleLoading} />
                <If condition={localStorage.length}>
                    <Then>
                        <List prompt={JSON.parse(localStorage.getItem('requests'))} handler={this.handleHistoryListClick} />
                    </Then>
                </If>
                <If condition={this.state.loading}>
                    <Then>
                        Loading...
            </Then>
                </If>
                <If condition={this.state.data} >
                    <Then>
                        <Results prompt={this.state.data} />
                    </Then>
                </If>
            </>
        )
    }
}

export default Home;