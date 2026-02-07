import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const HomePage = () => {
    const [productList] = useState(products);

    return (
        <div style={styles.main}>
            <div style={styles.titleSection}>
                <h1 style={styles.pageTitle}>مراتب الدورا</h1>
                <p style={styles.breadcrumb}>الرئيسية / مراتب الدورا</p>
            </div>

            <div style={styles.gridContainer}>
                {productList.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

const styles = {
    main: {
        flex: 1,
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        padding: '2rem',
    },
    titleSection: {
        textAlign: 'center',
        marginBottom: '3rem',
    },
    pageTitle: {
        fontSize: '2.5rem',
        color: '#1a1a1a',
        marginBottom: '0.5rem',
    },
    breadcrumb: {
        color: '#666',
        fontSize: '0.9rem',
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem',
    },
};

export default HomePage;
