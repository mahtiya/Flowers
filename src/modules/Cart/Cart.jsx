import { FiMinus, FiPlus } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import "./../../assets/scss/pages/cart.scss";
import Button from "../../components/ui/Button";
import useCartStore from "../../store/useCartStore";

export default function Cart() {
    const { cart, increment, decrement, removeFromCart } = useCartStore();

    const allItems = [
        ...cart.flowers.map((i) => ({ ...i, category: "flowers" })),
        ...cart.presents.map((i) => ({ ...i, category: "presents" })),
        ...cart.cakes.map((i) => ({ ...i, category: "cakes" })),
    ];

    const totalAll = allItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const categories = [
        { key: "flowers", label: "Цветы" },
        { key: "presents", label: "Подарки" },
        { key: "cakes", label: "Торты" },
    ];

    return (
        <section className="cart">
            <div className="container">
                <h1 className="cart_title">Корзина</h1>

                <div className="cart_wrapper">
                    <table className="cart_table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Название</th>
                                <th>Цена за шт.</th>
                                <th>Кол-во</th>
                                <th>Итог</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {allItems.length === 0 && (
                                <tr>
                                    <td colSpan={6} style={{ textAlign: "center" }}>
                                        Корзина пуста
                                    </td>
                                </tr>
                            )}
                            {allItems.map((item) => (
                                <tr key={item.id + item.category}>
                                    <td>
                                        <img src={item.image} alt={item.name} />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>
                                        <p className="price">{item.price} сом</p>
                                        {item.oldPrice > item.price && (
                                            <s className="old_price">{item.oldPrice} сом</s>
                                        )}
                                    </td>
                                    <td>
                                        <div className="counts">
                                            <button
                                                className="btn_1"
                                                onClick={() => decrement(item.id, item.type)}
                                            >
                                                <FiMinus />
                                            </button>
                                            <p>{item.quantity}</p>
                                            <button
                                                className="btn_2"
                                                onClick={() => increment(item.id, item.type)}
                                            >
                                                <FiPlus />
                                            </button>
                                        </div>
                                    </td>
                                    <td>{item.price * item.quantity} сом</td>
                                    <td>
                                        <MdDeleteOutline
                                            style={{ cursor: "pointer" }}
                                            onClick={() => removeFromCart(item.id, item.type)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="cart_general">
                        <h4>Ваш заказ</h4>
                        <ul className="cart_order">
                            {categories.map(({ key, label }) => {
                                const sumPrice = cart[key].reduce(
                                    (total, i) => total + i.price * i.quantity,
                                    0
                                );
                                const count = cart[key].reduce(
                                    (total, i) => total + i.quantity,
                                    0
                                );
                                if (sumPrice === 0) return null;
                                return (
                                    <li key={key}>
                                        <p className="category">
                                            {label} ({count})
                                        </p>
                                        <p className="price">{sumPrice} сом</p>
                                    </li>
                                );
                            })}
                        </ul>


                        <p className="sum_total_all">
                            <span className="all">Всего</span>{" "}
                            <span className="sum">{totalAll} сом</span>
                        </p>
                        <center>
                            <Button btn={"Оформить заказ"} />
                        </center>
                    </div>
                </div>
            </div>
        </section>
    );
}