import React from 'react';

function Categories({ categories, renderProducts, renderAllProducts }) {
  return (
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
      <li>
        <a className="dropdown-item" href="#!" onClick={() => renderAllProducts()}>
          All Products
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      {categories.errorMessage && <li>Error: {categories.errorMessage}</li>}
      {categories.data.map((c) => (
        <li key={c.id}>
          <a className="dropdown-item" href="#!" onClick={() => renderProducts(c.id)}>
            {c.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
