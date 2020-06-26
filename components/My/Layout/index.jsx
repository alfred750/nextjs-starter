import React from 'react';
import { Layout, Row, Col } from 'antd';
import LanguageButton from '../../Common/LanguageButton';
import LogoutButton from '../../Common/LogoutButton';
import Logo from '../../Common/Logo';
import AdminMenu from '../Menu';
import './styles.scss';

const { Header, Footer, Content } = Layout;

const MyLayout = ({ children }) => (
  <Layout className="my-layout">
    <Header className="my-header">
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
    <Content className="my-main">{children}</Content>
    <Footer className="my-footer">Footer</Footer>
  </Layout>
);

export default MyLayout;
