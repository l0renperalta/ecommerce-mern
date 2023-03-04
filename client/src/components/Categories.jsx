import { Link } from 'react-router-dom';

function Categories({ categories }) {
  return (
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
      {categories.errorMessage && <li>Error: {categories.errorMessage}</li>}
      {categories.data.map((c) => (
        <li key={c.id}>
          <Link to={`categories/${c.id}`} className="dropdown-item">
            {c.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
