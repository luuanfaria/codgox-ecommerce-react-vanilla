import {
  Dispatch,
  ReactNode,
  createContext,
  useEffect,
  useReducer,
} from 'react'
import { CartItem, CartState } from '../types/cart'
import { Item } from '../types/product'

type CartAction =
  | { type: 'ADD_ITEM'; payload: Item }
  | { type: 'DECREASE_ITEM'; payload: number }
  | { type: 'REMOVE_ITEM'; payload: number }

const initialState: CartState = {
  items: [],
}

const loadStateFromLocalStorage = (): CartState => {
  try {
    const serializedState = localStorage.getItem('cartState')

    if (serializedState === null) return initialState

    return JSON.parse(serializedState)
  } catch (err) {
    console.error('Could not load state from localStorage', err)
    return initialState
  }
}

const saveStateToLocalStorage = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('cartState', serializedState)
  } catch (err) {
    console.error('Could not save state to localStorage', err)
  }
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      )

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantidade: item.quantidade + 1 }
              : item,
          ),
        }
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantidade: 1 }],
        }
      }
    }

    case 'DECREASE_ITEM':
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantidade: item.quantidade - 1 }
              : item,
          )
          .filter((item) => item.quantidade > 0),
      }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }

    default:
      return state
  }
}

const getTotalItems = (items: CartItem[]) => {
  return items.reduce((total, item) => total + item.quantidade, 0)
}

const getTotalPrice = (items: CartItem[]) => {
  return items.reduce((total, item) => total + item.preco * item.quantidade, 0)
}

const CartContext = createContext<{
  state: CartState
  dispatch: Dispatch<CartAction>
  getTotalItems: () => number
  getTotalPrice: () => number
}>({
  state: initialState,
  dispatch: () => null,
  getTotalItems: () => 0,
  getTotalPrice: () => 0,
})

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, loadStateFromLocalStorage())

  useEffect(() => {
    saveStateToLocalStorage(state)
  }, [state])

  const totalItems = getTotalItems(state.items)
  const totalPrice = getTotalPrice(state.items)

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        getTotalItems: () => totalItems,
        getTotalPrice: () => totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext }
