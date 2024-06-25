import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PopularNews from '../PopularNews'
import AllNews from '../AllNews'

export default function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<AllNews/>}/>
        <Route path='/Popular' element={<PopularNews/>}/>
    </Routes>
  )
}
