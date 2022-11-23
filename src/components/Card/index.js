import style from './Card.module.scss'

console.log(style)

function Card(props) {

  return (
    <div className={style.card}>
      <div className={style.favorite}>
        <img src="/img/heart-before.svg" alt="Heart" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button className="button" onClick={props.onClickButton}>
          <img src="/img/btn-add.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
