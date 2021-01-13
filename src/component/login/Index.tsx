import {Component} from "react";
import "../lessbase/LOR.less"
import {Card, Form, Input, Button, Checkbox, Row , Col, Tooltip} from "antd";
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import Particles from "react-particles-js";
import {ILoginState} from "../../interface";
import {particlesConfig} from "../particles/ParticlesConfig";
import {Link} from "react-router-dom";

export class Login extends Component<any, ILoginState>{
    constructor(props: any, state: ILoginState) {
      super(props, state);
      this.state = {
        params: particlesConfig,
        rememberme: false,
        username: "",
        password: "",
        modified: false,
        tooltip: "此选项会将账密保存着本地，请谨慎使用，如需删除，取消勾选点击登录，或者清除cookie"
      }
    }
    onFinish = (values: any) => {
      const {rememberme, modified} = this.state;
      const {username, password} = values;
      if(modified){
        if(rememberme){
          localStorage.setItem("login-username",username);
          localStorage.setItem("login-password",password);
          localStorage.setItem("login-rememberme","1");
        } else {
          localStorage.removeItem("login-username");
          localStorage.removeItem("login-password");
          localStorage.removeItem("login-rememberme");
        }
      }
      if(username === "admin" && password === "111111"){
        this.props.history.push("/admin");
      }
    };

    rememberMeHandle = () =>{
      const {rememberme} = this.state;
      this.setState({
        rememberme: !rememberme,
        modified: true
      });
    }

    /* 取值 */
    componentDidMount() {
      const username = localStorage.getItem("login-username") || "";
      const password = localStorage.getItem("login-password") || "";
      let rememberme = localStorage.getItem("login-rememberme") || false;
      rememberme = rememberme ? rememberme == "1" ? true : false : false;
      this.setState({
        username: username,
        password: password,
        rememberme: rememberme
      })
    }

  render() {
      const {params, username ,password, rememberme,tooltip} = this.state;
        return (
          <div className="card-par-div">
            <Particles
              params={params}
              className="particles-style"
            />

            <Card
              title="登录"
              className="card-login"
            >
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: '请输入用户名!' }]}
                  initialValue={username}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="用户名"
                    allowClear
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: '请输入密码!' }]}
                  initialValue={password}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="密码"
                    allowClear = {true}
                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Form.Item>
                <Form.Item noStyle={true}>
                  <Row>
                    <Col span={12} style={{textAlign: "left"}}>
                      <Tooltip placement="topLeft" title={tooltip}>
                        <Checkbox
                          name="remember"
                          onChange={this.rememberMeHandle}
                          defaultChecked={rememberme}
                        >记住我</Checkbox>
                      </Tooltip>
                    </Col>
                    <Col span={12}  style={{textAlign: "right"}}>
                      <a className="login-form-forgot" href="#">
                        忘记密码？
                      </a>
                    </Col>
                  </Row>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button" block>
                    登录
                  </Button>
                  <div style={{textAlign: "left"}}>
                    或者<Link to="/admin/registry">注册!</Link>
                  </div>
                </Form.Item>
              </Form>
            </Card>
          </div>
        );
    }

}

export default Login;