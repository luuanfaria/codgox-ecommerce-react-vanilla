import { Navbar } from './components/Navbar'
import { CartProvider } from './context/CartContext'
import Router from './router/router'
import Container from '@mui/material/Container'

function App() {
  return (
    <CartProvider>
      <Container maxWidth="md">
        <Navbar />
        <Router />
      </Container>
    </CartProvider>
  )
}

export default App
