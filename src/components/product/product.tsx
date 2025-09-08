import styles from './product.module.css';
import ProductContent from '@/content/product';

const Product = () => {
    return (
        <div id={styles.productHeader}>
          <h2>{ProductContent.header}</h2>
          <p>
            {ProductContent.statement}
          </p>
          <br />
          <h3>{ProductContent.secondHeader}</h3>
          <p>
            {ProductContent.catchLine}
          </p>
          <br />
          {ProductContent.tipTagline}
          <ol type="1">
            {ProductContent.list.map((tip, index) => (
                <li key={index}>
                    {tip}
                </li>
            ))}
          </ol>
        </div>
    )
};

export default Product;