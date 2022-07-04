import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getNetworks = createAsyncThunk('bikes/getNetworks', async () => {
  console.log('!!!')
  const {
    data: { networks },
  } = await axios.get('http://api.citybik.es/v2/networks')
  return networks
})

export const getNetworkStations = createAsyncThunk(
  'bikes/getNetworkStations',
  async (id: string) => {
    const {
      data: {
        network: { stations },
      },
    } = await axios.get(`http://api.citybik.es/v2/networks/${id}`)
    return stations
  },
)
