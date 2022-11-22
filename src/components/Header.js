function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img className="mr-15" width={40} height={40} src="/img/logo.png" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li className="d-flex mr-30 align-center">
          <img width={18} height={18} src="/img/cart.svg" />
          <span>1205 руб.</span>
        </li>
        <li className="mr-30">
          <img width={21} height={19} src="/img/heart.svg" />
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" />
        </li>
      </ul>
    </header>
  );
}

export default Header
