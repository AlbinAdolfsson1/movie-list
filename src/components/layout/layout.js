import React from 'react'
import TabView from '../tab-view'
import { routes } from '../../configs/routes'
import { NavLink } from 'react-router-dom'

const Layout = ({className, children}) => {

    return(
        <div className={"Layout " + className}>
            <TabView views={routes.filter(r => r.label)} />
            { children }
            <footer>
                <div>
                    <NavLink exact={true} to='/' className='TabView-menu'>
                        <h1>The Movie List</h1>
                    </NavLink>
                </div>
            </footer>
        </div>
    )

}

export default Layout;