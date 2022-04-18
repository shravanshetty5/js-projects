import { useContext } from "react";
import { AppContext } from "./AppContext";

function CartPage() {
    return (
        <section className="cart-page">
            <h2>Your Cart</h2>
            <CartList />
            <Total />
            <CartActions />
        </section>
    );
}
function CartList() {
    const { cartList } = useContext(AppContext);
    return (
        <>
            {cartList.map((item) => {
                return <CartItem {...item} key={item.id} />;
            })}
        </>
    );
}
function Total() {
    const { cartTotal } = useContext(AppContext);

    return (
        <div className="total-container">
            <h4>Total</h4>
            <h4>${cartTotal}</h4>
        </div>
    );
}
function CartActions() {
    return <div>CartSummary</div>;
}

function CartItem({ id, name, count, price, url }) {
    const { updateCount, removeItem } = useContext(AppContext);

    return (
        <div className="item-container">
            <div className="logo"></div>
            <h4 className="name">{name}</h4>
            <div className="price">${price}</div>
            <button
                type="button"
                className="remove-item"
                onClick={(ev) => {
                    ev.preventDefault();
                    removeItem(id);
                }}
            >
                remove
            </button>
            <button
                aria-label="increment"
                type="button"
                className="increment-count"
                onClick={(ev) => {
                    ev.preventDefault();
                    updateCount(id, +count + 1);
                }}
            >
                +
            </button>
            <div className="count">{count}</div>
            <button
                aria-label="decrement"
                type="button"
                className="decrement-count"
                onClick={(ev) => {
                    ev.preventDefault();
                    updateCount(id, +count - 1);
                }}
            >
                -
            </button>
        </div>
    );
}
export default CartPage;
