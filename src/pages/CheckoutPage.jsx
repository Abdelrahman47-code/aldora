import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CheckoutPage.css';

const governorates = [
    "القاهرة", "الجيزة", "الإسكندرية", "الدقهلية", "البحر الأحمر", "البحيرة", "الفيوم",
    "الغربية", "الإسماعيلية", "المنوفية", "المنيا", "القليوبية", "الوادي الجديد",
    "السويس", "أسوان", "أسيوط", "بني سويف", "بورسعيد", "دمياط", "الشرقية", "جنوب سيناء",
    "كفر الشيخ", "مطروح", "الأقصر", "قنا", "شمال سيناء", "سوهاج"
];

const CheckoutPage = () => {
    const { cart, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        governorate: '',
        notes: ''
    });

    if (cart.length === 0) {
        navigate('/cart');
        return null;
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate Phone (Egyptian Number)
        if (!/^01[0125][0-9]{8}$/.test(formData.phone)) {
            alert('يرجى إدخال رقم هاتف صحيح');
            return;
        }

        if (!formData.governorate) {
            alert('يرجى اختيار المحافظة');
            return;
        }

        // WhatsApp Order Format
        let message = `*طلب جديد من Aldora*%0A`;
        message += `*الاسم:* ${formData.name}%0A`;
        message += `*رقم الهاتف:* ${formData.phone}%0A`;
        message += `*العنوان:* ${formData.address}, ${formData.governorate}%0A`;
        if (formData.notes) message += `*ملاحظات:* ${formData.notes}%0A`;
        message += `%0A*المنتجات:*%0A`;

        cart.forEach(item => {
            message += `- ${item.name} (x${item.quantity}) - ${item.price * item.quantity} ج.م%0A`;
        });

        message += `%0A*الإجمالي:* ${getCartTotal()} ج.م%0A`;
        message += `*طريقة الدفع:* الدفع عند الاستلام`;

        // Redirect to WhatsApp
        const waNumber = '201152288233'; // Updated number
        window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank');

        // Clear cart and redirect
        clearCart();
        alert('تم إرسال طلبك بنجاح عبر واتساب!');
        navigate('/');
    };

    return (
        <div className="checkout-container">
            <h1 className="checkout-title">إتمام الطلب</h1>

            <div className="checkout-grid">
                <div className="form-section">
                    <h2>بيانات الشحن</h2>
                    <form onSubmit={handleSubmit} className="checkout-form">
                        <div className="form-group">
                            <label>الاسم بالكامل</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="محمد أحمد"
                            />
                        </div>

                        <div className="form-group">
                            <label>رقم الهاتف</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="01xxxxxxxxx"
                            />
                        </div>

                        <div className="form-group">
                            <label>المحافظة</label>
                            <select
                                name="governorate"
                                value={formData.governorate}
                                onChange={handleChange}
                                required
                            >
                                <option value="">اختر المحافظة</option>
                                {governorates.map(gov => (
                                    <option key={gov} value={gov}>{gov}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>العنوان بالتفصيل</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                placeholder="اسم الشارع، رقم العمارة، رقم الشقة..."
                            />
                        </div>

                        <div className="form-group">
                            <label>ملاحظات إضافية</label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="payment-info">
                            <h3>طريقة الدفع</h3>
                            <div className="payment-option selected">
                                <span>💵</span> الدفع عند الاستلام (COD)
                            </div>
                        </div>

                        <button type="submit" className="submit-btn">تأكيد الطلب</button>
                    </form>
                </div>

                <div className="order-summary">
                    <h2>ملخص الطلب</h2>
                    <div className="summary-items">
                        {cart.map(item => (
                            <div key={item.id} className="summary-item">
                                <span>{item.name} <small>(x{item.quantity})</small></span>
                                <span>{item.price * item.quantity} ج.م</span>
                            </div>
                        ))}
                    </div>
                    <div className="total-section">
                        <span>الإجمالي</span>
                        <span>{getCartTotal()} ج.م</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
