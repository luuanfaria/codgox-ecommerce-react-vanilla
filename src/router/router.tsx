import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from '../app/ProductDetail'
import Home from '../app/Home'
import Cart from '../app/Cart'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}
