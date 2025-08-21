import { useState } from "react";
import { TextField } from "@mui/material";
import Button from "../../components/ui/Button";
import toast from "react-hot-toast";

export default function FormBot() {
    const [name, setName] = useState("Иван Иванов");
    const [phone, setPhone] = useState("+996 555 555 555");
    const [message, setMessage] = useState("Все супер!");

    const sendForm = async () => {
        const token = "8357774047:AAEZbiosSkWMo_dXOm4G1RvonfkXyHN8LEg"; 
        const chatId = "7106291961"; 
        const text = `Имя: ${name}\nТелефон: ${phone}\nСообщение: ${message}`;

        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text,
                }),
            });

            const data = await res.json();
            if (data.ok) {
                toast.success("Сообщение отправлено!");
            } else {
                toast.error("Ошибка при отправке сообщения");
            }
        } catch (error) {
            console.error(error);
            toast.error("Ошибка сети");
        }
    };

    return (
        <form className="form" onSubmit={(e) => e.preventDefault()}>
            <TextField
                fullWidth
                label="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#956D84" },
                        "&:hover fieldset": { borderColor: "#956D84" },
                        "&.Mui-focused fieldset": { borderColor: "#956D84" },
                        input: { color: "#333" },
                    },
                    "& .MuiInputLabel-root": { color: "#956D84" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#956D84" },
                }}
            />
            <TextField
                fullWidth
                label="Номер телефона"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                variant="outlined"
                sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#956D84" },
                        "&:hover fieldset": { borderColor: "#956D84" },
                        "&.Mui-focused fieldset": { borderColor: "#956D84" },
                        input: { color: "#333" },
                    },
                    "& .MuiInputLabel-root": { color: "#956D84" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#956D84" },
                }}
            />
            <TextField
                fullWidth
                label="Ваше сообщение"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                variant="outlined"
                sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#956D84" },
                        "&:hover fieldset": { borderColor: "#956D84" },
                        "&.Mui-focused fieldset": { borderColor: "#956D84" },
                        input: { color: "#333" },
                    },
                    "& .MuiInputLabel-root": { color: "#956D84" },
                    "& .MuiInputLabel-root.Mui-focused": { color: "#956D84" },
                }}
            />

            <Button onClick={sendForm} btn={"Отправить"} />
        </form>
    );
}