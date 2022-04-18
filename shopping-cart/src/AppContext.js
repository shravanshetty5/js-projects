import { createContext, useState } from "react";
import data from "./data.json";

const AppContext = createContext(undefined);

function AppProvider(props) {
    const [cartList, setCartList] = useState(data.sort((a, b) => a.id - b.id));
    const updateCount = (id, count) => {
        if (count === 0) {
            removeItem(id);
            return;
        }
        setCartList((cartList) => {
            //find itemIndex
            const newList = [...cartList];
            const itemIndex = newList.findIndex((item) => item.id === id);
            const newItem = { ...newList[itemIndex], count };
            newList[itemIndex] = newItem;
            return newList;
        });
    };

    const removeItem = (id) => {
        setCartList((cartList) => {
            const newList = cartList.filter((item) => item.id !== id);
            return newList;
        });
    };

    const getTotalCartCount = (cartList) => {
        return cartList.reduce((count, item) => (count += item.count), 0);
    };
    const totalCartCount = getTotalCartCount(cartList);
    const getTotal = (cartList) => {
        return cartList.reduce(
            (total, item) => (total += +item.price * +item.count),
            0
        );
    };
    const cartTotal = getTotal(cartList);
    return (
        <AppContext.Provider
            value={{
                cartList,
                setCartList,
                updateCount,
                removeItem,
                totalCartCount,
                cartTotal,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}
export { AppContext, AppProvider };
