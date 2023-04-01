import NavBar from './components/sections/NavBar';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Checkout from './pages/Checkout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// @ts-ignore
import { StateProvider } from './global'
import './App.css';

function App() {
  // Initial state of the cart on client side

  const initialState = {
    cart: []
  }

  // Reducer function to update the state of the cart on client side

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'CALCULATE_TOTAL':
        return {
          ...state,
          total: action.total
        };

      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, action.item]
        };
      case 'REMOVE_FROM_CART':
        const index = state.cart.findIndex(
          (cartItem: any) => cartItem.id === action.id
        );
        let newCart = [...state.cart];
        if (index >= 0) {
          newCart.splice(index, 1);
        }
        return {
          ...state,
          cart: newCart
        };
      default:
        return state;
    }
  }
  return (
    <StateProvider initialState={initialState} reducer={reducer}>

      <div className="App mx-auto">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="checkout" element={<Checkout />} />
          </Routes>

        </BrowserRouter>
        {/* <Footer/> */}
      </div>
    </StateProvider>

  );
}

export default App;
