import { createSlice } from '@reduxjs/toolkit'
import { getSelf } from '../actions/session'

const initialState = {
  fetching: false,
  user: null,
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    logout: state => {
      state.user = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getSelf.pending, (state) => {
      state.fetching = true
    })
    builder.addCase(getSelf.fulfilled, (state, { payload } ) => {
      state.fetching = false
      state.user = payload
    })
    builder.addCase(getSelf.rejected, (state) => {
      state.fetching = false
      state.user = null
    })
  }
})

export default sessionSlice.reducer
