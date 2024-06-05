import { useState } from 'react';
import './index.scss'; 
import Header from '../../components/header';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    username: '_congtrung',
    email: 'th********@icloud.com',
    age: 25, // Default age value, can be set to any value between 1-100
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="profile-form">
        <div>
            <Header/>
        </div>
      <h2>Hồ Sơ Của Tôi</h2>
      <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Tên đăng nhập</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Tuổi</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="1"
            max="100"
          />
        </div>
        <div className="form-group">
          <button type="submit">Lưu</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
