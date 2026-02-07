import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
    return (
        <Router>
            <div style={styles.app}>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductDetailsPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
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
