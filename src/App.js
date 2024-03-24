import Signup from './components/Signup';
import ProductPage from './components/ProductPage';
import { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('signup');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Navigation bar */}
      <div className="navbar">
        <button onClick={() => navigateTo('signup')}>Signup</button>
        <button onClick={() => navigateTo('product')}>Product Page</button>
      </div>

      {/* Conditional rendering based on currentPage state */}
      {currentPage === 'signup' && <Signup />}
      {currentPage === 'product' && <ProductPage />}
    </div>
  );
}



export default App;
