import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from './actions';

const MainNav = ({ items, onItemClick, navigate }) => (
    <nav className="main-nav">
        <ul>
        {
            items.map(item =>(
                    <li key={ item.url } className={ item.active ? 'active' : '' }>
                        <Link to={ item.url } onClick={ () => navigate(item.url) }>
                            { item.label }
                        </Link>
                    </li>
                )
            )
        }
        </ul>
    </nav>
);

export default connect(state => ({ items: state.mainNav }), actions)(MainNav);