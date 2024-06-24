import './app.css';
import { Store } from './components/Store'

import products from "./products.json";

export function App() {

  return (
    <div className='App'>
      <Store products={products} />
    </div>
  )
}
