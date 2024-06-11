import { useState } from 'react';
import './index.scss';

const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setError('Email không được để trống');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email không hợp lệ');
      return;
    }
    setError('');
    // Logic xử lý gửi email đổi mật khẩu
    console.log('Email:', email);
  };

  return (
    <div className="forgot-password">
      <h2>Quên mật khẩu?</h2>
      <p>Điền email gắn với tài khoản của bạn để nhận đường dẫn thay đổi mật khẩu</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="abc@gmail.com"
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Tiếp tục</button>
      </form>
      <a href="/login">Quay lại đăng nhập</a>
    </div>
  );
};

export default Forgotpassword;
