import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import 'sass'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import { ProductProvider } from './store/ProductProvider.jsx'
import 'aos/dist/aos.css';
import AOS from 'aos'
import CartPage from './pages/CartPage.jsx'


AOS.init()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<App/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/product' element={<Product/>}/>
              <Route path='/cart' element={<CartPage/>}/>
          </Route>
          <Route path='/*'element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  </StrictMode>,
)
