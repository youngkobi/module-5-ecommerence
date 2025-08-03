import React from "react";

const Cart = () => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__quantity">Price</span>
              </div>
              <div className="cart__body">
                <div className="cart__item">
                  <div className="cart__book">
                    <img
                      src="https://m.media-amazon.com/images/I/71vK0WVQ4rL._AC_UF1000,1000_QL80_.jpg"
                      className="cart__book--img"
                      alt=""
                    />
                    <div className="cart__book--info">
                      <span className="cart__book--title">Crack the COde</span>
                      <span className="cart__book--price">10</span>
                      <button className="cart__book--remove"> Remove</button>
                    </div>
                  </div>
                  <div className="cart__quantity">
                    <input type="number" min={0} max={99} class="cart__input" />
                  </div>
                  <div className="cart__total">$10</div>
                </div>
              </div>
            </div>
            <div className="total">
                <div className="total__item total__sub-total">
                    <span>Subtotal</span>
                    <span>$9</span>
                </div>
                <div className="total__item total__tax">
                    <span>Tax</span>
                    <span>$1</span>
                </div>
                <div className="total__item total__price">
                    <span>Total</span>
                    <span>$10</span>
                </div>
                <button className="btn btn__checkout no-cursor" onClick={() => alert(`Haven't got around to doing this :(`)}>
                    Proceed to checkout
                </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
