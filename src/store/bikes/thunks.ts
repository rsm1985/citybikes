import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setActiveNetwork } from './reducer'

export const getNetworks = createAsyncThunk('bikes/getNetworks', async () => {
  try {
    const {
      data: { networks },
    } = await axios.get('http://api.citybik.es/v2/networks')
    return networks
  } catch (err) {
    console.log('getNetworks', err)
  }
})

export const getNetworkStations = createAsyncThunk(
  'bikes/getNetworkStations',
  async (id: string, { dispatch }) => {
    try {
      dispatch(setActiveNetwork(id))
      const {
        data: {
          network: { stations },
        },
      } = await axios.get(`http://api.citybik.es/v2/networks/${id}`)
      return stations
    } catch (err) {
      console.log('getNetworkStations', err)
    }
  },
)
