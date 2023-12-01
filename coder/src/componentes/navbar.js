// Navbar.js

import React, { useState } from 'react';

const Navbar = () => {
  const [categories, setCategories] = useState([
    'Electrónicos',
    'Ropa',
    'Libros',
    'Hogar',
  ]);

  const handleCategoryClick = (category) => {
    // Aquí puedes manejar lo que sucede cuando se hace clic en una categoría
    console.log(`Clic en la categoría: ${category}`);
  };

  return (
    <nav>
      <div className="store-name">Nombre de tu Tienda</div>
      <ul className="categories-list">
        {categories.map((category, index) => (
          <li key={index} onClick={() => handleCategoryClick(category)}>
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
