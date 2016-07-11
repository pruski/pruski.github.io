import React, { Component } from 'react';
import MainNav from '../infrastructure/mainNav/MainNav';

class App extends Component {
    render() {
        return (
            <div>
                <MainNav />

                {this.props.children}
            </div>
        )
    }
}

export default App;