import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import AllProduct from './Components/AllProduct/AllProduct';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import FeedbackManager from './Components/FeedbackManager/FeedManager';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<AllProduct />} />
        <Route path='Feedback' element={<FeedbackManager />} />
      </Route>
      <Route path='Detail' element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
