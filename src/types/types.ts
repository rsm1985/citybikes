export interface NetworkItem {
  id: string
  name: string
  location: {
    city: string
    country: string
  }
}

export interface StationItem {
  id: string
  name: string
  free_bikes: number
  empty_slots: number
  liked?: boolean
}
