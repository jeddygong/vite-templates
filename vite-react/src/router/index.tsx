import React from 'react'

import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
const Home = lazy(() => import('@/views/home/index.tsx'))

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />, //(xxx组件)
    children: [
      //xxx  多级路由配置
    ]
  }
])
export default routes
