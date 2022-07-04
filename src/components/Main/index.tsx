import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNetworks, getNetworkStations } from '../../store/bikes/thunks'
import { AppDispatch } from '../../store/store'
import { networkSelector } from '../../store/bikes/selectors'
import { StyledMainContainer } from './styles'
const Main = () => {
  const dispatch = useDispatch<AppDispatch>()
  const networks = useSelector(networkSelector)
  const onSelectNetwork = (id: string) => {
    dispatch(getNetworkStations(id))
  }
  useEffect(() => {
    dispatch(getNetworks())
  }, [])
  return <StyledMainContainer></StyledMainContainer>
}

export default memo(Main)
