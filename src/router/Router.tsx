import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { AuthRoutes } from '../auth/router/AuthRoutes';
import { HomeRoutes } from '../home/routes/HomeRoutes';

export const Router = () => {
  
  const authenticated:string = "not-authenticated";

  return (
    <BrowserRouter>
    
      <Routes>

        { 
          (authenticated === 'authenticated')
            ? <>
              <Route path='/*' element={ <HomeRoutes /> }/>
              <Route path='*' element={ <Navigate to='/' /> }/>
            </> 
            : <>
              <Route path='auth/*' element={ <AuthRoutes /> }/>
              <Route path='*' element={ <Navigate to='auth' /> }/>
            </> 
        }

        <Route path='/*' element={ <Navigate to='/'/>}/>

      </Routes>
    
    </BrowserRouter>
  )
}
