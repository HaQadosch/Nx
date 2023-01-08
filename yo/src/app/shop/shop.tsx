import styles from './shop.module.css';

/* eslint-disable-next-line */
export interface ShopProps {}

export function Shop(props: ShopProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Shop!</h1>
    </div>
  );
}

export default Shop;
