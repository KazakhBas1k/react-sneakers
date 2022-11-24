import Card from "../components/Card";

function Favorite({ items, onAddToFav }) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="cardBlock">
        {items.map((item, index) => (
          <Card key={index} favorited={true} onFav={onAddToFav} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
