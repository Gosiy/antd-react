# antd-react

    create-react-app , typescript, antd 练手项目

# 主要技术栈
    
    1. TypeScript
    2. React
    3. Antd
    4. less
    5. create-react-app 由于将webpack配置内置了，网上很多都说需要eject暴露配置
       但我并未这么做，使用react-app-rewired 与 customize-cra对内置配置进行覆盖
    6. react-particles-js 粒子动画
    7. babel-plugin-import 配置react-app-rewired 与 customize-cra 按需加载
    8. react-router-dom 配置路由
    9. history 跳转使用

# 项目说明：

    1. src/component 为业务组件包
    2. src/interface 为业务组件state 接口包 
    3. src/routes 为路由配置包
    4. src/theme 准备做主题，暂时公用部分抽离至此包
