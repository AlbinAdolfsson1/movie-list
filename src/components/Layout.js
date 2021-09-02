import React from 'react'
import TabView from './tab-view'
import { routes } from '../configs/routes'

const Layout = ({ className, children }) => {
  
  return (
    <div className={"Layout " + className}>
      <TabView views={routes.filter(r => r.label)} />
      { children }
    </div>
  )
}

export default Layout;