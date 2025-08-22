import { create } from "zustand";
import toast from "react-hot-toast";

const MAX_PER_PRODUCT = 5;

const getInitialCart = () => {
    try {
        const raw = localStorage.getItem("cart");
        return raw
            ? JSON.parse(raw)
            : {
                flowers: [],
                presents: [],
                cakes: [],
            };
    } catch {
        return {
            flowers: [],
            presents: [],
            cakes: [],
        };
    }
};

const persist = (cart) => localStorage.setItem("cart", JSON.stringify(cart));

const useCartStore = create((set, get) => ({
    cart: getInitialCart(),

    addToCart: (product) => {
        const { cart } = get();

        let typeKey;
        switch (product.type) {
            case "flower":
                typeKey = "flowers";
                break;
            case "present":
                typeKey = "presents";
                break;
            case "cake":
                typeKey = "cakes";
                break;
            default:
                toast.error("Неизвестный тип продукта!");
                return;
        }

        const items = cart[typeKey];
        const idx = items.findIndex((i) => String(i.id) === String(product.id));

        let newItems;
        if (idx !== -1) {
            const item = items[idx];
            if (item.quantity >= MAX_PER_PRODUCT) {
                toast.error(`Максимум лимит ${MAX_PER_PRODUCT} шт!`);
                return;
            }
            newItems = items.map((i, k) =>
                k === idx ? { ...i, quantity: i.quantity + 1 } : i
            );
            toast.success("Количество увеличено!");
        } else {
            newItems = [...items, { ...product, quantity: 1 }];
            toast.success("Товар добавлен в корзину!");
        }

        const newCart = { ...cart, [typeKey]: newItems };
        persist(newCart);
        set({ cart: newCart });
    },

    increment: (id, type) => {
        const { cart } = get();
        const typeKey =
            type === "flower" ? "flowers" : type === "present" ? "presents" : "cakes";
        const items = cart[typeKey];
        const idx = items.findIndex((i) => String(i.id) === String(id));
        if (idx === -1) return;

        if (items[idx].quantity >= MAX_PER_PRODUCT) {
            toast.error(`Максимум лимит ${MAX_PER_PRODUCT} шт!`);
            return;
        }

        const newItems = items.map((i, k) =>
            k === idx ? { ...i, quantity: i.quantity + 1 } : i
        );
        const newCart = { ...cart, [typeKey]: newItems };
        persist(newCart);
        set({ cart: newCart });
    },

    decrement: (id, type) => {
        const { cart } = get();
        const typeKey =
            type === "flower" ? "flowers" : type === "present" ? "presents" : "cakes";
        const items = cart[typeKey];
        const idx = items.findIndex((i) => String(i.id) === String(id));
        if (idx === -1) return;

        const item = items[idx];
        if (item.quantity <= 1) {
            // удаляем товар если меньше 1
            const newItems = items.filter((i) => String(i.id) !== String(id));
            const newCart = { ...cart, [typeKey]: newItems };
            persist(newCart);
            set({ cart: newCart });
            toast.success("Товар удалён!");
            return;
        }

        const newItems = items.map((i, k) =>
            k === idx ? { ...i, quantity: i.quantity - 1 } : i
        );
        const newCart = { ...cart, [typeKey]: newItems };
        persist(newCart);
        set({ cart: newCart });
    },

    removeFromCart: (id, type) => {
        const { cart } = get();
        const typeKey =
            type === "flower" ? "flowers" : type === "present" ? "presents" : "cakes";
        const newItems = cart[typeKey].filter((i) => String(i.id) !== String(id));
        const newCart = { ...cart, [typeKey]: newItems };
        persist(newCart);
        set({ cart: newCart });
        toast.success("Товар удалён!");
    },

    clearCart: () => {
        const empty = { flowers: [], presents: [], cakes: [] };
        persist(empty);
        set({ cart: empty });
        toast.success("Корзина очищена!");
    },
}));

export default useCartStore;