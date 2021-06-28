import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar/Navbar';
import {NavLink, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Loading from "./components/Common/Preloader/Loading";
import { Layout, Menu } from 'antd';
import s from "./components/Navbar/Navbar.module.css";
import TeamOutlined from "@ant-design/icons/lib/icons/TeamOutlined";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import CommentOutlined from "@ant-design/icons/lib/icons/CommentOutlined";
import LoginOutlined from "@ant-design/icons/lib/icons/LoginOutlined";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    };

    render() {
        if(!this.props.initialized) {
            return <Loading/>
        }
        return (
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1"  icon={<UserOutlined />}>
                            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<CommentOutlined />}>
                            <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<TeamOutlined />}>
                            <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<LoginOutlined />}>
                            <NavLink to="/login" activeClassName={s.active}>Login</NavLink>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<GithubOutlined />}>
                            <a target='_blank' href="https://nizaliznyak.github.io/React_v1" activeClassName={s.active}>Git-repo</a>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route path="/profile/:userID?" render={() => <ProfileContainer/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/login" render={() => <LoginContainer/>}/>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ссылка на <a id='gitURL' href="https://nizaliznyak.github.io/React_v1">git-репозиторий</a></Footer>
                </Layout>
            </Layout>
            /*<div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userID?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <LoginContainer/>}/>
                </div>
            </div>*/
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);