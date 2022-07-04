import { RootState } from '../store'
import { createSelector } from '@reduxjs/toolkit'

export const networksSelector = (state: RootState) => state.bikes.networks
export const stationsSelector = (state: RootState) => state.bikes.stations
// export const stationsSelector = createSelector(
//   (state: RootState) => state.bikes.stations,
//   (state: RootState) => state.bikes.likedStations,
//   (stations, likedStations) => {
//     stations
//     // likedStations.forEach((likedStationId) => {
//     //   const likedStationIndex = stations.indexOf(likedStationId)
//     //   console.log('likedStationIndex', likedStationIndex)
//     //   // if (likedStationIndex) {
//     //   //   stations[likedStationIndex].liked = true
//     //   //   // console.log('station', station)
//     //   // }
//     // })
//     // console.log('stations', stations)
//     // console.log('likedStations', likedStations)
//     return stations
//   },
// )

export const selectedNetworkIdSelector = (state: RootState) => state.bikes.selectedNetworkId
export const networksLoadingSelector = (state: RootState) => state.bikes.loading?.networks
export const stationsLoadingSelector = (state: RootState) => state.bikes.loading.stations
