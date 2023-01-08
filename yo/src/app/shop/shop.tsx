import { Banner } from '@yo/shared/ui';
import { Link } from 'react-router-dom';
import styles from './shop.module.css';

/* eslint-disable-next-line */
export interface ShopProps { }

export function Shop (props: ShopProps) {
  return (
    <div className={ styles['container'] }>
      <Banner text="Here is a list of products to buy..." />
      <Link to="/cart">View Cart</Link>
    </div>
  );
}

export default Shop;
