import "./Bottle.css";

export default function Bottel({ bottle, handleSetCarts }) {
  // console.log("bottles in bottel component", bottle);
  const { name, price, img } = bottle;

  return (
    <div className="bottle-card">
      <h3>Bottle:{name}</h3>
      <img src={img} alt="" />
      <p>Price: ${price}</p>
      <button onClick={() => handleSetCarts(bottle)}>add to cart</button>
    </div>
  );
}
