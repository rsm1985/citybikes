import { createSlice } from '@reduxjs/toolkit'
import { getNetworks } from './thunks'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface NetworkReducer {
  loading: {
    networks: boolean
    network: boolean
  }
}

const initialState: NetworkReducer = {
  loading: {
    networks: false,
    network: false,
  },
}

export const networkSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   // state.value += 1
    // },
    // decrement: (state) => {
    //   // state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   // state.value += action.payload
    // },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getNetworks.pending, (state, action) => {
      // Add user to the state array
      // state.entities.push(action.payload)
    })
    builder.addCase(getNetworks.fulfilled, (state, action) => {
      // Add user to the state array
      // state.entities.push(action.payload)
    })
  },
})

// Action creators are generated for each case reducer function
// export const {} = networkSlice.actions

export default networkSlice.reducer
