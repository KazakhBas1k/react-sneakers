function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between align-center mb-30">
          Корзина
          <button className="button removeBtn">
            <img src="/img/btn-remove.svg" alt="Remove Button" />
          </button>
        </h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              src="/img/sneakers/2.jpg"
              alt="Sneakers"
            />
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <button className="button removeBtn">
              <img src="/img/btn-remove.svg" alt="Remove Button" />
            </button>
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              src="/img/sneakers/4.jpg"
              alt="Sneakers"
            />
            <div>
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>8 999 руб.</b>
            </div>
            <button className="button removeBtn">
              <img src="/img/btn-remove.svg" alt="Remove Button" />
            </button>
          </div>
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
    </div>
  );
}

export default Drawer;
