import React, { memo, useEffect } from 'react'
import { getNetworks, getNetworkStations } from '../../store/bikes/thunks'
import {
  networksLoadingSelector,
  networksSelector,
  stationsLoadingSelector,
  stationsSelector,
} from '../../store/bikes/selectors'
import { StyledLoader, StyledMainContainer, StyledTableContainer } from './styles'
import TableItem from '../TableItem'
import { useAppDispatch, useAppSelector } from '../../store/store'
import Loader from '../icons/Loader'
const Main = () => {
  const dispatch = useAppDispatch()
  const networks = useAppSelector(networksSelector)
  const stations = useAppSelector(stationsSelector)
  const isNetworksLoading = useAppSelector(networksLoadingSelector)
  const isStationsLoading = useAppSelector(stationsLoadingSelector)
  const onSelectNetwork = (id: string) => {
    dispatch(getNetworkStations(id))
  }
  const onLikeNetwork = (id: string) => {}
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
      <StyledTableContainer>
        {isStationsLoading ? (
          <StyledLoader>
            <Loader width={100} height={100} />
          </StyledLoader>
        ) : (
          stations.map(({ id, name, free_bikes, empty_slots }) => (
            <TableItem
              key={id}
              content={`${name} - Free bikes: ${free_bikes}/${empty_slots}`}
              id={id}
              onClick={onLikeNetwork}
            />
          ))
        )}
      </StyledTableContainer>
    </StyledMainContainer>
  )
}

export default memo(Main)
