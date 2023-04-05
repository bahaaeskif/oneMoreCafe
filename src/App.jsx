//import library
import { Routes, Route } from 'react-router-dom'

//import files
import './App.css'

//import components  
import SharedLayout from './components/sharedlayout/SharedLayout'
import Home from './components/home/Home'

import { useSelector } from 'react-redux'
import QuantityController from './common/QuantityController'

import SkeletonCategory from './skeleton/skeletonCategory'
import CardsSkeleton from './skeleton/CardsSkeleton'
import Nav from './skeleton/nav'
import Cart from './components/cart/Cart'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const { ui } = useSelector((state) => state.ui)
  const darkMode = ui.darkMode

  return (
    <div className={`App ${darkMode ? ' bg-secondaryDark' : 'bg-white'} min-h-screen`}>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='search' element={<CardsSkeleton />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
