import { Item } from './product'

export interface CartItem extends Item {
  quantidade: number
}

export interface CartState {
  items: CartItem[]
}
