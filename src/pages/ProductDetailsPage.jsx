import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import './ProductDetailsPage.css';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [activeImage, setActiveImage] = useState('');

    useEffect(() => {
        const foundProduct = products.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
        if (foundProduct) {
            setActiveImage(foundProduct.image);

            // Get similar products (exclude current one)
            const others = products.filter(p => p.id !== foundProduct.id);
            // Shuffle and pick 4
            const shuffled = others.sort(() => 0.5 - Math.random());
            setSimilarProducts(shuffled.slice(0, 4));
        }
        window.scrollTo(0, 0); // Scroll to top on navigation
    }, [id]);

    if (!product) return <div style={{ padding: '2rem', textAlign: 'center' }}>المنتج غير موجود</div>;

    const handleAddToCart = () => {
        addToCart(product);
        alert('تمت الإضافة للسلة بنجاح');
    };

    const handleWhatsAppOrder = () => {
        const message = `أود الاستفسار عن: ${product.name} - السعر: ${product.price} ج.م`;
        const waNumber = '201152288233';
        window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    // Generate fake "more images" for demo purposes
    const extraImages = [
        product.image,
        `/aldora/${(product.id % 12) + 1}.jpeg`,
        `/aldora/${(product.id % 12) + 2}.jpeg`,
        `/aldora/${(product.id % 12) + 3}.jpeg`
    ];

    return (
        <div className="product-container">
            <div className="details-section">
                <div className="gallery">
                    <div className="main-image-container">
                        <img src={activeImage} alt={product.name} className="main-image" />
                    </div>
                    <div className="thumbnails">
                        {extraImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`thumbnail ${index}`}
                                className={`thumbnail ${activeImage === img ? 'active' : ''}`}
                                onClick={() => setActiveImage(img)}
                                onError={(e) => e.target.style.display = 'none'} // Hide broken images
                            />
                        ))}
                    </div>
                </div>

                <div className="product-info">
                    <h1 className="product-title">{product.name}</h1>
                    <div className="price-container">
                        <span className="price">{product.price} ج.م</span>
                        {product.badge && <span className="badge">{product.badge}</span>}
                    </div>

                    <div className="description">
                        <h3>تفاصيل المنتج</h3>
                        <p>
                            هذا المنتج من أفضل منتجات الدورا. يتميز بجودة عالية وخامات ممتازة
                            تضمن لك الراحة والنوم العميق. متوفر بمقاسات مختلفة لتناسب جميع الاحتياجات.
                        </p>
                        <ul className="features">
                            <li>ارتفاع: {product.name.split(' ').find(w => !isNaN(parseInt(w)) && w !== "24") || "25"} سم</li>
                            <li>ضمان الماني</li>
                            <li>شاسيه سوست معالج ضد الصدأ</li>
                            <li>طبقات قطن ممتازة</li>
                        </ul>
                    </div>

                    <div className="actions">
                        <button onClick={handleAddToCart} className="add-to-cart-btn">أضف إلى السلة</button>
                        <button onClick={handleWhatsAppOrder} className="whatsapp-btn">طلب عبر الواتساب</button>
                    </div>
                </div>
            </div>

            <div className="similar-section">
                <h2 className="sectionTitle">منتجات مشابهة</h2>
                <div className="similar-grid">
                    {similarProducts.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
