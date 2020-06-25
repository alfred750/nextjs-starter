import React from 'react';
import SplashScreen from '../SplashScreen'
import {useSelector} from 'react-redux'
import Router from 'next/router'

const RoleLayout = ({ children, role }) => {

  if (typeof window === 'undefined')
    return <SplashScreen />

  const { user, fetching } = useSelector(state => state.session)

  if (fetching)
    return <SplashScreen />

  if (!user || user.role !== role)
    Router.push('/')

  return children

};

export default RoleLayout

