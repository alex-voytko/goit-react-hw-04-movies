import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';

class App extends Component {
    state = {
        searchValue: '',
    };
    render() {
        return (
            <>
                <Header>
                    <Navigation />;
                </Header>
            </>
        );
    }
}

export default App;
