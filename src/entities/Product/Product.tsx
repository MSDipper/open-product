import { ProductProps } from "./Product.props";
import styles from './Product.module.scss';
import { Button, Image, Title } from "../../shared/ui";

export const Product = ({ }: ProductProps) => {
    return (
        <div className={styles.component}>
            <div>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdk5ijcsq4PFXlfss1vXUvsl_Liu0utqmrS-M7ZNM7YalkbgEpLjRFF3J2_9A7X_gfUNM&usqp=CAU' alt="" />
                <div className={styles.content}>
                    <p>33.00&#8381;</p>
                    <p className={styles.text}>
                        Это затычка в виде описания под этим постом в виде затычки вроде пока пойдет посмотрим потом на что можно будет поменять на текст рыбу вполне.
                    </p>
                    <div>
                        <Button>Добавить в корзину</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product