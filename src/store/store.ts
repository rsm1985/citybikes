import { configureStore } from '@reduxjs/toolkit'
import bikesSlice from './bikes/reducer'

export const store = configureStore({
  reducer: {
    bikes: bikesSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
