import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

function Cart() {
  const { getItems, decreaseQuantity, increaseQuantity, removeProduct, clearCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getItems());
  }, [getItems]);

  const renderCart = () => {
    if (cartItems.length > 0) {
      return cartItems.map((e) => (
        <div key={e.id} className="row mb-4 d-flex justify-content-between align-items-center">
          <div className="col-md-2 col-lg-2 col-xl-2">
            <img src={`../assets/${e.image}`} className="img-fluid rounded-3" alt="Cotton T-shirt" />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <h6 className="text-black mb-0">{e.title}</h6>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button className="btn btn-link px-2" onClick={() => setCartItems(decreaseQuantity({ id: e.id }))}>
              <i className="fas fa-minus"></i>
            </button>

            <input id="form1" min="0" name="quantity" value={e.quantity} type="number" className="form-control form-control-sm" />

            <button className="btn btn-link px-2" onClick={() => increaseQuantity({ id: e.id })}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h6 className="mb-0">${e.price}.00</h6>
          </div>
          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
            <a href="#!" className="text-muted" onClick={() => removeProduct({ id: e.id })}>
              <i className="fas fa-times"></i>
            </a>
          </div>
        </div>
      ));
    } else {
      return <div>Cart is currently empty</div>;
    }
  };

  const renderTotal = () => {
    const cartItems = getItems();
    const total = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    return total;
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: '#eeeeee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card card-registration card-registration-2" style={{ borderRadius: '15px' }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">3 items</h6>
                      </div>
                      <hr className="my-4" />
                      {renderCart()}
                      <hr className="my-4" />

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <div className="text-body d-flex justify-content-between align-items-center mb-5">
                            <div>
                              <i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop
                            </div>
                            <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark" onClick={() => setCartItems(clearCart())}>
                              Clear Cart
                            </button>
                          </div>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">items 3</h5>
                        <h5>${renderTotal()}.00</h5>
                      </div>

                      <h5 className="text-uppercase mb-3">Shipping</h5>

                      <div className="mb-4 pb-2">
                        <select className="select">
                          <option>Standard-Delivery- €5.00</option>
                          <option>Two</option>
                          <option>Three</option>
                          <option>Four</option>
                        </select>
                      </div>

                      <h5 className="text-uppercase mb-3">Give code</h5>

                      <div className="mb-5">
                        <div className="form-outline">
                          <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Examplea2">
                            Enter your code
                          </label>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>€ 137.00</h5>
                      </div>

                      <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
