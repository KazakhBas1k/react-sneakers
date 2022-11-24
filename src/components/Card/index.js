import style from "./Card.module.scss";
import React from "react";

function Card({
  id,
  title,
  imageUrl,
  price,
  onFav,
  onPlus,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const [isFav, setIsFav] = React.useState(favorited);
  const onClickFav = () => {
    onFav({id, title, imageUrl, price });
    setIsFav(!isFav);
  };

  return (
    <div className={style.card}>
      <img
        className="cu-p pos-a"
        src={isFav ? "/img/heart-after.svg" : "/img/heart-before.svg"}
        alt="Heart"
        onClick={onClickFav}
      />
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className="cu-p"
          src={isAdded ? "/img/btn-added.svg" : "/img/btn-add.svg"}
          alt="Plus"
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
}

export default Card;
