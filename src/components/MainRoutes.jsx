import React from 'react'
import Homepage from './Homepage'

import { Route, Routes } from 'react-router-dom'
import ProductPage from './ProductPage'

const MainRoutes = () => {
  return (
    <div>
          <Routes>
      <Route path='/' element={<Homepage/>}>
     
      </Route>
      <Route path="/product/:category" element={<ProductPage/>}/>
     </Routes>
  
    </div>
  )
}

export default MainRoutes