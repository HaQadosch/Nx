import { RoutesCart } from '@yo/cart';
import { Route, Routes } from 'react-router-dom';
import Shop from './shop/shop';

export function App () {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Shop /> }></Route>
        <Route path="/cart" element={ <RoutesCart /> }></Route>
      </Routes>
    </>
  );
}

export default App;
