import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'

export const Header = () => (
  <div>
    <h1>React starter kit</h1>
    <NavLink to="/" activeClassName="route--active">Home</NavLink>
    {' . '}
    <NavLink to="/counter" activeClassName="route--active">Counter</NavLink>
    {' . '}
    <NavLink to="/zen" activeClassName="route--active">Zen</NavLink>
    {' . '}
    <NavLink to="/elapse" activeClassName="route--active">Elapse</NavLink>
    {' . '}
    <NavLink to="/route/88" activeClassName="route--active">SubRoute</NavLink>
    {' . '}
    <NavLink to="/notFound" activeClassName="route--active">404</NavLink>
  </div>
)

export default Header
