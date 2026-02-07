import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetailsPage = () => {
    const { id } = useParams();
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

    // Generate fake "more images" for demo purposes using other assets in the folder
    // In a real app, these would come from the product object
    const extraImages = [
        product.image,
        `/aldora/${(product.id % 12) + 13}.jpeg`,
        `/aldora/${(product.id % 12) + 25}.jpeg`,
        `/aldora/${(product.id % 12) + 37}.jpeg`
    ];

    return (
        <div style={styles.container}>
            <div style={styles.detailsSection}>
                <div style={styles.gallery}>
                    <div style={styles.mainImageContainer}>
                        <img src={activeImage} alt={product.name} style={styles.mainImage} />
                    </div>
                    <div style={styles.thumbnails}>
                        {extraImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`thumbnail ${index}`}
                                style={{
                                    ...styles.thumbnail,
                                    border: activeImage === img ? '2px solid #000' : '2px solid transparent'
                                }}
                                onClick={() => setActiveImage(img)}
                            />
                        ))}
                    </div>
                </div>

                <div style={styles.info}>
                    <h1 style={styles.title}>{product.name}</h1>
                    <div style={styles.priceContainer}>
                        <span style={styles.price}>{product.price} ج.م</span>
                        {product.badge && <span style={styles.badge}>{product.badge}</span>}
                    </div>

                    <div style={styles.description}>
                        <h3>تفاصيل المنتج</h3>
                        <p>
                            هذا المنتج من أفضل منتجات الدورا. يتميز بجودة عالية وخامات ممتازة
                            تضمن لك الراحة والنوم العميق. متوفر بمقاسات مختلفة لتناسب جميع الاحتياجات.
                        </p>
                        <ul style={styles.features}>
                            <li>ارتفاع: {product.name.split(' ').find(w => !isNaN(parseInt(w)) && w !== "24") || "25"} سم</li>
                            <li>ضمان الماني</li>
                            <li>شاسيه سوست معالج ضد الصدأ</li>
                            <li>طبقات قطن ممتازة</li>
                        </ul>
                    </div>

                    <div style={styles.actions}>
                        <button style={styles.addToCartBtn}>أضف إلى السلة</button>
                        <button style={styles.whatsappBtn}>طلب عبر الواتساب</button>
                    </div>
                </div>
            </div>

            <div style={styles.similarSection}>
                <h2 style={styles.sectionTitle}>منتجات مشابهة</h2>
                <div style={styles.grid}>
                    {similarProducts.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
    },
    detailsSection: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        marginBottom: '4rem',
    },
    gallery: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    mainImageContainer: {
        width: '100%',
        height: '400px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        overflow: 'hidden',
    },
    mainImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    thumbnails: {
        display: 'flex',
        gap: '10px',
        overflowX: 'auto',
    },
    thumbnail: {
        width: '80px',
        height: '80px',
        objectFit: 'cover',
        cursor: 'pointer',
        borderRadius: '4px',
        transition: 'all 0.2s',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '1rem',
        color: '#1a1a1a',
    },
    priceContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '2rem',
    },
    price: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#000',
    },
    badge: {
        backgroundColor: '#f4b400',
        color: '#000',
        padding: '4px 12px',
        borderRadius: '20px',
        fontWeight: 'bold',
        fontSize: '0.9rem',
    },
    description: {
        marginBottom: '2rem',
        lineHeight: '1.6',
        color: '#666',
    },
    features: {
        marginTop: '1rem',
        paddingRight: '1.2rem',
    },
    actions: {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
    },
    addToCartBtn: {
        flex: 1,
        backgroundColor: '#000',
        color: '#fff',
        padding: '15px 30px',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        minWidth: '200px',
    },
    whatsappBtn: {
        flex: 1,
        backgroundColor: '#25D366',
        color: '#fff',
        padding: '15px 30px',
        border: 'none',
        borderRadius: '4px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        minWidth: '200px',
    },
    similarSection: {
        marginTop: '4rem',
        borderTop: '1px solid #eee',
        paddingTop: '2rem',
    },
    sectionTitle: {
        fontSize: '1.8rem',
        marginBottom: '2rem',
        textAlign: 'center',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem',
    },
    // Mobile responsive adjustments would normally go in a CSS file or media query hook
};

export default ProductDetailsPage;
