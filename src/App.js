import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Signin from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path='/shop' element={<Shop />}/> 
        <Route path='/auth' element={<Signin />}/> 
        <Route path='/checkout' element={<Checkout />}/> 
      </Route>
    </Routes>
  );
};

export default App;
