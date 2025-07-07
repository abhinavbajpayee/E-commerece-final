
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import {Shop} from './Pages/Shop';
import { Hero } from './Components/Hero/Hero';
import { Link } from 'react-router-dom'; // Add this line
function App() {
  return (
    <div >
      
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/'element={<Shop/>}/>
      <Route path='/mens'element={<ShopCategory category="men"/>}/>
      <Route path='/womens'element={<ShopCategory category="women"/>}/>
      <Route path='/kids'element={<ShopCategory category="kid"/>}/>
      <Route path='/product' element={<product/>}>
      <Route path='productId' element={<product/>}/>
      </Route>
      <Route path='/cart'element={<cart/>}/>
      <Route path='/login'element={<loginSignup/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
