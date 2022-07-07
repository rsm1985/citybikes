import { RootState } from '../store'

export const networksSelector = (state: RootState) => state.bikes.networks
export const stationsSelector = (state: RootState) => state.bikes.stations
export const selectedNetworkIdSelector = (state: RootState) => state.bikes.selectedNetworkId
export const networksLoadingSelector = (state: RootState) => state.bikes.loading?.networks
export const stationsLoadingSelector = (state: RootState) => state.bikes.loading.stations
