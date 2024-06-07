import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss"

function Editpassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSave = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
        } else {
            // Handle password save logic here
            setError(""); // Clear error if passwords match
            console.log("Password changed successfully");
        }
    };

    return (
        <div className="edit-container">
            <h1>Change Password</h1>
            <div className="input-group">
                <h3>New password</h3>
                <input
                    type="password"
                    placeholder="New password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="input-group">
                <h3>Confirm</h3>
                <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            {error && <div className="error-message">{error}</div>}
            <div>
                <button type="submit" onClick={handleSave} disabled={!password || !confirmPassword}>
                    Save
                </button>
                <button type="button" onClick={() => { /* Handle cancel logic here */ }}>
                    Cancel
                </button>
            </div>
            <div className="login-link">
                <Link to="/login">Quay lại đăng nhập</Link>
            </div>
        </div>
    );
}

export default Editpassword;
