import React, {Component} from 'react';
import {Button, SideNav, Card, SideNavItem} from 'react-materialize';
import Profile from './img/profile.png';
import Img3 from './img/img3000.png';

class Main extends Component {
    render() {
        return (
            <SideNav
            trigger={<Button>SIDE NAV DEMO</Button>}
            options={{ closeOnClick: true }}
            >
                <SideNavItem userView
                    user={{
                    background: Img3,
                    image: Profile,
                    name: 'GarrettLee A Davis',
                    email: 'info@dtechdev.com'
                    }}
                />
                <SideNavItem href='https://dtechdev.com' target='blank' icon='cloud'>Link to My Website</SideNavItem>
                <SideNavItem href='#!second'>GitHub</SideNavItem>
                <SideNavItem divider />
                <SideNavItem subheader>Subheader</SideNavItem>
                <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
            </SideNav>
        );
    }
}

export default Main;