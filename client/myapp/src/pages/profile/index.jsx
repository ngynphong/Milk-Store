
import { useState, useEffect } from 'react';
import './index.scss';
import Header from '../../components/header';
import axios from 'axios';

import { useParams } from 'react-router-dom';

const ProfileForm = () => {
  const [formData, setFormData] = useState({});

  let { UserID } = useParams();

  const [updateStatus, setUpdateStatus] = useState(null);

  useEffect(() => {
    // if (User) {
    axios.get(`http://localhost:3001/auth/profile/${UserID}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the profile data!', error);
      });
    // }
  }, []);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/auth/profile/${UserID}`, formData)
      .then(response => {
        setUpdateStatus('success');
        console.log('Profile updated successfully:', response.data);
      })
      .catch(error => {
        setUpdateStatus('error');
        console.error('There was an error updating the profile!', error);
      });
  };

 
   return (
     <div>
      <div>
        <Header />
      </div>
      <h2>Hồ Sơ Của Tôi</h2>
      <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      {updateStatus === 'success' && <p className="success-message">Cập nhật hồ sơ thành công!</p>}
      {updateStatus === 'error' && <p className="error-message">Có lỗi xảy ra khi cập nhật hồ sơ.</p>}
      <form onSubmit={handleSubmit}>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="Email"
              name="Email"
              //value={formData.Email}
              readOnly
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="Password"
              name="password"
              value={formData.Password}
              readOnly
            />
          </div>


          <div className="form-group">
            <label htmlFor="FullName">Tên đăng nhập</label>
            <input
              type="text"
              id="FullName"
              name="FullName"
              onChange={handleChange}
              value={formData.FullName}

            />
          </div>


          <div className="form-group">
            <label htmlFor="Age">Tuổi</label>
            <input
              type="number"
              id="Age"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
              min="1"
              max="100"
            />
          </div>


          <div className="form-group">
            <label htmlFor="Addresss">Địa chỉ</label>
            <input
              type="text"
              id="Address"
              name="Address"
              onChange={handleChange}
              value={formData.Address}

            />
          </div>


          <div className="form-group">
            <button type="submit">Lưu</button>
          </div>
        </form>
      </form>
     </div>
   )
 }
 
 

 export default ProfileForm;
