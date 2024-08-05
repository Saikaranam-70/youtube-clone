import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Video from './pages/video/Video'

const App = () => {
  const [sideBar,setSideBar] = useState( true)
  return (
    <div>
      <Navbar setSideBar = {setSideBar}/>
      <Routes>
        <Route path='/' element={<Home sideBar={sideBar}/>}></Route>
        <Route path='/video/:categoryId/:videoId' element={<Video />}></Route>
      </Routes>
    </div>
  )
}

export default App