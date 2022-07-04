import { createSlice } from '@reduxjs/toolkit'
import { getNetworks, getNetworkStations } from './thunks'
import { NetworkItem, StationItem } from '../../types/types'

export interface BikesReducer {
  networks: NetworkItem[]
  stations: StationItem[]
  selectedNetworkId: string | null
  loading: {
    networks: boolean
    stations: boolean
  }
}

const initialState: BikesReducer = {
  networks: [],
  stations: [],
  selectedNetworkId: null,
  loading: {
    networks: false,
    stations: false,
  },
}

export const bikesSlice = createSlice({
  name: 'bikes',
  initialState,
  reducers: {
    setActiveNetwork: (state, action) => {
      state.selectedNetworkId = action.payload
    },
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
    builder.addCase(getNetworks.pending, (state) => {
      state.loading.networks = true
    })
    builder.addCase(getNetworks.fulfilled, (state, action) => {
      // Add user to the state array
      // state.entities.push(action.payload)
      state.networks = action.payload
      state.loading.networks = false
    })
    builder.addCase(getNetworks.rejected, (state) => {
      state.loading.networks = false
    })
    builder.addCase(getNetworkStations.pending, (state, action) => {
      state.loading.stations = true
    })
    builder.addCase(getNetworkStations.fulfilled, (state, action) => {
      // Add user to the state array
      // state.entities.push(action.payload)
      state.stations = action.payload
      state.loading.stations = false
    })
    builder.addCase(getNetworkStations.rejected, (state) => {
      state.loading.stations = false
    })
  },
})

// Action creators are generated for each case reducer function
export const { setActiveNetwork } = bikesSlice.actions

export default bikesSlice.reducer
