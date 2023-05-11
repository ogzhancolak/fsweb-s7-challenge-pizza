import React, { useState } from "react";
import "./OrderForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Success from "./Success"; 

function OrderForm({ product }) {

    const [size, setSize] = useState("");
    const [crust, setCrust] = useState("");
    const [toppings, setToppings] = useState([]);
    const [note, setNote] = useState("");
    const [quantity, setQuantity] = useState(1);

    const negative = useNavigate();

    const [orderDetails, setOrderDetails] = useState(null);

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    const handleCrustChange = (event) => {
        setCrust(event.target.value);
    };

    const handleToppingsChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setToppings([...toppings, value]);
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        if (form.checkValidity()) {
            const order = {
                pizzaAdi: product.pizzaAdi,
                size: size,
                crust: crust,
                toppings: toppings,
                note: note,
                quantity: quantity,
                totalPrice: calculateTotalPrice(),
            };

            try {
                // Sipariş veri nesnesini API'ye gönder
                const response = await axios.post(
                    "https://6457e4580c15cb1482137304.mockapi.io/uruncesitleri",
                    order
                );

                console.log(response)

                // Başarılı sipariş sayfasına yönlendir
                form.reset();
                setOrderDetails(order);
                negative(`/success`, {state: {orderDetails: order}})
                alert("Siparişiniz başarıyla alınmıştır!");
            } catch (error) {
                alert("Siparişiniz gönderilemedi. Lütfen daha sonra tekrar deneyin.");
            }
        } else {
            alert("Lütfen zorunlu alanları doldurunuz.");
        }
    };


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
                    <label>
                        <input
                            type="checkbox"
                            value="pepperoni"
                            checked={toppings.includes("pepperoni")}
                            onChange={handleToppingsChange}
                        />
                        Pepperoni
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="domates"
                            checked={toppings.includes("domates")}
                            onChange={handleToppingsChange}
                        />
                        Domates
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="biber"
                            checked={toppings.includes("biber")}
                            onChange={handleToppingsChange}
                        />
                        Biber
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="sosis"
                            checked={toppings.includes("sosis")}
                            onChange={handleToppingsChange}
                        />
                        Sosis
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="mısır"
                            checked={toppings.includes("mısır")}
                            onChange={handleToppingsChange}
                        />
                        Mısır
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="sucuk"
                            checked={toppings.includes("sucuk")}
                            onChange={handleToppingsChange}
                        />
                        Sucuk
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="ananas"
                            checked={toppings.includes("ananas")}
                            onChange={handleToppingsChange}
                        />
                        Ananas
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="jalepeno"
                            checked={toppings.includes("jalepeno")}
                            onChange={handleToppingsChange}
                        />
                        Jalepeno
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="kabak"
                            checked={toppings.includes("kabak")}
                            onChange={handleToppingsChange}
                        />
                        Kabak
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="soğan"
                            checked={toppings.includes("soğan")}
                            onChange={handleToppingsChange}
                        />
                        Soğan
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="sarımsak"
                            checked={toppings.includes("sarımsak")}
                            onChange={handleToppingsChange}
                        />
                        Sarımsak
                    </label>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="note">Sipariş Notu</label>
                <textarea
                    id="note"
                    name="note"
                    value={note}
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
