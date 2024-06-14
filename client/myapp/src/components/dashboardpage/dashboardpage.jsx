
// import { Link, useNavigate } from 'react-router-dom';
import "./dashboardpage.scss";
import { useEffect, useState } from "react";
import {
    // ProfileOutlined,
    HeartOutlined,
    UserOutlined,
    KeyOutlined,
    LogoutOutlined,

} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Footer } from "antd/es/layout/layout";
import { Link, Outlet, useLocation } from "react-router-dom";

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const Dashboardpage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [items, setItems] = useState([]);
    const [key, setKey] = useState();
    const location = useLocation();
    const currentURI =
        location.pathname.split("/")[location.pathname.split("/").length - 1];
    const role = "owner";
    // const keyConfig = {
    //     club1: "clubs",
    //     club2: "clubs",
    //     club3: "clubs",
    // };
    const dataOpen = JSON.parse(localStorage.getItem("keys")) ?? [];

    const [openKeys, setOpenKeys] = useState(dataOpen);

    useEffect(() => {

        // if (role === "staff") {
        //     setItems([
        //         getItem("Hồ sơ", "reset", <ProfileOutlined />),
        //         getItem("xem sản phẩm", "clubs", <HeartOutlined />, 
        //         getItem("duyệt đơn", "booking", <CheckCircleOutlined />, ),
        //     ]);
        // }

        if (role === "owner") {
            setItems([

                getItem("Hồ sơ", "account", <UserOutlined />),
                getItem("Đơn hàng của tôi", "vieworder", <HeartOutlined />,),
                getItem("Thay đổi mật khẩu", "reset", <  KeyOutlined />,),
                getItem("đăng xuất", "vieworder", <LogoutOutlined />,),
            ]);
        }
    }, []);

    // Event handler for submenu open/close
    const handleSubMenuOpen = (keyMenuItem) => {
        //keyMenu la mang, nam trong mang thi dc sgiw ra
        setOpenKeys(keyMenuItem);
        console.log(keyMenuItem);
    };
    const handleSelectKey = (keyPath) => {
        console.log(keyPath);
        setKey(keyPath);
    };

    useEffect(() => {
        localStorage.setItem("keys", JSON.stringify(openKeys));
    }, [openKeys]);

    console.log(JSON.parse(localStorage.getItem("keys")));
    //lay key bo vao mang openkey

    // openkey thay doi => local stoage

    // f5 -> layopenKey local storage

    useEffect(() => {
        console.log(key);
        // handleSubMenuOpen([...openKeys, key]);
    }, [currentURI]);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <Link to="/">
                    <img src="logo.png" alt="logo" width={100} style={{ margin: "30px" }} />
                </Link>

                <Menu
                    theme="light"
                    defaultSelectedKeys={["profile"]}
                    mode="inline"
                    selectedKeys={currentURI}
                    openKeys={openKeys}
                    onOpenChange={handleSubMenuOpen}
                >
                    {items.map((item) =>
                        item.children ? (
                            <Menu.SubMenu
                                key={item.key}
                                icon={item.icon}
                                title={item.label}
                            // className={
                            //   openKeys.includes(item.key) ? "ant-menu-submenu-open" : ""
                            // }
                            >
                                {item.children.map((subItem) => (
                                    <Menu.Item
                                        key={subItem.key}
                                        onClick={(e) => handleSelectKey(e.keyPath[1])}
                                    >
                                        <Link to={`/dashboardpage/${subItem.key}`}>
                                            {subItem.label}
                                        </Link>
                                    </Menu.Item>
                                ))}
                            </Menu.SubMenu>
                        ) : (
                            <Menu.Item key={item.key} icon={item.icon}>
                                <Link to={`/dashboardpage/${item.key}`}>{item.label}</Link>
                            </Menu.Item>
                        )
                    )}
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    {/* <header>
                        <ul
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "20px",
                                listStyle: "none",
                            }}
                        >
                            <li>Home</li>
                            <li>Service</li>
                            <li>Booking</li>
                            <li>Contact</li>
                            <li>Logout</li>
                        </ul>
                    </header> */}
                </Header>
                <Content style={{ margin: "0 16px" }}>
                    <Breadcrumb>
                        {location.pathname.split("/").map((path, index, array) => (
                            <Breadcrumb.Item key={path}>
                                {index === 0 ? path : <Link to={`/${path}`}>{path}</Link>}
                            </Breadcrumb.Item>
                        ))}
                    </Breadcrumb>

                    <div
                        style={{
                            padding: 24,
                            minHeight: 450,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: "center", backgroundColor: "#E3F2EE" }}>
                    Happy Mother&Baby ©{new Date().getFullYear()} Created by F4 đẹp trai
                </Footer>
            </Layout>
        </Layout>
    );
};

export default Dashboardpage;
