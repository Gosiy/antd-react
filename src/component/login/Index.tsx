import {Component} from "react";
import "./Index.less"
import {Card, Form, Input, Button, Checkbox, Row , Col} from "antd";
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import Particles from "react-particles-js";
import {ILoginState} from "../../interface";

export class Login extends Component<any, ILoginState>{

    constructor(props: any, state: ILoginState) {
      super(props, state);
      this.state = {
        params: {
          "particles": {
            "number": {
              "value": 40,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.7,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.6,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 200,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": false
        },
        rememberme: false,
        username: "",
        password: "",
        modified: false
      }
    }
    onFinish = (values: any) => {
      const {rememberme, modified} = this.state;
      console.log(modified+"--"+rememberme);
      if(modified){
        if(rememberme){
          localStorage.setItem("login-username",values.username);
          localStorage.setItem("login-password",values.password);
          localStorage.setItem("login-rememberme","1");
        } else {
          localStorage.removeItem("login-username");
          localStorage.removeItem("login-password");
          localStorage.removeItem("login-rememberme");
        }
      }
      console.log('Received values of form: ', values);
    };

    rememberMeHandle = () =>{
      const {rememberme} = this.state;
      this.setState({
        rememberme: !rememberme,
        modified: true
      });
    }

    /* 取值 */
    componentWillMount() {
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
      const {params, username ,password, rememberme} = this.state;
        return (
          <div className="login-card-par-div">
            <Particles
              params={params}
              className="login-particles-style"
            />

            <Card
              title="后台管理系统"
              className="login-card"
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
                      <Checkbox
                        name="remember"
                        onChange={this.rememberMeHandle}
                        defaultChecked={rememberme}
                      >记住我</Checkbox>
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
                    或者<a href="javascript:;">注册!</a>
                  </div>
                </Form.Item>
              </Form>
            </Card>
          </div>
        );
    }

}

export default Login;