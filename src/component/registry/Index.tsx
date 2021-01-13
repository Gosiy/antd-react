import {Component} from "react";
import {Card, Input, Select, Tooltip, AutoComplete, Form, Checkbox, Button} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons"
import {IRegistryState} from "../../interface";
import "../lessbase/LOR.less";
import Particles from "react-particles-js";
import {particlesConfig} from "../particles/ParticlesConfig";
import {Link} from "react-router-dom";

export class Registry extends Component<any, any>{

  constructor(props: any, state: IRegistryState) {
    super(props, state);
    this.state = {
      prefixSelector: <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
          <Select.Option value="86">+86</Select.Option>
          <Select.Option value="87">+87</Select.Option>
        </Select>
      </Form.Item>,
      websiteReg: [ '.io','.org','.com', '.cn', '.net' ,'.top' ,'.中文网'],
      websiteOptions: [],
      emailReg: ['gmail.com', '163.com', 'qq.com',  '126 .com', 'foxmail.com'],
      emailOptions: [],
      params: particlesConfig,
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 18 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 23,
            offset: 1,
          },
        },
      }
    }
  }

  /* email 联想 */
  handleEmailSearch = (value: string) => {
    let res: string[] = [];
    const {emailReg} = this.state;
    if (!value) {
      res = [];
    } else {
      res = emailReg.map((domain: string) => ({
        label: `${value}@${domain}`,
        value: `${value}@${domain}`,
      }));
    }
    this.setState({
      emailOptions:res
    });
  };

  /* 站点联想 */
  handleWebsiteSearch = (value: string) => {
    let res: string[] = [];
    if (!value) {
      res = [];
    } else {
      const {websiteReg} = this.state;
      res = websiteReg.map((domain: string) => ({
        label: `${value}${domain}`,
        value: `${value}${domain}`,
      }));
    }
    this.setState({
      websiteOptions: res
    })
  };

  /* 表单验证完提交 */
  onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  render() {
    const {prefixSelector, emailOptions,websiteOptions, params,formItemLayout,tailFormItemLayout} = this.state;
    return (
      <div className="card-par-div">
        <Particles
          params={params}
          className="particles-style"
        />
        <Card title="注册" className="card-registry">
          <Form
            name="register"
            onFinish={this.onFinish}
            initialValues={{
              prefix: "+86"
            }}
            {...formItemLayout}
            scrollToFirstError
          >
            <Form.Item
              name="nickname"
              label={
                <span>
                  昵称&nbsp;
                    <Tooltip title="What do you want others to call you?">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[{ required: true, message: '请输入昵称!', whitespace: true }]}
            >
              <Input allowClear={true} placeholder="请输入昵称!"/>
            </Form.Item>
            <Form.Item
              name="password"
              label="密码"
              rules={[
                {
                  required: true,
                  message: '请输入密码!',
                },
              ]}
              hasFeedback
            >
              <Input.Password  allowClear={true} placeholder="请输入密码!"/>
            </Form.Item>

            <Form.Item
              name="confirm"
              label="确认密码"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: '请再次输入密码!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('两次密码不匹配，请重新输入!');
                  },
                }),
              ]}
            >
              <Input.Password  allowClear={true} placeholder="请再次输入密码!"/>
            </Form.Item>
            <Form.Item
              name="email"
              label={
                <span>
                  E-mail&nbsp;
                  <Tooltip title="请输入正确邮箱地址，如 xxx@163.com...">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: '请输入正确的邮箱地址!',
                },
              ]}
            >
              <AutoComplete options={emailOptions} onChange={this.handleEmailSearch} allowClear={true}>
                <Input  placeholder="请输入邮箱!"/>
              </AutoComplete>
            </Form.Item>
            <Form.Item
              name="phone"
              label="手机号码"
              rules={[{ required: true, message: '请输入你的手机号码!' }]}
            >
              <Input  maxLength={11} addonBefore={prefixSelector} style={{ width: '100%' }}  allowClear={true}  placeholder="请输入你的手机号码!"/>
            </Form.Item>
            <Form.Item
              name="website"
              label="个人站点"
              rules={[{ required: true, message: '请输入站点!' }]}
            >
              <AutoComplete  options={websiteOptions}  onChange={this.handleWebsiteSearch}  allowClear={true}>
                <Input placeholder="请输入站点!"/>
              </AutoComplete>
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject('必须同意用户协议才可继续！'),
                },
              ]}
              {...tailFormItemLayout}
              style={{textAlign: "left"}}
            >
              <div>
                <Checkbox>
                  我同意<a href="#">相关协议</a>
                </Checkbox>
                <Link style={{float: "right"}} to="/admin/login">立即登录</Link>
              </div>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" block>
                注册
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }

}

export default Registry;