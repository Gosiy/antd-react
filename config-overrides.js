// 不导出(eject) webpack，覆盖配置文件的方法配置webpack
const path = require("path");

//按需加载组件
const {override,addLessLoader,fixBabelImports} = require("customize-cra");
module.exports = override(
    /*支持less文件*/
    addLessLoader(),
    /* 按需加载 antd 样式*/
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),
);