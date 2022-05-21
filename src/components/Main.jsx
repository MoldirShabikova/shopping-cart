import ItemCard from "./ItemCard";

export default function Main({
  cartItems,
  handleItemRemoveFromCart,
  handleSaveForLater,
  handleItemCountIncDec
}) {
  return (
    <main className="common">
      {cartItems.map((item) => {
        return (
          <ItemCard
            key={item.id}
            item={item}
            handleItemCountIncDec={handleItemCountIncDec}
            handleSaveForLater={handleSaveForLater}
            handleItemRemoveFromCart={handleItemRemoveFromCart}
          />
        );
      })}
    </main>
  );
}
