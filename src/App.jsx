import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Home from './pages/Home'
import ExerciseDetails from './pages/ExerciseDetails'
import Navbaar from './components/Navbaar'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Box width='400px'>
        <Navbaar/>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/exercise/:id' element = {<ExerciseDetails/>}/>
        </Routes>
        <Footer/>
      </Box>
    </div>
  )
}

export default App