
import { Avatar, Button, Col, Layout, Menu, Row, theme } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    UsergroupDeleteOutlined,
    HomeOutlined,
    DropboxOutlined,
    DatabaseOutlined,
} from '@ant-design/icons';
import { Content, Header } from 'antd/es/layout/layout';
import { useState } from 'react';
import Sider from 'antd/es/layout/Sider';
import { Link } from 'react-router-dom';
import "./dashboardpage.scss";

function Dashboardpage() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout className='site-layout-left'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
            <Link className='logo' to="/">
            <img src="logo.png"
                        alt=""
                        width={10}
                    />
                    </Link>
                <Menu
                className='menu'
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: 'Home',
                        },
                        {
                            key: '2',
                            icon: <DropboxOutlined />,
                            label: 'quản lí sữa',
                        },
                        {
                            key: '3',
                            icon: <DatabaseOutlined />,
                            label: 'Quản lí đơn',
                        },
                        {
                            key: '4',
                            icon: <UsergroupDeleteOutlined />,
                            label: 'Quản lí nhân viên',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                {/*cho phép hiện thị nút header ở bên trái*/}
                <Header
                    className='site-layout-backgroud'
                    style={{
                        padding: 0,

                    }}
                >
                    <Row>
                        {/* hiện phía bên phải */}
                        <Col md={18}>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 50,
                                    height: 50,

                                }}
                            />
                        </Col>
                        {/* hiện phía bên trái như avata, thoong báo */}
                        <Col md={6}>
                            <div>
                                <Avatar size="default" icon={<UserOutlined />}>
                                    <img src="https://static2.yan.vn/YanNews/2167221/201904/dan-mang-xon-xao-voi-hinh-anh-moi-cua-kha-banh-bdaba842.jpg" alt="" />
                                </Avatar>
                            </div>
                        </Col>
                    </Row>

                </Header>
                {/* nhúng nội dung trực tiếp ở phần khai báo */}
                <Content
                    style={{
                        margin: '50px 16px',
                        height: 590,
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <div>
                        viết ở đây
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Dashboardpage