import { BikesReducer } from './reducer'

export const networksSelector = (state: BikesReducer) => state.networks
export const networksLoadingSelector = (state: BikesReducer) => state.loading?.networks
export const stationsLoadingSelector = (state: BikesReducer) => state.loading?.stations
