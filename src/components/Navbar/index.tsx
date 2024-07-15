import Badge, { BadgeProps } from '@mui/material/Badge'
import styles from './styles.module.css'

import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useCart } from '../../hooks/useCart'

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

export function Navbar() {
  const { getTotalItems } = useCart()

  return (
    <nav className={styles.container}>
      <a href="/" className={styles.title}>
        <span>Home</span>
      </a>

      <a href="/cart">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={getTotalItems()} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </a>
    </nav>
  )
}
