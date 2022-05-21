import { Button } from "reactstrap";

export default function AsideTop({ cartItems }) {
  const itemCount = cartItems.length;
  const total = cartItems.reduce((prev, curr) => {
    return prev + curr.price * curr.count;
  }, 0);

  return (
    <div className="right-top">
      <Button color="primary" size="sm">
        Got to checkout
      </Button>
      <div className="right">
        <span>Items ({itemCount})</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="right">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <hr />
      <div className="right">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
