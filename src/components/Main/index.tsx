import React, { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getNetworks, getNetworkStations } from '../../store/bikes/thunks'
import {
  networksLoadingSelector,
  networksSelector,
  stationsLoadingSelector,
} from '../../store/bikes/selectors'
import { StyledMainContainer, StyledTableContainer } from './styles'
import TableItem from '../TableItem'
import { useAppDispatch, useAppSelector } from '../../store/store'
const Main = () => {
  const dispatch = useAppDispatch()
  const networks = useAppSelector(networksSelector)
  console.log('networks', networks)
  const isStationsLoading = useAppSelector(stationsLoadingSelector)
  const onSelectNetwork = (id: string) => {
    dispatch(getNetworkStations(id))
  }
  useEffect(() => {
    dispatch(getNetworks())
  }, [])
  return (
    <StyledMainContainer>
      <StyledTableContainer>
        {networks.map(({ name, location: { city, country }, id }) => (
          <TableItem key={id} content={`${name} ${city} ${country}`} />
        ))}
      </StyledTableContainer>
      <StyledTableContainer>2</StyledTableContainer>
    </StyledMainContainer>
  )
}

export default memo(Main)
