import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu,Container, Button } from 'semantic-ui-react'

export default function NavBar() {

    return(
        <Menu inverted fixed='top'>
            <Container>
            <Menu.Item as={NavLink} exact to='/' header>
                <img src="/assets/logo.png" alt="logo" style={{marginRight:'10px'}} />
                Reactivities
            </Menu.Item>
            <Menu.Item as={NavLink} to='/activities' name="Activities"/>
            <Menu.Item>
                <Button as={NavLink} to='/createActivity' positive content="Create activity" />
            </Menu.Item>
            </Container>
        </Menu>
    )
}