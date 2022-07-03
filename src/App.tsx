import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNetworks, getNetworkStations } from './store/bikes/thunks'
import { AppDispatch } from './store/store'
import { networkSelector } from './store/bikes/selectors'
export const App = () => {
  const dispatch = useDispatch<AppDispatch>()
  const network = useSelector(networkSelector)
  useEffect(() => {
    dispatch(getNetworks())
    dispatch(getNetworkStations('velib'))
  }, [])
  return (
    <>
      <h1>Hello!</h1>
      <div>1234</div>
    </>
  )
}
