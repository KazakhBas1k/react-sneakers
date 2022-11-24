function Drawer({ onCloseCart, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between align-center mb-30">
          Корзина
          <button className="button removeBtn" onClick={onCloseCart}>
            <img src="/img/btn-remove.svg" alt="Remove Button" />
          </button>
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
                  <img
                    className="mr-20"
                    width={70}
                    src={obj.imageUrl}
                    alt="Sneakers"
                  />
                  <div>
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <button
                    onClick={() => onRemove(obj.id)}
                    className="button removeBtn"
                  >
                    <img src="/img/btn-remove.svg" alt="Remove Button" />
                  </button>
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб. </b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ
                <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/empty-cart.jpg"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button onClick={onCloseCart} className="greenButton">
              <img src="/img/arrow.svg" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
