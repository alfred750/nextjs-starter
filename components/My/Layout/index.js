import React from 'react';
import { Layout, Row, Col } from 'antd';
import LanguageButton from '../../Common/LanguageButton'
import LogoutButton from '../../Common/LogoutButton'
import Logo from '../../Common/Logo'
import AdminMenu from '../Menu'
import RoleLayout from '../../Common/RoleLayout'
import './styles.scss'

const { Header, Footer, Content } = Layout;

const MyLayout = ({ children }) => (
  <RoleLayout role="user">
    <Layout className="my-layout">
      <Header className="my-header">
        <Row justify="space-betw">
          <Col span={4}>
            <Logo/>
          </Col>
          <Col span={14}>
            <AdminMenu/>
          </Col>
          <Col span={6}>
            <LanguageButton/>
            <LogoutButton/>
          </Col>
        </Row>
      </Header>
      <Content className="my-main">
        {children}
      </Content>
      <Footer className="my-footer">Footer</Footer>
    </Layout>
  </RoleLayout>
);

export default MyLayout
