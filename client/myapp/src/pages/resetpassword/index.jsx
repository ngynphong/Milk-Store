import { useState } from "react";
import "./reset.scss";

function Resetpassword() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!oldPassword) newErrors.oldPassword = "Mật khẩu cũ không được để trống.";
        if (!newPassword) newErrors.newPassword = "Mật khẩu mới không được để trống.";
        if (newPassword === oldPassword) newErrors.newPassword = "Mật khẩu mới không được trùng với mật khẩu cũ.";
        if (newPassword !== confirmPassword) newErrors.confirmPassword = "Mật khẩu xác nhận không khớp.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle form submission
            console.log("Form submitted successfully!");
        }
    };

    return (
        <div className="reset__container">
            <form className="reset__form" onSubmit={handleSubmit}>
                <h1>Thay đổi mật khẩu</h1>
                <div className="input__group">
                    <h3>Nhập mật khẩu cũ</h3>
                    <input
                        type="password"
                        placeholder="Nhập mật khẩu cũ của bạn"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    {errors.oldPassword && <p className="error">{errors.oldPassword}</p>}
                </div>
                <div className="input__group">
                    <h3>Nhập mật khẩu mới</h3>
                    <input
                        type="password"
                        placeholder="Nhập mật khẩu mới của bạn"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    {errors.newPassword && <p className="error">{errors.newPassword}</p>}
                </div>
                <div className="input__group">
                    <h3>Xác nhận mật khẩu</h3>
                    <input
                        type="password"
                        placeholder="Xác nhận mật khẩu của bạn"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </div>
                <div className="form__submit">
                    <button type="submit">Lưu</button>
                </div>
            </form>
        </div>
    );
}

export default Resetpassword;
