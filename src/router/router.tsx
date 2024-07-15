import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from '../app/Product'
import Home from '../app/Home'
import Cart from '../app/Cart'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}
