import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNetworks, getNetworkStations } from '../../store/bikes/thunks'
import { AppDispatch } from '../../store/store'
import {
  networksLoadingSelector,
  networksSelector,
  stationsLoadingSelector,
} from '../../store/bikes/selectors'
import { StyledMainContainer, StyledTableContainer } from './styles'
const Main = () => {
  const dispatch = useDispatch<AppDispatch>()
  const networks = useSelector(networksSelector)
  const isNetworksLoading = useSelector(networksLoadingSelector)
  const isStationsLoading = useSelector(stationsLoadingSelector)
  const onSelectNetwork = (id: string) => {
    dispatch(getNetworkStations(id))
  }
  useEffect(() => {
    dispatch(getNetworks())
  }, [])
  return (
    <StyledMainContainer>
      <StyledTableContainer>1</StyledTableContainer>
      <StyledTableContainer>2</StyledTableContainer>
    </StyledMainContainer>
  )
}

export default memo(Main)
