import { Fragment } from 'react/jsx-runtime'
import { Product } from '../../components/Product'
import { itemsParaCompra } from '../../utils/utils'
import styles from './styles.module.css'

export default function Home() {
  return (
    <section className={styles.productList}>
      {itemsParaCompra.map((item) => (
        <Fragment key={item.id}>
          <Product
            id={item.id}
            nome={item.nome}
            preco={item.preco}
            descricao={item.descricao}
          />
        </Fragment>
      ))}
    </section>
  )
}
