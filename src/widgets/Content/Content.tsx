import { ProductsList } from '../../entities';
import styles from './Content.module.scss';

export const Content = () => {
    return (
        <div className={styles.content}>
            <ProductsList />
        </div>
    )
}
export default Content