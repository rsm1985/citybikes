import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNetworks } from './store/networks/thunks'
import { AppDispatch } from './store/store'
import { networkSelector } from './store/networks/selectors'
export const App = () => {
  const dispatch = useDispatch<AppDispatch>()
  const network = useSelector(networkSelector)
  console.log(network.loading)
  useEffect(() => {
    dispatch(getNetworks())
  }, [])
  return (
    <>
      <h1>Hello!</h1>
      <div>1234</div>
    </>
  )
}
