import React from 'react'
import Header from './components/Header/Header'
import Fullhomepage from './components/Homepage/fullhomepage/Fullhomepage'
import { Routes, Route } from 'react-router-dom'
import Fullproduct from './components/Productdetailpage/Fullproduct/Fullproduct'
import Fullcategory from './components/Categorypage/Fullcategory/fullcategory'
import Footer from './components/Footer/Footer'
import Fullcard from './components/cart/fullCard/Fullcard'


const App = () => {
  return (
    <div>
     <Header/>
     <Routes>
        <Route path='/' element={<Fullhomepage/>}/>
        <Route path='/shop' element={<Fullhomepage/>}/>
          <Route path='/on-sale' element={<Fullproduct/>}/>
          <Route path='/new-arrivals' element={<Fullcategory/>}/>
          <Route path='/brands' element={<Fullcard/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
