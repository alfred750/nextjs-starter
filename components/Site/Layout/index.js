import React from 'react';
import { Layout, Row, Col } from 'antd';
import LanguageButton from '../../Common/LanguageButton'
import Logo from '../../Common/Logo'
import SiteMenu from '../Menu'
import './styles.scss'

const { Header, Footer, Content } = Layout;

const SiteLayout = ({ children }) => {
  return (
    <Layout className="site-layout">
      <Header className="site-header">
        <Row justify="space-betw">
          <Col span={4}>
            <Logo />
          </Col>
          <Col span={16}>
            <SiteMenu />
          </Col>
          <Col span={4}>
            <LanguageButton />
          </Col>
        </Row>
      </Header>
      <Content className="site-main">
        {children}
      </Content>
      <Footer className="site-footer">Footer</Footer>
    </Layout>
  )
};

export default SiteLayout
