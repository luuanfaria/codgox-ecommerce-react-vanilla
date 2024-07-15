import { useParams } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import IconButton from '@mui/material/IconButton'

import { useCart } from '../../hooks/useCart'
import { itemsParaCompra } from '../../utils/utils'
import { CartItem } from '../../types/cart'
import { Item } from '../../types/product'
import { formatCurrency } from '../../utils/currency'

import styles from './styles.module.css'

export default function ProductDetail() {
  const { id } = useParams()
  const { dispatch } = useCart()
  const product = itemsParaCompra.find((item) => item.id === parseInt(id!, 10))

  if (!product) {
    return <p>Produto não encontrado.</p>
  }

  function handleAddItem(item: Item) {
    const cartItem: CartItem = { ...item, quantidade: 1 }
    dispatch({ type: 'ADD_ITEM', payload: cartItem })
  }

  return (
    <div className={styles.container}>
      <div className={styles.image} />
      <div className={styles.details}>
        <h3>{product.nome}</h3>
        <p>{product.descricao}</p>

        <div className={styles.actions}>
          <span>{formatCurrency.format(product.preco)}</span>
          <IconButton onClick={() => handleAddItem(product)}>
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
