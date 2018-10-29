import React, {Component} from 'react';
import {Navbar, NavItem} from 'react-materialize';

class Nav extends Component {
    render() {
        return (
            <Navbar className="teal lighten-2" brand='VirtuaBoard' right>
                <NavItem onClick={() => console.log('test click')}>About</NavItem>
                <NavItem href='#'>Pedals</NavItem>
            </Navbar>
        );
    }
}

export default Nav;