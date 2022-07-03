import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getNetworks = createAsyncThunk('network/getNetworks', async () => {
  const { data } = await axios.get('http://api.citybik.es/v2/networks?fields=id,name')
  console.log('data', data)
  // return response.data
})
