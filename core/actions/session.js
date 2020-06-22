import Router from 'next/router'
import { createAsyncThunk } from '@reduxjs/toolkit'
import SessionServices from '../services/session'

export const getSelf = createAsyncThunk(
  'session/getSelf',
  async (data, { rejectWithValue }) => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        return await SessionServices.getSelf();
      } catch (error) {
        localStorage.removeItem('token');
        return rejectWithValue(error)
      }
    } else {
      return rejectWithValue(null)
    }
  }
)

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch({ type: 'session/logout'})
  Router.push('/')
}
