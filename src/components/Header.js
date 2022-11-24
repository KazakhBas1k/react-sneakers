import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img className="mr-15" width={40} height={40} src="img/logo.png" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex align-center">
        <li className="d-flex mr-30 align-center">
          <img
            onClick={props.onClickCart}
            className="cu-p"
            width={18}
            height={18}
            src="img/cart.svg"
          />
          <span>1205 руб.</span>
        </li>
        <li className="mr-30">
          <Link to="favorites">
            <img className="cu-p" width={21} height={19} src="img/heart.svg" />
          </Link>
        </li>
        <li>
          <img className="cu-p" width={20} height={20} src="img/user.svg" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
