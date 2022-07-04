import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNetworks, getNetworkStations } from '../../store/bikes/thunks'
import { AppDispatch } from '../../store/store'
import { networkSelector } from '../../store/bikes/selectors'
import { StyledMainContainer } from './styles'
const Main = () => {
  const dispatch = useDispatch<AppDispatch>()
  const networks = useSelector(networkSelector)
  useEffect(() => {
    dispatch(getNetworks())
    dispatch(getNetworkStations('velib'))
  }, [])
  return (
    <StyledMainContainer>
      <h1>Hello!</h1>
      <div>1234</div>
    </StyledMainContainer>
  )
}

export default memo(Main)
