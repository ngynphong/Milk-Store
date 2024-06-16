import { useState } from 'react';
import "./counsel.scss"
import TextArea from "antd/es/input/TextArea";

function Counsel() {
    const [mainVideoUrl, setMainVideoUrl] = useState('https://www.youtube.com/embed/nZ9t1Qk8ttw');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleVideoClick = (url) => {
        setMainVideoUrl(url);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log({ name, email, phone, message });
    };
    return (
        <div className="counsel__form">
            <h2>Video chia sẻ</h2>
            <div className="counsel__group">
                <div className="video-container">
                    <iframe
                        width="700"
                        height="400"
                        src={mainVideoUrl}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Video chia sẻ"
                    ></iframe>
                </div>
                <div className="channel-container">
                    <h3>Video Channel</h3>
                    <div className='onvideo' onClick={() => handleVideoClick('https://www.youtube.com/embed/z2PKREnkloI')} style={{ cursor: 'pointer' }}>
                        <iframe
                            width="150"
                            height="100"
                            src="https://www.youtube.com/embed/z2PKREnkloI"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Video 1"
                        ></iframe>
                        <h3>livestream bí quyết chăm sóc sức khỏe bé yêu cho gia đình...</h3>
                    </div>
                    <div className='onvideo' onClick={() => handleVideoClick('https://www.youtube.com/embed/TCTamAcqq_k')} style={{ cursor: 'pointer' }}>
                        <iframe
                            width="150"
                            height="100"
                            src="https://www.youtube.com/embed/TCTamAcqq_k"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Video 2"
                        ></iframe>
                        <h3>Chăm sóc bé yêu kì giao mùa...</h3>
                    </div>
                    <div className='onvideo' onClick={() => handleVideoClick('https://www.youtube.com/embed/g5UIq5qMBHk')} style={{ cursor: 'pointer' }}>
                        <iframe
                            width="150"
                            height="100"
                            src="https://www.youtube.com/embed/g5UIq5qMBHk"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Video 3"
                        ></iframe>
                        <h3>Các căn bệnh ở phụ sản...</h3>
                    </div>
                </div>
            </div>

            <div className='contten__page'>
                <div>
                    <h3>Nếu bạn có bất kỳ khiếu nại về dịch vụ CSKH;
                        thắc mắc về sản phẩm; yêu cầu tư vấn dị ứng
                        hoặc đề nghị được dùng thử sản phẩm ...thì đừng ngần ngại,
                        hãy cho chúng tôi biết bạn cần gì,
                        bằng cách điền các thông tin bên dưới nhé!</h3>

                    <div className='input__group'>
                        <from onSubmit={handleSubmit}>
                            <div className='groupA'>
                                <div>
                                    <label htmlFor='name'>Họ và tên</label>
                                    <input
                                        type='text'
                                        id='name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor='email'>Email</label>
                                    <input
                                        type='text'
                                        id='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor='phone'>Số điện thoại</label>
                                <input
                                    type='text'
                                    placeholder='Số điện thoại'
                                    id='phone'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor='message'>Message</label>
                                <TextArea rows={4}
                                    type='text'
                                    placeholder='Nội dung chi tiết cần hỗ trợ'
                                    id='message'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <button type='submit'>GỬI LIÊN HỆ</button>
                        </from>
                    </div>
                </div>

                <div className='image'>
                    <img
                        width="490"
                        height="500"
                        src="https://theme.hstatic.net/200000681523/1001099433/14/banner_tu_van.jpg?v=284" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Counsel;
