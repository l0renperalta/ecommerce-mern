import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProducts } from '../service';
import { CartContext } from '../contexts/CartContext';

function Products() {
  const [products, setProducts] = useState({ errorMessage: '', data: [] });
  const params = useParams();
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const { addProduct } = cartContext;

  useEffect(() => {
    getProducts(params.categoriesId).then((obj) => setProducts(obj));
  }, [params.categoriesId]);

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.errorMessage && <div>Error: {products.errorMessage}</div>}
          {products.data.map((p) => (
            <div className="col mb-5" key={p.id}>
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
                  Sale
                </div>
                <Link to={`/product/${p.id}`}>
                  <img className="card-img-top" src={`../assets/${p.image}`} alt="..." />
                </Link>
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder" onClick={() => navigate(`/product/${p.id}`)} style={{ cursor: 'pointer' }}>
                      {p.title}
                    </h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    <span className="text-muted text-decoration-line-through">${p.price + p.price * 0.1}.00</span>${p.price}.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark mt-auto" onClick={() => addProduct({ id: p.id, title: p.title, price: p.price })}>
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
