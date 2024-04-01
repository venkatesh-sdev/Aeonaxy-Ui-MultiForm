/* eslint-disable no-unused-vars */


import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, CreateProfilePage, SignUpPage, WhatsBringYouPage } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/whatsbringyou' element={<WhatsBringYouPage />} />
        <Route path='/createprofile' element={<CreateProfilePage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App