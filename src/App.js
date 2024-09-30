import React, { useState } from 'react';
import ProductItem from './components/ProductItem';
import './App.css';

const App = () => {
  const [data, setData] = useState([
    {id: 1, name: 'Велосипед', price: 1000, count: 1}, 
    {id: 2, name: 'Самокат', price: 700, count: 1}, 
    {id: 3, name: 'Ролики', price: 1300, count: 2}, 
    {id: 4, name: 'Сноуборд', price: 19000, count: 4}    
  ]);

  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  const handleDelete = (id) => {
    setData(data.filter(product => product.id !== id));
  };

  const handleAddProduct = () => {
    const name = newProductName.trim();
    const price = Number(newProductPrice);
  
    if (name && price > 0) {
      const newProduct = {
        id: Date.now(),
        name,
        price,
        count: 1,
      };
      
      setData([...data, newProduct]);
      setNewProductName('');
      setNewProductPrice('');
    } else {
      alert('Пожалуйста, введите корректные данные товара.');
    }
  };

  return (
    <div className='Form'>
      <h1>Добавить новый товар</h1>
      <input
        type="text"
        placeholder="Имя продукта"
        value={newProductName}
        onChange={(e) => setNewProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Цена продукта"
        value={newProductPrice}
        onChange={(e) => setNewProductPrice(e.target.value)}
      />
      <button className='Add' onClick={handleAddProduct}>Добавить товар</button>
      <div className='Block'>
        {data.map((product) => (
          <ProductItem key={product.id} product={product} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default App;
