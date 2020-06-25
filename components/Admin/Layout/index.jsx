import React from 'react';
import { Layout, Row, Col } from 'antd';
import LanguageButton from '../../Common/LanguageButton';
import Logo from '../../Common/Logo';
import AdminMenu from '../Menu';
import LogoutButton from '../../Common/LogoutButton';
import './styles.scss';

const { Header, Footer, Content } = Layout;

const AdminLayout = ({ children }) => (
  <Layout className="admin-layout">
    <Header className="admin-header">
      <Row justify="space-betw">
        <Col span={4}>
          <Logo />
        </Col>
        <Col span={14}>
          <AdminMenu />
        </Col>
        <Col span={6}>
          <LanguageButton />
          <LogoutButton />
        </Col>
      </Row>
    </Header>
    <Content className="admin-main">
      {children}
    </Content>
    <Footer className="admin-footer">Footer</Footer>
  </Layout>
);

export default AdminLayout;
