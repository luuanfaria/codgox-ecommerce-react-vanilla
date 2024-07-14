import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from '../app/Product'
import Home from '../app/Home'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}
