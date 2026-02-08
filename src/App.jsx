import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
    return (
        <CartProvider>
            <FavoritesProvider>
                <Router>
                    <ScrollToTop />
                    <div style={styles.app}>
                        <Header />
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/product/:id" element={<ProductDetailsPage />} />
                            <Route path="/cart" element={<CartPage />} />
                            <Route path="/checkout" element={<CheckoutPage />} />
                            <Route path="/favorites" element={<FavoritesPage />} />
                        </Routes>
                        <Footer />
                    </div>
                </Router>
            </FavoritesProvider>
        </CartProvider>
    );
}

const styles = {
    app: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
};

export default App;
