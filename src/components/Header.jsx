import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.topBar}>
                <span>خصومات هائلة لفترة محدودة!</span>
            </div>
            <div style={styles.navContainer}>
                <div style={styles.logo}>ALDORA</div>
                <nav style={styles.nav}>
                    <a href="#" style={styles.link}>الرئيسية</a>
                    <a href="#" style={styles.link}>المراتب</a>
                    <a href="#" style={styles.link}>المفروشات</a>
                    <a href="#" style={styles.link}>اتصل بنا</a>
                </nav>
                <div style={styles.icons}>
                    <span style={styles.icon}>🔍</span>
                    <span style={styles.icon}>🛒</span>
                    <span style={styles.icon}>👤</span>
                </div>
            </div>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#fff',
        borderBottom: '1px solid #eee',
    },
    topBar: {
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        padding: '8px',
        fontSize: '0.9rem',
    },
    navContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        letterSpacing: '2px',
    },
    nav: {
        display: 'flex',
        gap: '20px',
    },
    link: {
        fontWeight: '600',
        fontSize: '1rem',
    },
    icons: {
        display: 'flex',
        gap: '15px',
        fontSize: '1.2rem',
        cursor: 'pointer',
    }
};

export default Header;
