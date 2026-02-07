import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.column}>
                    <h3>تواصل معنا</h3>
                    <p>admin@nexttshop.com</p>
                    <p>00201009509991</p>
                    <p>16284</p>
                </div>
                <div style={styles.column}>
                    <h3>روابط هامة</h3>
                    <ul style={styles.list}>
                        <li><a href="#">سياسة الاستبدال والارجاع</a></li>
                        <li><a href="#">سياسة الخصوصية</a></li>
                        <li><a href="#">طرق الدفع</a></li>
                        <li><a href="#">سياسة الشحن</a></li>
                    </ul>
                </div>
                <div style={styles.column}>
                    <h3>معلومات تهمك</h3>
                    <ul style={styles.list}>
                        <li><a href="#">حول شركتنا</a></li>
                        <li><a href="#">الأسئلة الشائعة</a></li>
                        <li><a href="#">تواصل معنا</a></li>
                    </ul>
                </div>
                <div style={styles.column}>
                    <h3>فروعنا</h3>
                    <ul style={styles.list}>
                        <li><a href="#">فرع المقطم</a></li>
                        <li><a href="#">فرع التجمع</a></li>
                        <li><a href="#">فرع المعادي</a></li>
                        <li><a href="#">فرع الزقازيق</a></li>
                    </ul>
                </div>
            </div>
            <div style={styles.copy}>
                &copy; 2026 Aldora. All rights reserved.
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: '3rem 0',
        marginTop: '3rem',
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    copy: {
        textAlign: 'center',
        marginTop: '3rem',
        paddingTop: '1rem',
        borderTop: '1px solid #333',
        color: '#888',
    }
};

export default Footer;
