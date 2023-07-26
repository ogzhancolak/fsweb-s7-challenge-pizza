import React, { useState } from "react";
import "./OrderForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

function OrderForm({ product }) {

    const [size, setSize] = useState("");
    const [crust, setCrust] = useState("");
    const [toppings, setToppings] = useState([]);
    const [note, setNote] = useState("");
    const [quantity, setQuantity] = useState(1);

    const negative = useNavigate();

    const [orderDetails, setOrderDetails] = useState(null);
    const [validationErrors, setValidationErrors] = useState({});

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    const handleCrustChange = (event) => {
        setCrust(event.target.value);
    };

    const handleToppingsChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            if (toppings.length < 5) {
                setToppings([...toppings, value]);
            }
        } else {
            setToppings(toppings.filter((topping) => topping !== value));
        }
    };

    const handleNoteChange = (event) => {
        setNote(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    const calculateTotalPrice = () => {
        let totalPrice = product.Fiyat;

        // Boyuta göre fiyat hesaplama
        if (size === "medium") {
            totalPrice += 5;
        } else if (size === "large") {
            totalPrice += 10;
        }

        // Hamur kalınlığı hesaplama
        if (crust === "thin") {
            totalPrice += 2;
        } else if (crust === "thick") {
            totalPrice += 4;
        }

        // Ek malzelemeri hesaplama
        totalPrice += toppings.length * 1.5;

        // Toplam tutarı hesaplama
        totalPrice *= quantity;

        return totalPrice;
    };

    const orderFormSchema = Yup.object().shape({
        toppings: Yup.array().min(2, 'En az 2 ek malzeme seçmelisiniz.').max(5, 'En fazla 5 ek malzeme seçebilirsiniz.'),
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        if (form.checkValidity()) {
            try {
                await orderFormSchema.validate({ toppings }, { abortEarly: false });

                const order = {
                    pizzaAdi: product.pizzaAdi,
                    size: size,
                    crust: crust,
                    toppings: toppings,
                    note: note,
                    quantity: quantity,
                    totalPrice: calculateTotalPrice(),
                };

                // Sipariş veri nesnesini API'ye gönder
                const response = await axios.post(
                    "https://6457e4580c15cb1482137304.mockapi.io/uruncesitleri",
                    order
                );

                console.log(response)

                // Başarılı sipariş sayfasına yönlendir
                form.reset();
                setOrderDetails(order);
                negative(`/success`, { state: { orderDetails: order } })
            } catch (error) {
                const errors = {};
                error.inner.forEach((err) => {
                    errors[err.path] = err.message;
                });
                setValidationErrors(errors);
            }
        } else {
            alert("Lütfen zorunlu alanları doldurunuz.");
        }
    };



    const toppingsList = [
        { value: "pepperoni", label: "Pepperoni" },
        { value: "domates", label: "Domates" },
        { value: "biber", label: "Biber" },
        { value: "sosis", label: "Sosis" },
        { value: "mısır", label: "Mısır" },
        { value: "sucuk", label: "Sucuk" },
        { value: "ananas", label: "Ananas" },
        { value: "jalepeno", label: "Jalepeno" },
        { value: "kabak", label: "Kabak" },
        { value: "soğan", label: "Soğan" },
        { value: "sarımsak", label: "Sarımsak" },
    ];

    return (
        <form onSubmit={handleSubmit} className="order-form">
            <div className="form-group">
                <label htmlFor="size">Pizza Boyutu <span className="span" >*</span></label>
                <select
                    id="size"
                    name="size"
                    value={size}
                    onChange={handleSizeChange}
                    required
                >
                    <option value="">-- Boyut Seçin --</option>
                    <option value="Küçük">Küçük (25cm)</option>
                    <option value="Orta">Orta (30cm)</option>
                    <option value="Büyük">Büyük (35cm)</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="crust">Hamur Kalınlığı <span className="span" >*</span></label>
                <select
                    id="crust"
                    name="crust"
                    value={crust}
                    onChange={handleCrustChange}
                    required
                >
                    <option value="">-- Kalınlık Seçin --</option>
                    <option value="İnce Hamur">İnce Hamur</option>
                    <option value="Kalın Hamur">Kalın Hamur</option>
                </select>
            </div>
            <div className="form-group">
                <label>Ek Malzemeler</label>
                <div className="checkbox-group">
                    {toppingsList.map((topping) => (
                        <label key={topping.value}>
                            <input
                                type="checkbox"
                                value={topping.value}
                                checked={toppings.includes(topping.value)}
                                onChange={handleToppingsChange}
                            />
                            {topping.label}
                        </label>
                    ))}
                </div>
                {validationErrors.toppings && (
                    <div className="error-message">{validationErrors.toppings}</div>
                )}
            </div>
            <div className="form-group">
                <label htmlFor="note">Sipariş Notu</label>
                <textarea
                    id="note"
                    name="note"
                    value={note}
                    placeholder="Eklemek istediğiniz not var mı?"
                    onChange={handleNoteChange}
                    rows="4"
                ></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="quantity">Adet</label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                    max="10"
                />
            </div>
            <div className="form-group">
                <label htmlFor="total-price">Toplam Fiyat</label>
                <span id="total-price">{calculateTotalPrice()} ₺</span>
            </div>
            <div className="form-group">
                <button type="submit" >Sipariş Ver</button>
            </div>
        </form>
    );
}

export default OrderForm;
