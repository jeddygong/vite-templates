import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from '@/router'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default App
