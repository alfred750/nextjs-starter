import React from 'react';
import {Button} from 'antd'
import { useDispatch} from 'react-redux'
import { logout} from '../../../core/actions/session'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(logout())
  }
  return (
    <Button onClick={handleClick}>logout</Button>
  )
}

export default LogoutButton
