import Router from 'next/router';
import { createAsyncThunk } from '@reduxjs/toolkit';
import SessionServices from '../services/session';
import { withToken } from '../helpers';

export const getSelf = createAsyncThunk(
  'session/getSelf',
  async (data, { rejectWithValue }) => withToken(SessionServices.getSelf, rejectWithValue, data),
);

export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: 'session/logout' });
  Router.push('/');
};
