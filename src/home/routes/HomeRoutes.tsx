import React from 'react'
import { Routes, Route, Navigate } from 'react-router';

export const HomeRoutes = () => {
  return (
    <>

        <Routes>

            <Route path='/' element={ <h1>xd</h1> }/>
            <Route path='/*' element={ <Navigate to='/' /> }/>

        </Routes>

    </>
  )
}
