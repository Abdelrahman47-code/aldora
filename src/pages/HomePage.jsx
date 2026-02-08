import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const HomePage = () => {
    const [productList] = useState(products);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    // Logic for displaying products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productList.slice(indexOfFirstProduct, indexOfLastProduct);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(productList.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div style={styles.main}>
            <div style={styles.titleSection}>
                <h1 style={styles.pageTitle}>مراتب الدورا</h1>
                <p style={styles.breadcrumb}>الرئيسية / مراتب الدورا</p>
            </div>

            <div style={styles.gridContainer}>
                {currentProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {pageNumbers.length > 1 && (
                <div style={styles.pagination}>
                    <button
                        onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                        style={{ ...styles.pageBtn, ...{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer', opacity: currentPage === 1 ? 0.5 : 1 } }}
                        disabled={currentPage === 1}
                    >
                        &lt;
                    </button>

                    {pageNumbers.map(number => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            style={currentPage === number ? styles.activePageBtn : styles.pageBtn}
                        >
                            {number}
                        </button>
                    ))}

                    <button
                        onClick={() => paginate(currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)}
                        style={{ ...styles.pageBtn, ...{ cursor: currentPage === pageNumbers.length ? 'not-allowed' : 'pointer', opacity: currentPage === pageNumbers.length ? 0.5 : 1 } }}
                        disabled={currentPage === pageNumbers.length}
                    >
                        &gt;
                    </button>
                </div>
            )}
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
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginTop: '3rem',
        direction: 'ltr', // Force LTR to ensure < on left and > on right
    },
    pageBtn: {
        padding: '8px 16px',
        border: '1px solid #ddd',
        backgroundColor: '#fff',
        cursor: 'pointer',
        fontSize: '1rem',
        borderRadius: '4px',
        transition: 'all 0.3s',
        color: '#333',
    },
    activePageBtn: {
        padding: '8px 16px',
        border: '1px solid #D32F2F', // Red color
        backgroundColor: '#D32F2F',
        color: '#fff',
        cursor: 'default',
        fontSize: '1rem',
        borderRadius: '4px',
        fontWeight: 'bold',
    },
};

export default HomePage;
