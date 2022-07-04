import { createSlice } from '@reduxjs/toolkit'
import { getNetworks, getNetworkStations } from './thunks'
import { NetworkItem, StationItem } from '../../types/types'

export interface BikesReducer {
  networks: NetworkItem[]
  stations: StationItem[]
  selectedNetworkId: string | null
  likedStations: string[]
  loading: {
    networks: boolean
    stations: boolean
  }
}

const initialState: BikesReducer = {
  networks: [],
  stations: [],
  selectedNetworkId: null,
  likedStations: [],
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
    likeStation: (state, action) => {
      state.stations[action.payload].liked = !state.stations[action.payload].liked
      // state.likedStations.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getNetworks.pending, (state) => {
      state.loading.networks = true
    })
    builder.addCase(getNetworks.fulfilled, (state, action) => {
      state.networks = action.payload
      state.loading.networks = false
    })
    builder.addCase(getNetworks.rejected, (state) => {
      state.loading.networks = false
    })
    builder.addCase(getNetworkStations.pending, (state) => {
      state.loading.stations = true
    })
    builder.addCase(getNetworkStations.fulfilled, (state, action) => {
      state.stations = action.payload
      state.loading.stations = false
    })
    builder.addCase(getNetworkStations.rejected, (state) => {
      state.loading.stations = false
    })
  },
})

export const { setActiveNetwork, likeStation } = bikesSlice.actions

export default bikesSlice.reducer
