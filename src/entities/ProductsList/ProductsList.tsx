import { Product } from "../Product"
import { ProductsListProps } from "./ProdsuctsList.props"
import styles from './ProductsList.module.scss'

export const ProductsList = ({}: ProductsListProps) => {
    return (
        <div className={styles.component}>
            <Product />
        </div>
    )
}
export default ProductsList