import { Banner } from '@yo/shared/ui';
import { Link } from 'react-router-dom';
import styles from './cart.module.css';

/* eslint-disable-next-line */
export interface RoutesCartProps { }

export function RoutesCart (props: RoutesCartProps) {
  return (
    <div className={ styles['container'] }>
      <Banner text="Welcome to the cart." />
      <Link to="/">Continue Shopping</Link>
    </div>
  );
}

export default RoutesCart;
