import { useContext } from "react";
import "./App.css";
import { AppContext, AppProvider } from "./AppContext";
import CartPage from "./CartPage";
function App() {
    return (
        <AppProvider>
            <div className="App">
                <header className="App-header">
                    <nav>
                        {/* logo */}
                        <CartSummary />
                    </nav>
                </header>
                <main>
                    <CartPage />
                </main>
            </div>
        </AppProvider>
    );
}

function CartSummary() {
    const { totalCartCount } = useContext(AppContext);

    return (
        <div className="cart-container">
            {/* cart image */}
            <div className="item-count">
                {`cart contains ${totalCartCount} items`}
            </div>
        </div>
    );
}

export default App;
