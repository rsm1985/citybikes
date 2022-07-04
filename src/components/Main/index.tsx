import React, { memo, useEffect } from 'react'
import { getNetworks, getNetworkStations } from '../../store/bikes/thunks'
import {
  networksLoadingSelector,
  networksSelector,
  stationsLoadingSelector,
} from '../../store/bikes/selectors'
import { StyledLoader, StyledMainContainer, StyledTableContainer } from './styles'
import TableItem from '../TableItem'
import { useAppDispatch, useAppSelector } from '../../store/store'
import Loader from '../icons/Loader'
const Main = () => {
  const dispatch = useAppDispatch()
  const networks = useAppSelector(networksSelector)
  const isNetworksLoading = useAppSelector(networksLoadingSelector)
  // const isStationsLoading = useAppSelector(stationsLoadingSelector)
  console.log('isNetworksLoading', isNetworksLoading)
  const onSelectNetwork = (id: string) => {
    dispatch(getNetworkStations(id))
  }
  useEffect(() => {
    dispatch(getNetworks())
  }, [])
  return (
    <StyledMainContainer>
      <StyledTableContainer>
        {isNetworksLoading ? (
          <StyledLoader>
            <Loader width={100} height={100} />
          </StyledLoader>
        ) : (
          networks.map(({ name, location: { city, country }, id }) => (
            <TableItem
              key={id}
              content={`${name} ${city} ${country}`}
              id={id}
              onClick={onSelectNetwork}
            />
          ))
        )}
      </StyledTableContainer>
      <StyledTableContainer>2</StyledTableContainer>
    </StyledMainContainer>
  )
}

export default memo(Main)
