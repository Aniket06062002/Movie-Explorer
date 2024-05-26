import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import TopRated from './Pages/TopRated.jsx'
import UpComingMov from './Pages/UpComingMov.jsx'
import MovieDetail from './Components/MovieDetail.jsx';
import SearchedMov from './Pages/SearchedMov.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='popular' element={<Home />} />
      <Route path='toprated' element={<TopRated />} />
      <Route path='upcoming' element={<UpComingMov />} />
      <Route path='movie/:movieId' element={<MovieDetail />} />
      <Route path="/search" element={<SearchedMov />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)