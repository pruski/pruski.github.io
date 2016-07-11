import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from './actions';

class MainNav extends Component {
    render() {
        return (
            <nav className="main-nav">
                <ul>
                {
                    this.props.items.map(item =>(
                            <li key={item.url}>
                                <Link to={item.url} onClick={() => this.props.onItemClick(item.url)}>
                                    {item.label}
                                </Link>
                            </li>
                        )
                    )
                }
                </ul>
            </nav>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        items: state.mainNav
    } 
};

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (url) => {
            dispatch(actions.navigate(url))
        }
    }
};

MainNav = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainNav);

export default MainNav;