import { useCart } from '../../hooks/useCart'

import { Divider } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import { CartItem } from '../../types/cart'

import IconButton from '@mui/material/IconButton'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'

import styles from './styles.module.css'
import { formatCurrency } from '../../utils/currency'

export default function Cart() {
  const { state, dispatch, getTotalPrice } = useCart()

  function handleAddItem(item: CartItem) {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  function handleRemoveItem(id: number) {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  function handleDecreaseItem(id: number) {
    dispatch({ type: 'DECREASE_ITEM', payload: id })
  }

  return (
    <div>
      <h1>Suas compras</h1>
      {state.items.map((item) => (
        <div key={item.id} className={styles.content}>
          <span className={styles.details}>
            {item.quantidade}x {item.nome}
          </span>
          <IconButton onClick={() => handleAddItem(item)}>
            <Add />
          </IconButton>
          <IconButton
            onClick={() => handleDecreaseItem(item.id)}
            disabled={item.quantidade <= 1}
          >
            <Remove />
          </IconButton>
          <IconButton onClick={() => handleRemoveItem(item.id)}>
            <DeleteSweepIcon />
          </IconButton>
        </div>
      ))}

      <Divider />

      {state.items.length > 0 ? (
        <p>
          <span className={styles.total}>Total:</span>{' '}
          {formatCurrency.format(getTotalPrice())}
        </p>
      ) : (
        <p>
          Seu carrinho de compras está vazio, adicione produtos para ver na
          lista.
        </p>
      )}
    </div>
  )
}
