import {Component} from "react";
import "./Index.less"
import {Layout, Menu , Breadcrumb} from "antd";

const { Header, Content, Footer ,Sider} = Layout;
export class Index extends Component<any, any>{

    constructor(props: any, state: any) {
        super(props,state);
        this.state = {
            test: "测试"
        }
    }

    render() {
      const {test} = this.state;
      return (
        <Layout className="layout" style={{height: "100%"}}>
          <Layout>
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content">
                {
                  this.props.children
                }
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Copyright © 2020 Gaosiy All Rights Reserved. Gaosiy版权所有</Footer>
          </Layout>
          <Sider>Sider</Sider>
        </Layout>
      );
    }

}