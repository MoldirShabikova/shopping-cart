import AsideBottom from "./AsideBottom";
import AsideTop from "./AsideTop";

export default function Aside({
  savedItems,
  handleItemRemoveFromSaved,
  handleAddBackItem,
  cartItems
}) {
  return (
    <aside className="common">
      <AsideTop cartItems={cartItems} />
      {savedItems.length > 0 && (
        <AsideBottom
          savedItems={savedItems}
          handleItemRemoveFromSaved={handleItemRemoveFromSaved}
          handleAddBackItem={handleAddBackItem}
        />
      )}
    </aside>
  );
}
