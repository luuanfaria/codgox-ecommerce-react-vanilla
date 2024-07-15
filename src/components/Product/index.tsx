import { useCart } from '../../hooks/useCart'
import { Item } from '../../types/product'
import IconButton from '@mui/material/IconButton'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { formatCurrency } from '../../utils/currency'
import styles from './styles.module.css'

export function Product({ id, nome, preco, descricao }: Item) {
  const { dispatch } = useCart()

  function handleAddToCart() {
    dispatch({ type: 'ADD_ITEM', payload: { id, nome, preco, descricao } })
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>{nome}</span>
      <p className={styles.description}>{descricao}</p>
      <div className={styles.details}>
        <span className={styles.price}>{formatCurrency.format(preco)}</span>
        <div>
          <a href={`/product/${id}`}>
            <IconButton className={styles.button}>
              <OpenInNewIcon />
            </IconButton>
          </a>
          <IconButton onClick={handleAddToCart} className={styles.button}>
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
